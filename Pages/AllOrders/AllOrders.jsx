'use client'

import React, { useState, useEffect, useMemo } from 'react';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewOrder, setViewOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const API_BASE_URL = 'http://localhost:5000';

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/orders`);
        const data = await response.json();
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  
  const categories = useMemo(() => {
    if (!orders.length) return [];
    
    const uniqueCategories = new Set(orders.map(order => order.styleNumber));
    return ['all', ...uniqueCategories];
  }, [orders]);
  
  const filteredOrders = useMemo(() => {
    return orders
      .filter(order => {
       
        return selectedCategory === 'all' || order.styleNumber === selectedCategory;
      })
      .filter(order => {
       
        return order.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [orders, searchTerm, selectedCategory]);

  const renderSizes = (sizes) => {
    if (!sizes) return 'N/A';
    
    const sizeEntries = Object.entries(sizes)
      .filter(([size, quantity]) => parseInt(quantity) > 0)
      .map(([size, quantity]) => `${size}: ${quantity}`);

    return sizeEntries.length > 0 ? sizeEntries.join(', ') : 'No sizes specified';
  };

  return (
    <div className="max-w-6xl mt-7">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">
          All Orders
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories (Style No.)' : cat}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading orders...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div
                  key={order._id}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-4 min-w-0">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <img
                        src={order.primaryImage}
                        alt={order.styleNumber}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-800 truncate">{order.name} ({order.styleNumber})</h3>
                        <p className="text-sm text-gray-500 truncate">{order.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 text-gray-500 flex-shrink-0 sm:ml-4 self-end sm:self-auto">
                      <button
                        onClick={() => setViewOrder(order)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded cursor-pointer "
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 px-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-gray-500">No orders match your search criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {viewOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative overflow-auto max-h-[90vh]">
            <button
              onClick={() => setViewOrder(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Order Details: {viewOrder.styleNumber}</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <img
                  src={viewOrder.primaryImage}
                  alt="Primary"
                  className="w-full sm:w-1/2 h-64 object-cover rounded"
                />
                {viewOrder.secondaryImage && (
                    <img
                      src={viewOrder.secondaryImage}
                      alt="Secondary"
                      className="w-full sm:w-1/2 h-64 object-cover rounded"
                    />
                )}
            </div>

            <div className="space-y-3 text-sm">
                <p><strong>Name:</strong> {viewOrder.name}</p>
                <p><strong>Email:</strong> {viewOrder.email}</p>
                <p><strong>Phone:</strong> {viewOrder.phone}</p>
                <p><strong>Company:</strong> {viewOrder.company}</p>
                <p><strong>Address:</strong> {viewOrder.address}</p>
                <p><strong>Website:</strong> {viewOrder.website}</p>
                <p><strong>Delivery Time:</strong> {new Date(viewOrder.deliveryTime).toLocaleDateString()}</p>
                <p><strong>Payment Methods:</strong> {viewOrder.paymentMethods.join(', ')}</p>
                <div className="p-3 bg-gray-50 rounded-md">
                    <p><strong>Message:</strong> {viewOrder.message}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                    <p><strong>Adult Sizes:</strong> {renderSizes(viewOrder.adultSizes)}</p>
                    <p><strong>Youth Sizes:</strong> {renderSizes(viewOrder.youthSizes)}</p>
                </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AllOrders;
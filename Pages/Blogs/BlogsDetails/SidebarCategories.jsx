"use client"

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';


const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const SidebarCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${api_url}/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    console.log('Searching for:', searchTerm);
  };

  return (
    <aside className="bg-white w-full max-w-sm font-sans">
      <form onSubmit={handleSearch} className="relative mb-8">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="w-full py-2 pl-4 pr-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-amber-400 hover:bg-amber-500 transition-colors"
        >
          <FaSearch className="text-gray-800" />
        </button>
      </form>

      <div>
        <h3 className="text-base font-semibold uppercase tracking-wider text-gray-800">
          Categories
        </h3>
        <div className="w-12 h-1 bg-amber-400 mt-2 mb-3"></div>
        
        {loading ? (
          <p className="text-sm text-gray-500">Loading categories...</p>
        ) : error ? (
          <p className="text-sm text-red-500">Error: {error}</p>
        ) : (
          <ul>
            {categories.map((category) => (
              <li key={category._id} className="border-b border-gray-200 last:border-b-0">
               
                <span
                  className="block py-2 text-gray-600 text-sm"
                >
                  {category.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default SidebarCategories;
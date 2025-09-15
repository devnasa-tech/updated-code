'use client';

import { useState, useMemo } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { FaExclamationTriangle } from 'react-icons/fa'; // For a nice icon in the toast

// This component receives its data and functions as props
function Users({ users: usersData = [], onDeleteUser = async () => {} }) {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return usersData;
    }
    return usersData.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, usersData]);

  // --- NEW: Toast-based confirmation logic ---
  const handleDeleteConfirmation = (userId, userName) => {
    // This function creates the custom toast with confirmation buttons
    toast((t) => (
        <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-lg rounded-md">
            <div className="flex items-center gap-3">
                <FaExclamationTriangle className="text-yellow-500 h-8 w-8" />
                <div className="text-left">
                    <p className="font-semibold text-gray-800">Delete {userName}?</p>
                    <p className="text-sm text-gray-600">This action cannot be undone.</p>
                </div>
            </div>
            <div className="w-full flex justify-end gap-3">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="px-4 py-1.5 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        // 1. Dismiss the confirmation toast
                        toast.dismiss(t.id);
                        
                        // 2. Call the onDeleteUser prop (which is an async function from AdminDashboard)
                        //    and wrap it in a toast.promise for automatic feedback.
                        toast.promise(
                            onDeleteUser(userId),
                            {
                                loading: `Deleting ${userName}...`,
                                success: `User ${userName} has been deleted.`,
                                error: (err) => `Error: ${err.message || 'Could not delete user.'}`
                            }
                        );
                    }}
                    className="px-4 py-1.5 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    ), {
        duration: 6000, // Keep the toast open longer for user to decide
        position: 'top-center',
    });
  };


  return (
    <div className="max-w-6xl mt-7">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">
          All Users
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="w-full sm:flex-grow">
            <input
              type="text"
              placeholder="Search users by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredUsers.length > 0 ? filteredUsers.map(user => (
            <div 
              key={user._id}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <img 
                src={user.avatarUrl || `https://i.pravatar.cc/150?u=${user._id}`}
                alt={user.name} 
                className="w-16 h-16 object-cover rounded-md"
              />

              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-slate-800 text-base sm:text-lg">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <div className="flex items-center justify-center sm:justify-end space-x-4 w-full sm:w-auto">
                <button 
                  onClick={() => handleDeleteConfirmation(user._id, user.name)} // Call the new confirmation function
                  className="text-gray-400 hover:text-red-600"
                  aria-label={`Delete ${user.name}`}
                >
                  <TrashIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          )) : (
             <div className="text-center py-10 px-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-gray-500">No users found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
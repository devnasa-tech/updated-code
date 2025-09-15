'use client'

import React, { useState } from 'react';

const routes = [
  "Dashboard",
  "Products",
  "Product Management",
  "Orders",
  "Staff & Users",
  "Blogs",
  "Communication",
  "Transactions & Payments",
  "Account & Settings",
  "Analytics"
];

const initialPermissionsState = routes.reduce((acc, route) => {
  acc[route] = false;
  return acc;
}, {});

export default function AddStaff({ availableUsers = [], onAddStaff }) {
  const [selectedUserEmail, setSelectedUserEmail] = useState('');
  const [permissions, setPermissions] = useState(initialPermissionsState);

  const resetForm = () => {
    setSelectedUserEmail('');
    setPermissions(initialPermissionsState);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPermissions(prevPermissions => ({
      ...prevPermissions,
      [name]: checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedUserEmail) {
      alert('Please select a user to promote.');
      return;
    }

    const grantedPermissions = Object.keys(permissions).filter(permission => permissions[permission]);
    
    if (grantedPermissions.length === 0) {
      alert('Please assign at least one permission to the staff member.');
      return;
    }

    const newStaffData = {
      email: selectedUserEmail,
      permissions: grantedPermissions
    };
    
    onAddStaff(newStaffData);
    resetForm();
  };

  return (
    <div className="max-w-6xl mt-7">
      <h2 className="text-2xl font-bold text-gray-800 lg:mb-5">
        Add Staff Member
      </h2>
      <div className="rounded-lg w-full">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="userSelect" className="block text-sm font-medium text-gray-700 mb-1">
                Select User to Promote
              </label>
              <select
                id="userSelect"
                value={selectedUserEmail}
                onChange={(e) => setSelectedUserEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                required
              >
                <option value="" disabled>-- Select a user --</option>
                {(availableUsers || []).map(user => (
                  <option key={user._id} value={user.email}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assign Permissions
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 border p-3 sm:p-4 rounded-md bg-gray-50">
              {routes.map((routeName) => (
                <div key={routeName} className="flex items-center">
                  <input
                    type="checkbox"
                    id={routeName}
                    name={routeName}
                    checked={permissions[routeName]}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <label htmlFor={routeName} className="ml-2 text-sm sm:text-base text-gray-800 select-none">
                    {routeName}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4">
            <button
              type="submit"
              className="px-5 py-2 sm:px-6 sm:py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 text-sm sm:text-base disabled:bg-gray-300"
              disabled={availableUsers.length === 0}
            >
              Add Staff
            </button>
            <button
              type="button" 
              onClick={resetForm}
              className="px-5 py-2 sm:px-6 sm:py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 text-sm sm:text-base"
            >
              Reset
            </button>
          </div>
          {availableUsers.length === 0 && (
            <p className="mt-4 text-sm text-gray-500">No available users to promote to staff.</p>
          )}
        </form>
      </div>
    </div>
  );
}

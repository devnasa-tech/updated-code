'use client'

import React, { useState, useMemo } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const Staff = ({ staff: staffData = [], onDeleteStaff = () => {} }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStaff = useMemo(() => {
        if (!searchTerm) {
            return staffData;
        }
        return staffData.filter((staff) =>
            staff.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, staffData]);

    return (
        <div className="max-w-6xl mt-7">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">
                    All Staff
                </h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search staff by name..."
                        className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="space-y-4">
                    {filteredStaff.length > 0 ? (
                        filteredStaff.map((staff) => (
                            <div
                                key={staff._id}
                                className="flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-4 min-w-0">
                                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                            <img
                                                src={staff.imageUrl || `https://i.pravatar.cc/150?u=${staff._id}`}
                                                alt={staff.name}
                                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                                            />
                                            <div className="min-w-0">
                                                <h3 className="font-semibold text-gray-800 truncate">{staff.name}</h3>
                                                <p className="text-sm text-gray-600 truncate">{staff.email}</p>
                                                <p className="text-sm text-gray-500">Role: <span className="font-medium text-indigo-600 capitalize">{staff.role}</span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-4 text-gray-500 flex-shrink-0 sm:ml-4 self-end sm:self-auto">
                                            <button 
                                                onClick={() => onDeleteStaff(staff._id)}
                                                className="p-1.5 rounded-full hover:bg-gray-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" 
                                                aria-label={`Delete ${staff.name}`}
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Permissions</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {staff.permissions && staff.permissions.length > 0 ? staff.permissions.map(permission => (
                                            <span key={permission} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                                {permission}
                                            </span>
                                        )) : (
                                            <span className="text-xs text-gray-500">No permissions assigned.</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 px-4 bg-white border border-gray-200 rounded-lg">
                            <p className="text-gray-500">No staff found. Try adjusting your search or add a new staff member.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Staff;
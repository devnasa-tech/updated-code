'use client';

import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth'; // ADJUST PATH TO YOUR useAuth HOOK

// --- Component Imports ---

import BlogForm from './BlogForm';
import BlogCategory from './BlogCategory';
import AllProducts from './AllProducts';
import AddProductForm from './AddProductForm';
import ProductBrand from './ProductBrand';
import AllOrders from './../AllOrders/AllOrders';
import Staff from '../Staff/Staff';
import AddStaff from './../AddStaff/AddStaff';
import Users from '../Users/Users';
import Transaction from '../Transactions/Transactions';
import PaymentGateway from '../PaymentGateway/PaymentGateway';
import Messages from '../Messages/Messages';
import Analytics from './Analytics';
import AccountDetailsForm from './AccountDetailsForm';
import AddCategory from './AddCategory';
import AddSubCategory from './AddSubCategory';
import AddProductColour from './AddProductColour';
import AddProductFit from './AddProductFit';
import AddSize from './AddSize';
import AddProductReviews from './AddProductReviews';
import AddPrice from './AddPrice';
import HomePageManager from './HomePageManager';
import SizeGuideManager from './SizeGuideManager';
import AllBlogs from './AllBlog/AllBlogs';

// --- Icon Components ---
const ChevronDownIcon = ({ className }) => (<svg className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>);
const DashboardIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const ProductsIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);
const ProductManagementIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>);
const OrderIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>);
const StaffUsersIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const BlogsIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2h-1"></path><path d="M16 2v20"></path><path d="M11 7h-2.5a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 0 3Z"></path></svg>);
const CommunicationIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const TransactionsIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>);
const AccountSettingsIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const AnalyticsIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>);

// --- Navigation Structure ---
const sidebarNavItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Pages', icon: DashboardIcon, children: [{ name: 'Home' }, { name: 'Size Guide' }] },
    { name: 'Products', icon: ProductsIcon, children: [{ name: 'All Products' }, { name: 'Add Product' }] },
    { name: 'Product Management', icon: ProductManagementIcon, children: [{ name: 'Product Brand' }, { name: 'Product Category' }, { name: 'Product Sub Category' }, { name: 'Product Color' }, { name: 'Product Price' }, { name: 'Product Fit' }, { name: 'Product Size Range' }, { name: 'Product Reviews' }] },
    { name: 'Orders', icon: OrderIcon, children: [{ name: 'All Orders' }] },
    { name: 'Staff & Users', icon: StaffUsersIcon, children: [{ name: 'Staff' }, { name: 'Add Staff' }, { name: 'Users' }] },
    { name: 'Blogs', icon: BlogsIcon, children: [{ name: 'All Blogs' }, { name: 'Add Blogs' }, { name: 'Blog Category' }] },
    { name: 'Communication', icon: CommunicationIcon, children: [{ name: 'Messages' }] },
    { name: 'Transactions & Payments', icon: TransactionsIcon, children: [{ name: 'Transactions' }, { name: 'Payment Gateway' }] },
    { name: 'Analytics', icon: AnalyticsIcon, children: [{ name: 'Google Analytics' }] },
    { name: 'Account & Settings', icon: AccountSettingsIcon, children: [{ name: 'My Account' }, { name: 'Settings' }] },
];

const API_BASE_URL = 'http://localhost:5000';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [staffList, setStaffList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user: loggedInUser, loading: authLoading } = useAuth();

    const [blogToEdit, setBlogToEdit] = useState(null);
    const [categories, setCategories] = useState(['Technology', 'Health', 'Travel', 'Food', 'Lifestyle']);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/find-all-users`);
                if (!response.ok) throw new Error('Failed to fetch users');
                const allUsers = await response.json();

                setStaffList(allUsers.filter(u => u.role === 'staff'));
                setUserList(allUsers.filter(u => u.role !== 'staff'));
            } catch (error) {
                console.error("Error fetching users:", error);
                alert("Could not load user data.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleEditBlog = (blog) => { setBlogToEdit(blog); setActiveTab('Add Blogs'); };
    const handleCancelForm = () => { setBlogToEdit(null); setActiveTab('All Blogs'); };
    const handleFormSubmit = async (formData, blogId) => { /* Your Existing API Logic Here */ };
    const handleAddCategory = (newCategory) => { /* Your Existing Logic Here */ };
    const handleDeleteCategory = (categoryToDelete) => { /* Your Existing Logic Here */ };

    const handleAddStaff = async (newStaffData) => {
        const userToPromote = userList.find(user => user.email === newStaffData.email);
        if (!userToPromote) return alert("Error: User not found!");

        try {
            const response = await fetch(`${API_BASE_URL}/api/users/${userToPromote._id}/role`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role: 'staff', permissions: newStaffData.permissions })
            });
            if (!response.ok) throw new Error('API request failed to promote user');

            const newStaffMember = { ...userToPromote, role: 'staff', permissions: newStaffData.permissions };
            setStaffList(prev => [...prev, newStaffMember]);
            setUserList(prev => prev.filter(user => user.email !== newStaffData.email));
            alert(`User promoted successfully!`);
            setActiveTab('Staff');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleDeleteStaff = async (staffIdToDelete) => {
        if (!confirm("Are you sure you want to demote this staff member?")) return;

        const staffToDemote = staffList.find(staff => staff._id === staffIdToDelete);
        if (!staffToDemote) return alert("Error: Staff not found!");

        try {
            const response = await fetch(`${API_BASE_URL}/api/users/${staffIdToDelete}/role`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role: 'user', permissions: [] })
            });
            if (!response.ok) throw new Error('API request failed to demote staff');

            const demotedUser = { ...staffToDemote, role: 'user', permissions: [] };
            setUserList(prev => [...prev, demotedUser]);
            setStaffList(prev => prev.filter(staff => staff._id !== staffIdToDelete));
            alert(`Staff member demoted to user.`);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    
    const handleDeleteUser = async (userId) => {
        if (!confirm('Are you sure you want to permanently delete this user? This action cannot be undone.')) {
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('API request failed to delete user');
            }

            
            setUserList(prev => prev.filter(user => user._id !== userId));
            alert('User deleted successfully.');

        } catch (error) {
            console.error("Error deleting user:", error);
            alert(`Error: ${error.message}`);
        }
    };

    const handleMainMenuClick = (itemName) => {
        setOpenDropdowns(prev => ({ ...prev, [itemName]: !prev[itemName] }));
    };

    const handleTabClick = (tabName) => {
        if (tabName === 'Add Blogs') { setBlogToEdit(null); }
        setActiveTab(tabName);
    };

    if (authLoading) {
        return <div className="min-h-screen flex justify-center items-center h-64">
            <div className="relative h-16 w-16 flex justify-center items-center">
                
                <div className="absolute h-full w-full rounded-full border-4 border-gray-200"></div>
                
                <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-yellow-500 border-r-transparent border-b-transparent border-l-transparent"></div>
            </div>
        </div>;
    }

    const isSuperAdmin = loggedInUser && loggedInUser.role === 'admin';
    if (!loggedInUser || (loggedInUser.role !== 'staff' && !isSuperAdmin)) {
        return <div className="flex h-screen items-center justify-center text-xl font-semibold">Access Denied.</div>;
    }

    const visibleNavItems = isSuperAdmin
        ? sidebarNavItems
        : sidebarNavItems.filter(item => loggedInUser.permissions.includes(item.name));

    const renderContent = () => {
        if (isLoading) return <div className="flex h-full items-center justify-center">Loading user data...</div>;

        switch (activeTab) {
            case 'Staff': return <Staff staff={staffList} onDeleteStaff={handleDeleteStaff} />;
            case 'Home': return <HomePageManager />;
            case 'Size Guide': return <SizeGuideManager></SizeGuideManager>;
            case 'Add Staff': return <AddStaff availableUsers={userList} onAddStaff={handleAddStaff} />;
            case 'Users': return <Users users={userList} onDeleteUser={handleDeleteUser} />;
            case 'All Orders': return <AllOrders />;
            case 'Transactions': return <Transaction />;
            case 'Payment Gateway': return <PaymentGateway />;
            case 'Messages': return <Messages />;
            case 'All Blogs': return <AllBlogs categories={categories} onEdit={handleEditBlog} />;
            case 'Add Blogs': return <BlogForm categories={categories} blogToEdit={blogToEdit} onFormSubmit={handleFormSubmit} onCancel={handleCancelForm} />;
            case 'Blog Category': return <BlogCategory categories={categories} onAddCategory={handleAddCategory} onDeleteCategory={handleDeleteCategory} />;
            case 'All Products': return <AllProducts />;
            case 'Add Product': return <AddProductForm />;
            case 'Product Brand': return <ProductBrand />;
            case 'Google Analytics': return <Analytics />;
            case 'Product Category': return <AddCategory />;
            case 'Product Sub Category': return <AddSubCategory />;
            case 'Product Color': return <AddProductColour />;
            case 'Product Fit': return <AddProductFit />;
            case 'Product Size Range': return <AddSize />;
            case 'Product Price': return <AddPrice />;
            case 'Product Reviews': return <AddProductReviews />;
            case 'My Account': return <AccountDetailsForm />;
            default: return <Analytics />;
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <aside className="w-full min-h-screen lg:w-72 flex-shrink-0 pt-4">
                        <div className="border-r border-gray-200">
                            <h2 className="text-gray-800 font-bold p-4 text-4xl text-start">Ayria</h2>
                            <nav>
                                <ul>
                                    {visibleNavItems.map((item) => (
                                        <li key={item.name} className="border-b border-gray-200">
                                            <button
                                                onClick={() => item.children ? handleMainMenuClick(item.name) : handleTabClick(item.name)}
                                                className={`w-full text-left p-4 flex items-center justify-between gap-4 transition-colors ${activeTab === item.name && !item.children ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'} ${openDropdowns[item.name] ? 'bg-gray-100' : ''}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <item.icon className="w-5 h-5 text-gray-600" />
                                                    <span className="text-gray-800">{item.name}</span>
                                                </div>
                                                {item.children && (<ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openDropdowns[item.name] ? 'rotate-180' : ''}`} />)}
                                            </button>
                                            {item.children && openDropdowns[item.name] && (
                                                <ul className="bg-gray-50">
                                                    {item.children.map((child) => (
                                                        <li key={child.name}>
                                                            <button
                                                                onClick={() => handleTabClick(child.name)}
                                                                className={`w-full text-left py-3 px-4 pl-12 text-sm flex items-center gap-4 transition-colors ${activeTab === child.name ? 'bg-gray-200 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-200'}`}
                                                            >
                                                                {child.name}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>
                    <main className="flex-1 min-h-screen">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
}
'use client';
import { useState, useEffect, useMemo } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner';
import BlogList from './BlogList'; 
import ViewBlogModal from './ViewBlogModal'; 
import EditBlogModal from './EditBlogModal';

const AllBlogs = ({ categories }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingBlog, setEditingBlog] = useState(null);
  const [viewBlog, setViewBlog] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axiosSecure.get('/blogs');
      setBlogs(Array.isArray(data) ? data : data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };
  
  const confirmDelete = (blogId) => {
    toast((t) => (
      <div className="flex flex-col items-start gap-3">
        <div>
          <p className="text-base font-semibold text-gray-800">Delete Confirmation</p>
          <p className="text-sm text-gray-600 mt-1">This action cannot be undone. Are you sure?</p>
        </div>
        <div className="flex gap-3 w-full">
          <button
            className="w-full bg-red-400 cursor-pointer text-black px-4 py-2 rounded-lg text-sm font-medium"
            onClick={async () => {
              try {
                await axiosSecure.delete(`/blogs/${blogId}`);
                setBlogs(blogs.filter(blog => blog._id !== blogId));
                toast.dismiss(t.id);
                toast.success("Blog deleted successfully!");
              } catch (error) {
                toast.dismiss(t.id);
                toast.error("Failed to delete blog.");
              }
            }}
          >
            Delete
          </button>
          <button
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ), { duration: 5000, style: { maxWidth: '400px' } });
  };

  const handleUpdateSuccess = (updatedBlog) => {
    setBlogs(blogs.map(b => (b._id === updatedBlog._id ? updatedBlog : b)));
    setEditingBlog(null);
  };
  
  const filteredBlogs = useMemo(() => blogs
    .filter(blog => selectedCategory === 'all' || blog.category === selectedCategory)
    .filter(blog => (blog.title || '').toLowerCase().includes(searchTerm.toLowerCase())),
    [blogs, selectedCategory, searchTerm]
  );

  return (
    <div className='max-w-6xl mt-7'>
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">All Blogs</h1>

      <BlogList
        blogs={filteredBlogs}
        loading={loading}
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onView={setViewBlog}
        onEdit={setEditingBlog}
        onDelete={confirmDelete}
      />

      {editingBlog && (
        <EditBlogModal
          blog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}

      {viewBlog && (
        <ViewBlogModal
          blog={viewBlog}
          onClose={() => setViewBlog(null)}
        />
      )}
    </div>
  );
};

export default AllBlogs;
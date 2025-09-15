'use client';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import LoadingSpinner from '../../../components/LoadingSpinner';


const TrashIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.033c-1.12 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const BlogList = ({ blogs, loading, categories, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, onView, onEdit, onDelete }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          className="flex-grow p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      {loading ? <LoadingSpinner /> : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              {blog.image && (
                <div className="relative w-16 h-16 mr-4 hidden sm:block">
                  <Image
                    src={`${img_api}${blog.image}`}
                    alt={blog.title}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-500">Category: {blog.category || 'General'}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button onClick={() => onView(blog)} className="p-2 text-gray-500 hover:text-green-600" title="View Details">
                  <EyeIcon className="w-5 h-5" />
                </button>
                <button onClick={() => onEdit(blog)} className="p-2 text-gray-500 hover:text-blue-600" title="Edit">
                  <FaEdit className="w-5 h-5" />
                </button>
                <button onClick={() => onDelete(blog._id)} className="p-2 text-gray-500 hover:text-red-600" title="Delete">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogList;
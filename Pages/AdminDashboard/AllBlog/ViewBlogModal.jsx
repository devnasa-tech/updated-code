'use client';
import Image from 'next/image';
import RichTextRenderer from '../RichTextRenderer';

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const ViewBlogModal = ({ blog, onClose }) => {
  
  
  let content, shortDescriptionContent;
  try {
    content = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
    shortDescriptionContent = typeof blog.shortDescription === 'string' ? JSON.parse(blog.shortDescription) : blog.shortDescription;
  } catch (e) {
    console.error(`Failed to parse content for blog ID: ${blog._id}`, e);
    content = null;
    shortDescriptionContent = null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 p-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl transform transition-all duration-300 overflow-y-auto h-[90vh] relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blog.image && (
              <div className="w-full rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-200/50 flex justify-center bg-gray-50">
                <Image
                  src={`${img_api}${blog.image}`}
                  alt={blog.title || "Blog image"}
                  width={500}
                  height={350}
                  className="w-full h-auto max-h-[280px]"
                />
              </div>
            )}
            <div className="flex flex-col justify-between space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                {blog.title}
              </h1>
              {(blog.metaTitle || blog.metaDescription) && (
                <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">SEO Details</h3>
                  {blog.metaTitle && (
                    <div>
                      <span className="text-xs font-medium text-gray-500">Meta Title</span>
                      <p className="text-sm text-gray-800 mt-1 break-words">{blog.metaTitle}</p>
                    </div>
                  )}
                  {blog.metaDescription && (
                    <div>
                      <span className="text-xs font-medium text-gray-500">Meta Description</span>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">{blog.metaDescription}</p>
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Category:</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>
          </div>
          
         
          {blog.shortDescription && (
            <div className="prose prose-lg max-w-none text-gray-800 font-medium border-b border-gray-200 pb-6">
              <RichTextRenderer content={shortDescriptionContent} />
            </div>
          )}

          <div className="prose prose-sm sm:prose-base max-w-none text-gray-800 leading-relaxed">
            <RichTextRenderer content={content} />
          </div>

          {blog.note && (
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <p className="text-sm italic text-yellow-900">{blog.note}</p>
            </div>
          )}
          
         
          {blog.extraImage && (
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={`${img_api}${blog.extraImage}`}
                  alt={`${blog.title} extra image`}
                  fill
                  className="object-cover"
                />
            </div>
          )}

          
          {blog.tags && (
            <div className="flex items-center flex-wrap gap-3 pt-4 border-t border-gray-200">
              <span className="text-sm font-semibold text-gray-700">Tags:</span>
              {blog.tags.split(',').map(tag => tag.trim()).map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBlogModal;
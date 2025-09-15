'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import BlogContentEditor from '../BlogContentEditor';

const EditBlogModal = ({ blog, onClose, onUpdateSuccess }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const axiosSecure = useAxiosSecure();
  
  const { register, handleSubmit, setValue, reset, control } = useForm();

  useEffect(() => {
    if (blog) {
      let content, shortDescription;
      try {
        content = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
        
        shortDescription = typeof blog.shortDescription === 'string' ? JSON.parse(blog.shortDescription) : blog.shortDescription;
      } catch (e) {
        console.error(`Failed to parse content for blog ID: ${blog._id}`, e);
        content = null;
        shortDescription = null;
      }
      
      
      setValue('title', blog.title || '');
      setValue('category', blog.category || '');
      setValue('content', content);
      setValue('shortDescription', shortDescription); 
      setValue('note', blog.note || '');             
      setValue('tags', blog.tags || '');             
      setValue('metaTitle', blog.metaTitle || '');
      setValue('metaDescription', blog.metaDescription || '');
      setValue('existingImage', blog.image || null);
      setValue('existingExtraImage', blog.extraImage || null); 
    }
  }, [blog, setValue]);

  const handleUpdate = async (data) => {
    setIsUpdating(true);
    try {
      const submitData = new FormData();
     
      submitData.append('title', data.title);
      submitData.append('category', data.category);
      submitData.append('content', JSON.stringify(data.content));
      submitData.append('shortDescription', JSON.stringify(data.shortDescription)); // New field
      submitData.append('note', data.note);                                         // New field
      submitData.append('tags', data.tags);                                         // New field
      submitData.append('metaTitle', data.metaTitle || '');
      submitData.append('metaDescription', data.metaDescription || '');
      
      if (data.image && data.image[0]) {
        submitData.append('image', data.image[0]);
      } else if (data.existingImage) {
        submitData.append('existingImage', data.existingImage);
      }
      
     
      if (data.extraImage && data.extraImage[0]) {
        submitData.append('extraImage', data.extraImage[0]);
      } else if (data.existingExtraImage) {
        submitData.append('existingExtraImage', data.existingExtraImage);
      }

      const { data: responseData } = await axiosSecure.put(`/blogs/${blog._id}`, submitData);
      
      onUpdateSuccess(responseData.blog);
      toast.success("Blog updated successfully!");
      reset();
      
    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[5px]">
      <div className="bg-white w-full max-w-3xl mx-4 rounded-xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Blog</h1>
        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-5">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
              <input type="text" id="title" {...register('title', { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" required />
            </div>
            <div>
              <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
              <input type="text" id="metaTitle" {...register('metaTitle')} className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input type="text" id="category" {...register('category', { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" required />
            </div>
            
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <input type="text" id="tags" {...register('tags')} placeholder="e.g., fashion, sourcing" className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>
          
         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <BlogContentEditor name="shortDescription" control={control} defaultValue={blog?.shortDescription || null} />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Main Image</label>
              <input type="file" id="image" accept="image/*" {...register('image')} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200" />
            </div>
            
            <div>
              <label htmlFor="extraImage" className="block text-sm font-medium text-gray-700 mb-1">Extra Image</label>
              <input type="file" id="extraImage" accept="image/*" {...register('extraImage')} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
            </div>
          </div>
          <div>
            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
            <textarea id="metaDescription" {...register('metaDescription')} className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" rows={4} placeholder="Write meta description..."></textarea>
          </div>

       
          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">Note (Optional)</label>
            <textarea id="note" {...register('note')} className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" rows={2} placeholder="Add an internal note..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <BlogContentEditor name="content" control={control} defaultValue={blog?.content || null} />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="w-[180px] h-[40px] px-3 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">Cancel</button>
            <button type="submit" disabled={isUpdating} className="w-[180px] h-[40px] px-3 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 disabled:opacity-70 flex items-center justify-center gap-2">
              {isUpdating ? <><FaSpinner className="animate-spin" /> Submitting...</> : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
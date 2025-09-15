'use client';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import BlogContentEditor from "./BlogContentEditor";
import { FaSpinner } from "react-icons/fa";

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const BlogForm = ({ blogToEdit, onFormSubmit, onCancel }) => {
  const isEditing = !!blogToEdit;
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);
  
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      shortDescription: null, 
      note: "",
      tags: "",
      content: null,
      metaTitle: "",
      metaDescription: "",
      image: null,
      extraImage: null,
    },
  });

  const watchedImage = watch("image");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosSecure.get("/categories");
        setCategories(data || []);
        if (!isEditing && data.length > 0) {
          setValue("category", data[0].value || data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, [isEditing, axiosSecure, setValue]);

  useEffect(() => {
    if (isEditing && blogToEdit) {
      let contentObject = null;
      let shortDescriptionObject = null;
      try {
        contentObject = typeof blogToEdit.content === "string" ? JSON.parse(blogToEdit.content) : blogToEdit.content;
      
        shortDescriptionObject = typeof blogToEdit.shortDescription === "string" ? JSON.parse(blogToEdit.shortDescription) : blogToEdit.shortDescription;
      } catch (e) {
        console.error("Failed to parse content for editing:", e);
      }
      
      reset({
        title: blogToEdit.title,
        category: blogToEdit.category,
        shortDescription: shortDescriptionObject,
        note: blogToEdit.note || "",
        tags: blogToEdit.tags || "",
        content: contentObject,
        metaTitle: blogToEdit.metaTitle,
        metaDescription: blogToEdit.metaDescription,
        image: null,
        extraImage: null,
      });

      if (blogToEdit.image) {
        setImagePreview(`${img_api}${blogToEdit.image}`);
      }
    }
  }, [blogToEdit, isEditing, reset]);

  useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      const file = watchedImage[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [watchedImage]);

  const onSubmit = async (formData) => {
    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("category", formData.category);
      
      
      if (formData.shortDescription) {
        submitData.append("shortDescription", JSON.stringify(formData.shortDescription));
      }
      
      submitData.append("note", formData.note);
      submitData.append("tags", formData.tags);
      if (formData.content) {
        submitData.append("content", JSON.stringify(formData.content));
      }
      submitData.append("metaTitle", formData.metaTitle);
      submitData.append("metaDescription", formData.metaDescription);

      if (formData.image && formData.image.length > 0) {
        submitData.append("image", formData.image[0]);
      } else if (isEditing && blogToEdit.image) {
        submitData.append("existingImage", blogToEdit.image);
      }
      
      if (formData.extraImage && formData.extraImage.length > 0) {
        submitData.append("extraImage", formData.extraImage[0]);
      } else if (isEditing && blogToEdit.extraImage) {
        submitData.append("existingExtraImage", blogToEdit.extraImage);
      }

      const url = isEditing ? `/blogs/${blogToEdit._id}` : "/blogs";
      const method = isEditing ? axiosSecure.put : axiosSecure.post;

      const { data } = await method(url, submitData);
      toast.success(
        isEditing ? "Blog updated successfully!" : "Blog added successfully!"
      );
      onFormSubmit(data.blog, blogToEdit?._id);
      reset();
    } catch (err) {
      console.error("Failed to submit blog:", err);
      toast.error("Failed to submit blog.");
    }
  };

  return (
    <div className="max-w-6xl mt-7">
      <Head>
        <title>{isEditing ? "Edit Blog" : "Add New Blog"}</title>
      </Head>
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">
        {isEditing ? "Edit Blog" : "Add New Blog"}
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Blog Title</label>
              <input
                id="title"
                {...register("title", { required: "Title is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="metaTitle" className="block text-gray-700 font-medium mb-2">Meta Title</label>
              <input
                id="metaTitle"
                type="text"
                {...register("metaTitle", { required: "Meta Title is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="SEO Meta Title"
              />
               {errors.metaTitle && <p className="text-red-500 text-xs mt-1">{errors.metaTitle.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat.value || cat}>{cat.value || cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">Tags</label>
              <input
                id="tags"
                type="text"
                {...register("tags")}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="e.g., fashion, sourcing, tech"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Short Description</label>
            <BlogContentEditor
              name="shortDescription"
              control={control}
              defaultValue={isEditing ? blogToEdit.shortDescription : null}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="my-6">
              <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Main Image (Featured)</label>
              <input
                id="image"
                type="file"
                accept="image/*"
                {...register("image", {
                  validate: (value) => {
                    if (!isEditing) {
                      return value && value.length > 0 ? true : "Image is required for new blog";
                    } else {
                      if (!blogToEdit?.image && (!value || value.length === 0)) {
                        return "Image is required since no existing image found";
                      }
                      return true;
                    }
                  }
                })}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
              />
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
            </div>

            <div className="my-6">
              <label htmlFor="extraImage" className="block text-gray-700 font-medium mb-2">Extra Image (Optional)</label>
              <input
                id="extraImage"
                type="file"
                accept="image/*"
                {...register("extraImage")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="metaDescription" className="block text-gray-700 font-medium mb-2">Meta Description</label>
            <textarea
              id="metaDescription"
              rows="3"
              {...register("metaDescription", { required: "Meta Description is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="SEO Meta Description"
            />
            {errors.metaDescription && <p className="text-red-500 text-xs mt-1">{errors.metaDescription.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="note" className="block text-gray-700 font-medium mb-2">Note (Optional)</label>
            <textarea
              id="note"
              rows="2"
              {...register("note")}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Add an internal note or a special mention"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Content</label>
            <BlogContentEditor
              name="content"
              control={control}
              defaultValue={isEditing ? blogToEdit.content : null}
            />
          </div>
            
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex justify-center items-center bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  <span>Submitting...</span>
                </>
              ) : (
                isEditing ? "Update Blog" : "Publish Blog"
              )}
            </button>
            <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
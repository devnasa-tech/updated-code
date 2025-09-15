"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaRegComment,
  FaTag,
  FaUser,
  FaLink,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import CommonBanner from "./CommonBanner";
import CommentForm from "../Pages/Blogs/BlogsDetails/CommentForm";
import SidebarCategories from "../Pages/Blogs/BlogsDetails/SidebarCategories";
import TagsSection from "../Pages/Blogs/BlogsDetails/TagsSection";
import BlogArchive from "../Pages/Blogs/BlogsDetails/BlogArchive";
import RichTextRenderer from "../Pages/AdminDashboard/RichTextRenderer";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const BlogDetails = ({ id }) => {
  console.log(id);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [parsedContent, setParsedContent] = useState(null);
  const [parsedShortDescription, setParsedShortDescription] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${api_url}/blogs/${id}`);
        console.log("Fetching from:", `${api_url}/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data);

        if (data.content && typeof data.content === "string") {
          setParsedContent(JSON.parse(data.content));
        } else {
          setParsedContent(data.content);
        }

        if (
          data.shortDescription &&
          typeof data.shortDescription === "string"
        ) {
          setParsedShortDescription(JSON.parse(data.shortDescription));
        } else {
          setParsedShortDescription(data.shortDescription);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return { day: "00", month: "---" };
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString("en-US", { day: "2-digit" }),
      month: date.toLocaleDateString("en-US", { month: "short" }).toLowerCase(),
    };
  };

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading post...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-20 text-lg text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20 text-lg">Blog post not found.</div>
    );
  }

  const postDate = formatDate(blog.createdAt);

  const shareLinks = [
    { Icon: FaLink, href: "#" },
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
  ];

  const authorSocialLinks = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <main>
      <CommonBanner title={"blog"} breadcrumb={"blog details"} />

      <section className="max-w-6xl mx-auto py-6 flex flex-col-reverse lg:flex-row gap-6 px-4 sm:px-6">
        <div className="bg-white lg:w-[70%]">
          <div className="relative w-full h-[400px] bg-[#D6D6D6]">
            {blog.image && (
              <Image
                src={`${api_url}${blog.image}`}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
            <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 text-center flex flex-col px-4 py-1">
              <span className="text-base font-semibold">{postDate.day}</span>
              <span className="text-base tracking-widest">
                {postDate.month}
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-0">
            <h2 className="text-3xl font-semibold text-[#262626] my-4">
              {blog.title}
            </h2>
            <div className="flex items-center space-x-6 text-gray-500 mb-4">
              <div className="flex items-center space-x-2">
                <FaTag />
                <span>{blog.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegComment />
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-0">
            <div className="max-w-4xl mx-auto">
              {parsedShortDescription && (
                <div className="prose max-w-none text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                  <RichTextRenderer content={parsedShortDescription} />
                </div>
              )}

              <div className="prose max-w-none text-gray-600 text-sm leading-relaxed">
                <RichTextRenderer content={parsedContent} />
              </div>

              {blog.note && (
                <blockquote className="bg-gray-50 border-l-2 border-amber-400 p-6 my-8">
                  <p className="italic text-gray-700 leading-relaxed">
                    {blog.note}
                  </p>
                </blockquote>
              )}
            </div>
          </div>

          {blog.extraImage && (
            <div className="bg-white py-6 p-4 sm:p-0">
              <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-80 md:h-[400px] bg-gray-200">
                  <Image
                    src={`${api_url}${blog.extraImage}`}
                    alt={`${blog.title} extra content`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="bg-white py-8 px-4 sm:p-0 font-sans">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4 mb-8 gap-4">
                {blog.tags && (
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-semibold text-gray-800">Tags:</span>
                    {blog.tags
                      .split(",")
                      .map((tag) => tag.trim())
                      .map((tag, index) => (
                        <span
                          key={index}
                          className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                )}
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="font-medium text-sm sm:text-base">
                    Share
                  </span>
                  {shareLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="hover:text-gray-900 transition-colors"
                    >
                      <link.Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-24 h-24 bg-gray-200 flex-shrink-0 rounded-full"></div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About the Author
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our content is crafted by the dedicated team at Aaryan
                    Sourcing, bringing you insights from the heart of the
                    apparel industry.
                  </p>
                  <div className="flex items-center gap-4 text-gray-500">
                    {authorSocialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="hover:text-gray-800 transition-colors"
                      >
                        <link.Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 p-4 sm:p-0">
            <CommentForm />
          </div>
        </div>

        <aside className="blog_sidebar w-full lg:w-[30%] px-4 sm:px-0">
          <SidebarCategories />
          <TagsSection />
          <BlogArchive />
        </aside>
      </section>
    </main>
  );
};

export default BlogDetails;

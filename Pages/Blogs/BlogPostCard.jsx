'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaUser, FaComment } from 'react-icons/fa';
import RichTextRenderer from '../AdminDashboard/RichTextRenderer'; 

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const BlogPostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} className="relative block w-full h-full min-h-[450px] rounded-lg overflow-hidden shadow-lg group">
      
      <Image
        src={`${api_url}${post.image}`}
        alt={post.title}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 px-3 py-1 text-center rounded-sm">
        <span className="text-base font-bold">{post.date.day}</span>
        <span className="block text-xs uppercase tracking-wider">{post.date.month}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
       
        <div className="prose prose-sm prose-invert text-gray-200 mb-4 line-clamp-3">
            <RichTextRenderer content={post.description} />
        </div>

        {post.tags && (
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {post.tags.split(',').map(tag => tag.trim()).map((tag, index) => (
              <span key={index} className="bg-white/20 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
       
        <div className="flex items-center text-xs space-x-4 text-gray-200 mt-auto border-t border-white/20 pt-3">
          <div className="flex items-center space-x-1">
            <FaUser className="text-yellow-400"/>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaComment className="text-yellow-400"/>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
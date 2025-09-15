'use client'
import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import ResourceCard from "./ResourceCard";

// Import icons for the modal
import { IoClose } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const banner_img = "https://i.ibb.co/QFrKjBwS/resource.webp";

const Resource = () => {
  // 1. Add state to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* banner */}
      <CommonBanner title={"resource"} breadcrumb={"resource"}></CommonBanner>

      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-[40px] uppercase font-bold ">RESOURCES</h1>
          <p className="text-base capitalize text-[#777777] font-semibold my-2 ">
            Marketing & Brand Material
          </p>
        </div>
        <p className="text-[#777777] font-normal">
          AA Sourcing Ltd, your trusted business partner, provides comprehensive
          resources to help you effectively market and sell our apparel to your
          customers. Our toolkit includes high-resolution product images,
          user-friendly web tools, and physical materials such as printed
          cookbooks, color cards, size charts, print and embroidery guides, coat
          hangers, and detailed product sheets.
        </p>
        <p className="text-[#777777] font-normal  mt-6">
          Whether building a digital catalog or enhancing your in-store
          presentation, these assets are crafted to support your sales efforts
          and strengthen your brand presence. Explore everything we offer and
          discover how partnering with AA Sourcing Ltd can drive growth, boost
          efficiency, and elevate your business to new heights.
        </p>
      </div>

      <div className="resource_cards px-4 sm:px-10 md:px-16  lg:px-32 pt-8 pb-16">
        {/* 2. Pass the function to open the modal into your ResourceCard component */}
        <ResourceCard onRequestHandler={() => setIsModalOpen(true)} />
      </div>

      {/* 3. Add the Modal JSX at the end */}
      <div
        className={`
          fixed bottom-8 right-8 w-80 bg-white rounded-lg shadow-2xl p-6
          transition-all duration-500 ease-in-out
          ${isModalOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <IoClose size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          We're happy to answer your questions. Contact us by phone or email.
        </p>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center">
            <BsTelephoneFill className="w-5 h-5 mr-3 text-gray-500" />
            <span>+8801713-117849</span>
          </div>
          <div className="flex items-center">
            <MdEmail className="w-5 h-5 mr-3 text-gray-500" />
            <span>aasourcingltd77@gmail.com</span>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Monday - Thursday</p>
              <p>08:30h - 17:00h GMT+6</p>
            </div>
            <div>
              <p className="font-semibold">Friday</p>
              <p>08:30h - 14:30h GMT+6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
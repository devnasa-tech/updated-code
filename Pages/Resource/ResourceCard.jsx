'use client'
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

const ResourceCard = ({ onRequestHandler }) => {
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/dwqjG5qC/Online-Lookbook-Discover-Trendy-Fashion-and-Style-Inspiration.jpg"
            alt="Online Lookbook"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online Lookbook</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Online Lookbook -  Discover Trendy Fashion and Style Inspiration
            </p>
            <Link href={'/lookbook'} className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <FaEye />
              <span className="capitalize">view</span>
            </Link>

          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/dwHJ5f5M/Color-Palette-Collection-for-Home-Design-and-Decoration-Inspiration.jpg"
            alt="Colour Card"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Colour Card</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Color Palette Collection for Home Design and Decoration Inspiration
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <MdDownload />
              <span className="capitalize">download</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co/W4x92LqD/printing-embroidery-options.jpg"
            alt="Printing & Embroidery"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Printing & Embroidery</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Custom Print and Embroidery Services for Apparel and Merchandise
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <FaEye />
              <span className="capitalize">view</span>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/CKrd0M8R/Premium-Coat-Hangers-for-Home-and-Closet-Organization.jpg"
            alt="Coat Hangers"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Coat Hangers</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Premium Coat Hangers for Home and Closet Organization
            </p>
            <button
              onClick={onRequestHandler}
              className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
            >
              <RiMenu2Fill />
              <span className="capitalize">request</span>
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/6cgvVmM5/Apparel-Size-Chart-Accurate-Measurement-Guide-for-Perfect-Fit.jpg"
            alt="Size Charts"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Size Charts</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Apparel Size Chart – Accurate Measurement Guide for Perfect Fit
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <FaEye />
              <span className="capitalize">view</span>
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co/Q2wB13W/product-sheets.webp"
            alt="Product Sheets"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Sheets</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Download detailed product sheets for our entire range.
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <MdDownload />
              <span className="capitalize">download</span>
            </button>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/BVgrksys/Global-Code-of-Conduct-for-Ethical-Business-Practices-and-Integrity.jpg"
            alt="Code Of Conduct"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Code Of Conduct</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Global Code of Conduct for Ethical Business Practices and Integrity
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <MdDownload />
              <span className="capitalize">view</span>
            </button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/DfsTyKxx/Premium-Women-s-Black-Hoodie-Apparel-Exclusive-Style-Comfort.jpg"
            alt="Exclusive Style & Comfort"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Style & Comfort</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Premium Women's Black Hoodie – Apparel Exclusive Style & Comfort
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <MdDownload />
              <span className="capitalize">download</span>
            </button>
          </div>
        </div>

        {/* Card 9 */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://i.ibb.co.com/xK3SBqm9/Types-of-Fabric-Guide-to-Popular-Materials-for-Apparel.jpg"
            alt="type of fabric"
            className="w-full h-52 rounded-md"
          />
          <div className="py-3 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Type of Fabric</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Types of Fabric Guide to Popular Materials for Apparel
            </p>
            <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
              <MdDownload />
              <span className="capitalize">view</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourceCard;
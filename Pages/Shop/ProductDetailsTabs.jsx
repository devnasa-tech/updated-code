"use client";
import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import ProductDetailsData from "../AdminDashboard/ProductDetailsData";
import ProductPrintingEmbroidery from "../AdminDashboard/ProductPrintingEmbroidery";
import ProductTextileCare from "../AdminDashboard/ProductTextileCare";
import AvailableVarients from "../AdminDashboard/AvailableVarients";
import LoadingSpinner from "../../components/LoadingSpinner";
import DownLoad from "../AdminDashboard/DownLoad";


const ProductDetailsTabs = ({ productId }) => {
  if (!productId) {
    return  <LoadingSpinner></LoadingSpinner>;
  }


  const allTabs = [
    {
      title: "Product Description",
      content: <ProductDetailsData productId={productId} />,

      isVisible: !!productId, 
    },

        {
      title: "Availabel Varients",
      content: <AvailableVarients productId={productId} />,

      isVisible: !!productId, 
    },

    {
      title: "Printing & Embroidery",
      content: <ProductPrintingEmbroidery productId={productId} />,
      isVisible: !!productId,
    },
    {
      title: "Textile Care",
      content: <ProductTextileCare productId={productId} />,
      isVisible: !!productId,
    },
        {
      title: "Download",
      content: <DownLoad />,
      isVisible: !!productId,
    },

  ];

  // Filter the tabs to only show those that have content
  const visibleTabs = allTabs.filter(tab => tab.isVisible);

  return (
    <div className="w-full   font-sans">
      <Tabs
        className="flex w-full rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm"
        focusTabOnClick={false}
      >
        {/* Left Side: Tab Buttons */}
        <TabList className="flex flex-col border-r border-slate-200 bg-slate-50 p-3 w-1/4 max-w-[240px]">
          {visibleTabs.map((tab, index) => (
            <Tab
              key={index}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 rounded-md cursor-pointer transition-colors duration-200 outline-none hover:bg-slate-200 hover:text-slate-800"
              selectedClassName="!bg-[#ffbb42] !text-white shadow-sm"
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {/* Right Side: Tab Content Panels */}
        <div className="flex-1 p-2 md:p-4">
          {visibleTabs.map((tab, index) => (
            <TabPanel key={index}>
              {/* The content is now a React component */}
              {tab.content}
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTabs;
import React from "react";
import CommonBanner from "../../components/CommonBanner";
import Image from "next/image";



const workProcessData = [
  {
    id: 1,
    title: "Aaryan Sourcing Lookbook",
    description: "Discover custom apparel inspiration in our lookbook, with styles ranging from commercial to high fashion. It's the perfect guide to help you launch your brand the Aaryan way.",
    imgUrl: "https://i.ibb.co/jPFBG4zW/Aaryan-Sourcing-Premium-Apparel-Lookbook-for-Trendy-Clothing-compressed.jpg",
  },
  {
    id: 2,
    title: "Explore Our Fashion Lookbook",
    description: "Browse our fashion lookbooks for custom clothing designs tailored to your brand. Our collection, from casual to high-end, is ideal for inspiring your next men's and women's apparel line.",
    imgUrl: "https://i.ibb.co/m5BRcq0h/Custom-Apparel-Designs-for-Fashion-Brands-Premium-Clothing-Style-Solutions.jpg",
  },
  {
    id: 3,
    title: "Custom Apparel Designs for Fashion Brands",
    description: "We create custom-designed clothing that reflects your brand's personality. Our talented team turns your concepts into glamorous designs, with every detail crafted to make your company unique.",
    imgUrl: "https://i.ibb.co/67VvvpVC/Discover-Our-Latest-Collections-Modern-Fashion-Apparel-Trends.jpg",
  },
  {
    id: 4,
    title: "Embroidery Section",
    description: "Our embroidery section adds brand identity to garments using modern computerized machines for precise logos, monograms, and ornaments. We use eco-friendly threads and ensure high quality that meets international standards.",
    imgUrl: "https://i.ibb.co/LXTkVxLN/Explore-Our-Fashion-Lookbook-Modern-Apparel-Style-Inspiration.jpg",
  },
  {
    id: 5,
    title: "Discover Our Latest Collections",
    description: "Explore our new arrivals of custom tailor-made clothing for men. We curate a mix of classic and on-trend styles using premium fabrics to help you expand your portfolio with versatile pieces.",
    imgUrl: "https://i.ibb.co/dsMMyqzY/Get-Inspired-by-High-Quality-Apparel-Designs-Premium-Fashion-Modern-Styles.jpg",
  },
  {
    id: 6,
    title: "Get Inspired by High-Quality Apparel Designs",
    description: "Get inspired by our high-quality apparel designs. We offer a mix of classic and on-trend styles made with premium fabrics, perfect for building a collection that attracts your target consumer and enhances your branding.",
    imgUrl: "https://i.ibb.co/PvYBmtz5/Lookbook-for-Custom-Fashion-Pieces-Unique-Apparel-Designer-Styles.jpg",
  },
];

const
  Book = () => {
    return (
      <main>
        <CommonBanner
          title={"Online Loackbook"}
          breadcrumb={" Loackbook"}
        ></CommonBanner>


        <section className="bg-black px-6 py-10 flex justify-center  text-lg capitalize font-semibold text-gray-100 my-4">
          <p>
            We believe in the power of culture, collaboration and cohesion to
            propel our partners forward.
          </p>
        </section>

        {/* work process */}


        <section className="max-w-6xl mx-auto  px-6 sm:px-10 md:px-14 lg:px-18 xl:px-0 py-12 space-y-16">
          {workProcessData.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[400px]"
            >
              {/* Content */}
              <div
                className={`flex flex-col justify-center h-full ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base  leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`w-full h-full relative ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

            </div>
          ))}
        </section>


      </main>
    );
  };

export default Book;
'use client'
// import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";
import { PiFilePdfLight } from "react-icons/pi";

import CommonBanner from "../../components/CommonBanner";
import ExclusiveColours from "./ExclusiveColours";
import HighlightColours from "./HighlightColours";


const banner_img = "https://i.ibb.co/n8mm55BV/colours.webp";




const Colours = () => {
  return (
    <div className="">
      {/* banner */}
      <CommonBanner
        title={"colours"}
        breadcrumb={"colours"}
        backgroundImage={banner_img}
      ></CommonBanner>
      {/* color card  */}
      <div className="max-w-6xl mx-auto">

        {/* 1st card */}

        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">
          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Unlimited Customized Color Possibilities
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Unlimited customized color possibilities enable you to create the
              perfect shades for your projects. With precision matching, expert
              guidance, and a wide range of finishes, our service allows you to
              craft unique, personalized colors that reflect your exact vision.
              Whether you are in fashion, design, or printing, we offer the
              ultimate solution for limitless color customization, ensuring
              vibrant and consistent results every time. Let your creativity
              flow without boundaries! Allow you to create the perfect shades
              for your projects. With precision matching, expert guidance, and
              an expansive range of finishes, our service allows you to craft

            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>

          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/cKyVZSNm/colour-Photo.webp"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>
        </div>

         


        



  

        {/* 2nd card */}
        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">
          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/6hhjZrz/Explore-Our-Premium-Apparel-Colors.jpg"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>

          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Explore Our Premium Apparel Colours
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Discover the best quality Apparel colours in Aaryan Sourcing. We also specialise in small batch custom colour dyeing,
              producing a selection of bright shades to accent your project. Our professionals use individualised techniques to create
              vivid, durable colours. You can select from our garment colour range, or we can match to any colour in your brand. It
              comes in shades for every style taste, whether you fancy bright or classic colours. According to Aaryan Sourcing, it
              is the dye sustainability, colour consistency, and quality that will ensure that your product looks bright and new season
              after season. Discover our fine quality fabric colours and have your design interests fulfilled through Custom Colour
              Dyeing
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>


        </div>
        {/* 3rd card */}
        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">


          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Custom Dyeing Services for Your Brand
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Aaryan Sourcing offers brand-specific dyeing. Your designs are brought to life without compromise by the Colour
              Matching Specialist. -our premiere method when establishing new colours or selecting colours for an existing line.
              We work with you to achieve your colouring requirements and have a large variety of high-vis spot colours available.
              Premium Apparel Colours guarantee that you will get season-to-season consistency in high-quality fabrics. We serve
              all your needs, from material to design. Our dye-to-order services enable you to create brand custom colour palettes.
              Aaryan Sourcing supplies expert colour matching and custom dyeing to make sure your brand's colours are exactly as
              you want to represent, of the highest quality. Join us in turning your ideas into colour
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>

          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/8kbNJKG/Custom-Dyeing-Services-for-Your-Brand.jpg"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>


        </div>
        {/* 4th card */}
        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">

          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/ZzMXqjpV/Wide-Range-of-Colours-for-Apparel.jpg"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>
          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Wide Range of Colours for Apparel
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Aaryan Sourcing offers a rainbow spectrum of garment colours to make your imagination stand out. Our premium
              Apparel Colours Collection is the ideal selection for drawers and storage, all cut utilising our latest "drawn" process
              to ensure a brilliant white ground for exceptional print clarity and colour pop. Our premium colours are dyed using
              modern methods to deliver the lustrous colour, durability, and attractiveness in our products. Whether classic or
              contemporary, we offer colours to match your brand. These colours will maintain through many washes, so your shirt
              will always look good. Aaryan Sourcing guarantees premium and luxury colours to make your designs stand out.
              Please browse our inventory today.
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>




        </div>
        {/* 5th card */}
        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">


          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              High-Quality Custom Colour Matching
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Aaryan Sourcing offers an excellent bespoke colour-match service for clothes that match your brand. We produce our
              premium quality clothes especially for you. Given that fashion is all about having the perfect colour, we offer a custom
              dye service to assist you in producing the ideal hues. Collaboration is our speciality. Our skilled team will colour
              match to your specifications using advanced dyeing methods for a perfect finish. Check out our custom dye services
              to match an existing armour colour or create your own! Our premium clothing circumnavigate will complement aaryan
              sourcing; your clothes will look bright and vibrant. Our exact-matching bespoke colours will strengthen your brand
              and ensure your clothes stand out as unique love grenades in the heart of your fans.
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>

          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/N6s8sZRF/High-Quality-Custom-Colour-Matching.jpg"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>


        </div>
        {/* 6th card */}
        <div className="color_card w-full grid grid-cols-2 gap-10 bg-white shadow-lg p-8  lg:mt-10 mb-8 lg:mb-20">

          <div className="colours_card_img w-full  ">
            <img
              src="https://i.ibb.co/tTtyBDFx/Why-Choose-Aaryan-Sourcing-for-Custom-Dyeing-Premium-Dyeing-Services.jpg"
              alt="Banner Image"
              fill
              className="object-cover sm:w-1/2 xl:w-full mx-auto rounded-lg"
            />
          </div>
          <div className="section_cnt w-full  ">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Why Choose Aaryan Sourcing for Custom Dyeing?
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Aaryan Sourcing, our top-class custom dyeing service, offers the ultimate range of cloth colours to suit your shade.
              Our experience and passion for garment design instil the value of colour. Do you tend toward cool or warm colours?
              Creative solutions are necessary here to guarantee an even and durable colour to your designs. Our extensive colour
              range means that we can present your brand in wonderful and vibrant colours. Whether you need a shade tailored to
              high fashion or everyday wear, our quality can help you create something truly one-of-a-kind. Aaryan Sourcing's
              custom dyeing offers premium, vibrant and bright fabric colours for great-looking, stand-out garments that benefit
              your business, because unique fabrics have a uniqueness about you.
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>




        </div>

      </div>




      {/* colour collections */}
      <div className="colour_collections lg:px-32">
        <ExclusiveColours></ExclusiveColours>
        <HighlightColours></HighlightColours>
      </div>
    </div>
  );
};

export default Colours;
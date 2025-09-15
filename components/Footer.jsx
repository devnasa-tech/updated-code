import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Remote image URLs
const logoURL = "https://i.ibb.co/4Z0cLVZd/logo.webp";
const appstoreURL = "https://i.ibb.co/nNpN7s6K/app-stor.webp";
const googlePlayURL = "https://i.ibb.co/JWG1wS9N/google-play.webp";
const paymentURL = "https://i.ibb.co/zVSbVxqC/payment.webp";

const content = 'djkfjdlkfjdkjfkdjkfjdkfjkdjfkldjflkjdfkjdlkfjlkdjfkdjfkjkf'
const Footer = () => {
  return (
    <footer>
      <div className="md:flex flex-wrap">
        {/* Logo & Contact Info */}
        <div className="bg-[#EFEFEF] w-full lg:w-[30%] py-14 pl-6 sm:pl-14 lg:pl-8 xl:pl-[140px]">
          {/* Logo */}
          <Image
            src={logoURL}
            alt="App Store"
            width={150}
            height={50}
          />
          


          {/* Contact */}
          <h3 className="text-[16px] font-semibold sub_title_color my-5 uppercase">
            QUESTION OR FEEDBACK?
          </h3>
          <div className="flex items-center gap-2 my-2">
            <FaPhoneAlt />
            <span className="text-[16px] font-medium mr-2">+018 900 6690</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <MdEmail />
            <span className="text-[16px] font-medium">support@ariya.com</span>
          </div>

          {/* App Store */}
          <div className="flex gap-2 mt-8">
            <Image
              src={appstoreURL}
              alt="App Store"
              width={120}
              height={50}
              className="cursor-pointer"
            />
            <Image
              src={googlePlayURL}
              alt="Google Play"
              width={120}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full lg:w-[70%] bg-[#F6F6F6] grid grid-cols-4 gap-10 py-14 px-6 sm:px-14 lg:px-8 xl:px-8">
          {/* Company */}
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                Company
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className="absolute top-0 w-full h-0.5 bg-gray-200"></div>
                <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/about" className="hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-black">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/workprocess" className="hover:text-black">
                  Work Process
                </Link>

              </li>
              <li>
                <Link href="/certificates" className="hover:text-black">
                  Certificate
                </Link>

              </li>
              <li>
                <Link href="/Sustainability" className="hover:text-black">
                  Sustainability
                </Link>

              </li>
            </ul>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                Service
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className="absolute top-0 w-full h-0.5 bg-gray-200"></div>
                <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/service" className="hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-black">
                  Order Now
                </Link>

              </li>
              <li>
                <Link href="/Sizechart" className="hover:text-black">
                  Size Guide
                </Link>

              </li>
            </ul>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                MARKETING
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className="absolute top-0 w-full h-0.5 bg-gray-200"></div>
                <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/resource" className="hover:text-black">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/lookbook" className="hover:text-black">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link href="/colorard" className="hover:text-black">
                  Color Card
                </Link>

              </li>
              <li>
                <Link href="/printing&embroidery" className="hover:text-black">
                  Printing & Embroidery
                </Link>

              </li>
            </ul>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                Stay up-to-date

              </h3>
              <div className="mt-2 mb-4 relative">
                <div className="absolute top-0 w-full h-0.5 bg-gray-200"></div>
                <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/Cookie" className="hover:text-black">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/Privecy" className="hover:text-black">
                  Privacy & Policy
                </Link>
              </li>
             
              <li>
                <Link href="/faq" className="hover:text-black">
                  FAQ
                </Link>

              </li>
              <li>
                {/* <Link href="/news&blog" className="hover:text-black">
                  FAQ News & Blog
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Shop
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                Shop
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className="absolute top-0 w-full h-0.5 bg-gray-200"></div>
                <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              {/* {[
                
                "Shoes",
                "Bags & Accessories",
                "Top Brands",
                "Sale & Special Offers",
                "Sustainability"
                ,
              ].map((item) => (
                <li key={item}>
                  <a href={item} className="hover:text-black">
                    {item}
                  </a>
                </li>
              ))} */}
          {/* </ul>
          </div> */}

          {/* Policies */}

        </div >
      </div>

      {/* Bottom Section */}
      < div className="bg-[#E4E4E4] py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-34 flex flex-col md:flex-row items-center justify-between" >
        {/* Copyright */}
        < p className="text-base mb-4 md:mb-0" >
          & copy; 2025 Ayira.All rights reserved.
        </p >

        {/* Social Icons */}
        < div className="flex space-x-4 mb-4 md:mb-0 text-gray-700" >
          {
            [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <a key={idx} href="#" className="hover:text-black transition">
                  <Icon />
                </a>
              )
            )
          }
        </div >

        {/* Payment */}
        < div >
          <Image
            src={paymentURL}
            alt="Payment Methods"
            width={200}
            height={40}
            className="h-auto"
          />
        </div >

         <div>
             {/* <meta name="Aaryan Sourcing. – Apparel Services" content={`${content}`} /> */}
         </div>

      </div >
    </footer >
  );
};

export default Footer;

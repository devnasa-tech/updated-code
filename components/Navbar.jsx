"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Topbar from "./Topbar";
import Image from "next/image";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const MegaMenu = ({ content }) => (
  <div
    className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-3xl
               bg-slate-50 rounded-lg shadow-lg border border-gray-200
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transform translate-y-4 group-hover:translate-y-0
               transition-all duration-300 ease-in-out"
  >
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">
          {content.collectionLinks.title}
        </h3>
        <ul className="space-y-3">
          {content.collectionLinks.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-4">
          {content.productLineLinks.title}
        </h3>
        <ul className="space-y-3">
          {content.productLineLinks.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 grid grid-cols-2 gap-4">
        {content.imageLinks.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="group/image block relative rounded-lg overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={250}
              height={250}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-lg font-bold">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const navigationData = [
  { label: "HOME", href: "/" },
  {
    label: "COLLECTIONS",
    href: "/shop",
    megaMenuContent: {
      collectionLinks: {
        title: "Full Collection",
        links: [
          { label: "T-SHIRT & POLO", href: "/shop/t-shirts" },
          { label: "HOODIE & SWEATSHIRTS", href: "/shop/hoodies" },
          { label: "SWEATER", href: "/shop/sweaters" },
          { label: "JEANS & TROUSERS", href: "/shop/jeans" },
          { label: "JACKET & VEST", href: "/shop/jackets" },
          { label: "SHORTS", href: "/shop/shorts" },
          { label: "UNDERWEAR", href: "/shop/underwear" },
        ],
      },
      productLineLinks: {
        title: "Product Lines",
        links: [
          { label: "MEN", href: "/shop/men" },
          { label: "WOMEN", href: "/shop/women" },
          { label: "CHILDREN'S", href: "/shop/childrens" },
          { label: "HOME TEXTILE", href: "/shop/home-textile" },
          { label: "HEADWEAR", href: "/shop/headwear" },
          { label: "WORKWEAR", href: "/shop/workwear" },
          { label: "SOCKS", href: "/shop/socks" },
          { label: "ACCESSORIES", href: "/shop/accessories" },
        ],
      },
      imageLinks: [
        {
          label: "Men",
          src: "/images/collections/men.jpg",
          alt: "Model wearing men's collection",
          href: "/shop/men",
        },
        {
          label: "Children's",
          src: "/images/collections/childrens.jpg",
          alt: "Model wearing children's collection",
          href: "/shop/childrens",
        },
        {
          label: "Women",
          src: "/images/collections/women.jpg",
          alt: "Model wearing women's collection",
          href: "/shop/women",
        },
        {
          label: "Unisex",
          src: "/images/collections/unisex.jpg",
          alt: "Model wearing unisex collection",
          href: "/shop/unisex",
        },
      ],
    },
  },
  {
    label: "PAGE",
    href: "#",
    children: [
      { label: "Admin Dashboard", href: "/admindashboard" },
      // { label: "My Account", href: "/myaccount" },
    ],
  },
  { label: "RESOURCES", href: "/resource" },
  { label: "COLORS", href: "/colors" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isSearchOpen]);

  const handleMobileDropdownToggle = (label) => {
    if (mobileDropdownOpen === label) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(label);
    }
  };

  const handleOpenSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(true);
  };

const handleLogout = () => {
    toast(
      (t) => (
        <div className="flex flex-col space-y-2">
          <p>Are you sure you want to logout?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              No
            </button>
            <button
              onClick={() => {
                logOut(); // Perform the actual logout
                toast.dismiss(t.id);
                toast.success('you are logged out')
                      router.push('/')
              }}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Yes
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity, // stays until user clicks Yes or No
      }
    );
  };

  return (
    <>
      <Topbar />
      {isSticky && <div className="h-[84px]" />}

      <nav
        className={`w-full bg-white ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-40 shadow-lg animate-slideDown"
            : "relative border-b border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto h-[84px] flex justify-between items-center">
          <div className="text-4xl font-bold tracking-tight text-gray-800">
            <Link href="/">Ayira</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            {navigationData.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center transition-colors hover:text-yellow-600 ${
                    item.href === "/" ? "text-yellow-600" : ""
                  }`}
                >
                  {item.label}
                  {(item.children || item.megaMenuContent) && (
                    <ChevronDownIcon />
                  )}
                </Link>

                {item.children && !item.megaMenuContent && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform translate-y-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.megaMenuContent && (
                  <MegaMenu content={item.megaMenuContent} />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:block"
              aria-label="Open search"
            >
              <SearchIcon />
            </button>

            {/* ------- user auth  */}
            {user ? (
              <div className="relative inline-block z-30">
                {/* Avatar */}
                <div
                  className="w-8 h-8 rounded-full overflow-hidden border border-gray-400 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <img
                    // src="https://i.ibb.co/rGZyV62q/young-bearded-man-with-striped-shirt.jpg"
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dropdown Menu */}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border  border-gray-100 rounded-lg shadow-lg">
                    <ul className="py-2 text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="hidden md:block">
                  <UserIcon />
                </Link>
              </>
            )}

            <Link href="/wishlist" className="relative hidden md:block">
              <HeartIcon />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <LanguageSwitcher></LanguageSwitcher>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-8">
              <div className="text-3xl font-bold text-gray-800">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Ayira
                </Link>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-medium text-gray-700">
              {navigationData.map((item) => (
                <div key={item.label}>
                  {item.children || item.megaMenuContent ? (
                    <button
                      onClick={() => handleMobileDropdownToggle(item.label)}
                      className="w-full flex justify-between items-center text-left hover:text-yellow-600 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span
                        className={`transform transition-transform duration-200 ${
                          mobileDropdownOpen === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-yellow-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileDropdownOpen === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pt-3 pl-4 flex flex-col space-y-3 border-l-2 border-gray-200">
                      {(
                        item.children ||
                        item.megaMenuContent?.collectionLinks.links
                      )?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-base text-gray-600 hover:text-yellow-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                      {item.megaMenuContent?.productLineLinks.links.map(
                        (child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base text-gray-600 hover:text-yellow-600"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            <hr className="my-8" />

            <div className="flex flex-col space-y-5 text-gray-700 ">
              <button
                onClick={handleOpenSearch}
                className="flex items-center space-x-3 text-lg w-full text-left"
              >
                <SearchIcon />
                <span>Search</span>
              </button>
              <Link
                href="/login"
                className="flex items-center space-x-3 text-lg"
              >
                <UserIcon />
                <span>Account</span>
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center space-x-3 text-lg relative"
              >
                <HeartIcon />
                <span>Wishlist</span>
                <span className="ml-auto w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/80 z-[100] transform transition-transform duration-500 ease-in-out ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isSearchOpen}
      >
        <div
          className="h-full w-full flex items-center justify-center p-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="relative group"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-white text-3xl md:text-5xl text-white placeholder-gray-400 py-4 pr-12 focus:outline-none transition-colors"
                autoFocus={isSearchOpen}
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                aria-label="Submit search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

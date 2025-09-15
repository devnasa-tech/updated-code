'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  BsTag, BsPerson, BsBuilding, BsEnvelope, BsTelephone, BsGlobe, BsGeoAlt,
  BsCalendar, BsCreditCard, BsCloudUpload, BsChatDots, BsArrowRepeat, BsSend
} from 'react-icons/bs';
import { GiTShirt } from "react-icons/gi";

const OrderPage = () => {
  const adultSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];
  const youthSizes = ['0-2Y', '2Y-4Y', '4Y-6Y', '6Y-8Y', '8Y-10Y', '10Y-12Y', '12Y-14Y'];
  const [atSight, setAtSight] = useState(false);
  const [tt, setTt] = useState(false);
  const [westernUnion, setWesternUnion] = useState(false);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [url, setUrl] = useState("");


  const uploadImage = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "order_upload_preset");
    formData.append("cloud_name", "dnniqox8m");

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dnniqox8m/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return null;
    }
  };


 const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  const primaryUrl = await uploadImage(primaryImage);
  const secondaryUrl = await uploadImage(secondaryImage);

  const data = {
    styleNumber: form.styleNumber.value,
    name: form.name.value,
    company: form.companyName.value,
    email: form.email.value,
    phone: form.phoneNumber.value,
    website: form.webURL.value,
    address: form.mailingAddress.value,
    adultSizes: adultSizes.reduce((acc, size) => {
      acc[size] = form[`adult-${size}`].value;
      return acc;
    }, {}),
    youthSizes: youthSizes.reduce((acc, size) => {
      acc[size] = form[`youth-${size}`].value;
      return acc;
    }, {}),
    deliveryTime: form.date.value,
    paymentMethods: [
      form["at-sight"].checked && "At Sight L/C",
      form.tt.checked && "T/T",
      form["western-union"].checked && "Western Union",
    ].filter(Boolean),
    message: form.message.value,
    captcha: form.captcha.value,
    primaryImage: primaryUrl,
    secondaryImage: secondaryUrl,
  };

  try {
    const res = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);

    if (res.ok) {
      toast.success(" Order submitted successfully!");
    } else {
      toast.error(" Failed to submit order.");
    }
  } catch (error) {
    toast.error("Something went wrong.");
    console.error(error);
  }
};





return (
  <div className="flex items-center justify-center min-h-screen p-4 ">
    <div className="max-w-6xl p-6 mx-auto bg-white border border-gray-300 sm:p-8 md:p-10">
      <header className="mb-8 text-center">
        <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 md:text-3xl">
          <GiTShirt className="mr-3 text-3xl text-gray-700 md:text-4xl" />
          Place Your Order
        </h1>
      </header>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* --- First Part: Style Number --- */}
        <div className="p-4 rounded-lg bg-blue-50 sm:p-6">
          <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
            <BsTag className="text-blue-500" />
            <span className="ml-2">Style Number</span>
          </label>
          <input
            type="text"
            name="styleNumber"
            defaultValue="AASLTD-MST-04"
            className="w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* --- Contact Info --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsPerson className="text-purple-500" />
              <span className="ml-2">Your Name</span>
            </label>
            <input name="name" type="text" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsBuilding className="text-green-500" />
              <span className="ml-2">Company Name</span>
            </label>
            <input name='companyName' type="text" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsEnvelope className="text-red-500" />
              <span className="ml-2">Email Address</span>
            </label>
            <input name='email' type="email" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsTelephone className="text-yellow-500" />
              <span className="ml-2">Phone Number</span>
            </label>
            <input name='phoneNumber' type="tel" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsGlobe className="text-blue-500" />
              <span className="ml-2">Website URL</span>
            </label>
            <input name='webURL' type="text" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsGeoAlt className="text-pink-500" />
              <span className="ml-2">Mailing Address</span>
            </label>
            <input name='mailingAddress' type="text" className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
        </div>

        {/* --- Adult Sizes --- */}
        <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
          <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
            <GiTShirt className="mr-2 text-xl text-green-500" />
            Adult Sizes & Quantity
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
            {adultSizes.map(size => (
              <div key={size} className="text-center">
                <label className="text-sm font-medium text-gray-500">{size}</label>
                <input
                  name={`adult-${size}`}
                  type="number"
                  defaultValue="0"
                  min="0"
                  className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Youth Sizes --- */}
        <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
          <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
            <span className="mr-2 text-xl">😊</span>
            Youth Sizes & Quantity
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
            {youthSizes.map(size => (
              <div key={size} className="text-center">
                <label className="text-sm font-medium text-gray-500">{size}</label>
                <input
                  name={`youth-${size}`}
                  type="number"
                  defaultValue="0"
                  min="0"
                  className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Delivery & Payment --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-purple-50 sm:p-6">
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsCalendar className="text-purple-500" />
              <span className="ml-2">Expected Delivery Time</span>
            </label>
            <input
              name='date'
              type="date"
              className="w-full px-3 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="p-4 rounded-lg bg-cyan-50 sm:p-6">
            <label className="flex items-center mb-2.5 text-sm text-gray-600 font-medium">
              <BsCreditCard className="text-blue-500" />
              <span className="ml-2">Payment Methods</span>
            </label>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <input
                  id="at-sight"
                  name="at-sight"
                  type="checkbox"
                  checked={atSight}
                  onChange={() => setAtSight(!atSight)}
                  className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="at-sight" className="ml-3 text-sm text-gray-700">
                  At Sight L/C
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="tt"
                  name="tt"
                  type="checkbox"
                  checked={tt}
                  onChange={() => setTt(!tt)}
                  className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="tt" className="ml-3 text-sm text-gray-700">
                  T/T
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="western-union"
                  name="western-union"
                  type="checkbox"
                  checked={westernUnion}
                  onChange={() => setWesternUnion(!westernUnion)}
                  className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="western-union" className="ml-3 text-sm text-gray-700">
                  Western Union
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* --- Image Uploads --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer h-40 sm:h-36 hover:bg-gray-50">
            {primaryImage ? (
              <img
                src={URL.createObjectURL(primaryImage)}
                alt="Primary Preview"
                className="object-contain w-full h-full"
              />
            ) : (
              <>
                <BsCloudUpload className="w-8 h-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold text-blue-600">Click to upload</span> Primary Image (Max 5MB)
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPrimaryImage(e.target.files[0])}
              className="hidden"
            />
          </label>

          <label className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer h-40 sm:h-36 hover:bg-gray-50">
            {secondaryImage ? (
              <img
                src={URL.createObjectURL(secondaryImage)}
                alt="Secondary Preview"
                className="object-contain w-full h-full"
              />
            ) : (
              <>
                <BsCloudUpload className="w-8 h-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold text-blue-600">Click to upload</span> Secondary Image (Max 5MB)
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSecondaryImage(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>


        {/* --- Additional Message --- */}
        <div>
          <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
            <BsChatDots className="text-red-400" />
            <span className="ml-2">Additional Message</span>
          </label>
          <textarea
            name='message'
            rows="4"
            placeholder="Enter any special instructions or comments here..."
            className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        {/* --- CAPTCHA --- */}
        <div className="p-6 text-center bg-gray-100 rounded-lg">
          <h3 className="flex items-center justify-center text-sm font-semibold text-gray-700">
            <span className="mr-2">🤖</span> CAPTCHA Verification
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <span className="text-lg font-medium text-gray-800">1 + 10 = ?</span>
            <button type="button" className="text-gray-500 hover:text-blue-600">
              <BsArrowRepeat className="w-5 h-5" />
            </button>
            <input
              name="captcha"
              type="text"
              placeholder="Answer"
              className="w-24 px-3 py-2 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Please solve the simple math problem to verify you are not a robot.
          </p>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-8 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg sm:w-auto hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
          >
            <BsSend className="w-5 h-5 mr-2" />
            Place Order Now
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default OrderPage;

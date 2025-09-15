"use client";
import React from 'react';
import { FaHome, FaArrowRight } from 'react-icons/fa';

// Icon Components
const IndustryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 20v-4h4v4" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 20v-8h4v8" /></svg>;

const TrendsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const DesignersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

const FittingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4l-8 4 8 12 8-12-8-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 8l8 4 8-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 20V12" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 10l-2 6h16l-2-6" /></svg>;

const About = () => {

    const teamMembers = [
        {
            name: 'Liam Olivia',
            role: 'Creative Director',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        },
        {
            name: 'Noah Emma',
            role: 'Lead Fashion Designer',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
        },
        {
            name: 'James Ava',
            role: 'Head of Production',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            name: 'William Mia',
            role: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        },
        {
            name: 'Henry Sophia',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
        },
        {
            name: 'Lucas Isabella',
            role: 'E-commerce Director',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
    ];

    const whyChooseUsItems = [
        { title: 'BEST IN INDUSTRY', icon: <IndustryIcon />, description: 'Premium quality materials and craftsmanship for lasting fashion pieces.' },
        { title: 'TREND FORECASTING', icon: <TrendsIcon />, description: 'Stay ahead of fashion trends with our expert forecasting team.' },
        { title: 'EXPERT DESIGNERS', icon: <DesignersIcon />, description: 'Award-winning designers creating timeless and innovative collections.' },
        { title: 'PERFECT FITTING', icon: <FittingIcon />, description: 'Precision tailoring and multiple sizing options for the perfect fit.' },
    ];

    const statsItems = [
        { value: '527+', label: 'Fashion Collections' },
        { value: '98%', label: 'Customer Satisfaction' },
        { value: '50+', label: 'Countries Served' },
        { value: '10K+', label: 'Happy Customers' },
    ];

    return (
        <div className=" text-gray-700 ">

            {/* Header */}
            <header className="bg-gray-100 py-12 sm:py-16 text-center relative">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')" }}
                ></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">About Our Fashion House</h1>
                </div>
            </header>

            <main>
                {/* Our Mission */}
                <section className="py-12  sm:py-16 md:py-24 text-center">
                    <div className="container mx-auto ">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Fashion Mission</h2>
                        <p className="max-w-6xl mx-auto leading-relaxed text-gray-600 text-sm sm:text-base md:text-lg">
                            We believe that fashion is a form of self-expression. Our mission is to create high-quality, sustainable clothing that empowers individuals to express their unique style while making a positive impact on the environment and the communities we serve. We blend traditional craftsmanship with innovative design to deliver timeless pieces for the modern wardrobe.
                        </p>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="pb-12 max-w-6xl mx-auto sm:pb-16 md:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            <div className="lg:w-5/12 w-full">
                                <div
                                    className="h-48 sm:h-64 md:h-80 lg:h-[480px] w-full rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80')" }}
                                ></div>
                            </div>
                            <div className="lg:w-7/12 w-full">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Our Fashion Journey</h3>
                                <p className="leading-relaxed mb-4 text-gray-600 text-sm sm:text-base md:text-lg">
                                    Founded in 2010, our international fashion brand began as a small boutique with a vision to revolutionize the clothing industry. Today, we're a global e-commerce presence known for our commitment to quality, sustainability, and innovative design. Each garment tells a story of careful craftsmanship and attention to detail.
                                </p>
                                <p className="leading-relaxed mb-6 md:mb-8 text-gray-600 text-sm sm:text-base md:text-lg">
                                    We work with skilled artisans around the world, using ethically sourced materials and sustainable production methods. Our collections blend contemporary trends with timeless elegance, creating pieces that transcend seasons and remain wardrobe staples for years to come.
                                </p>
                                <button className="bg-[#f5b750] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 hover:bg-yellow-600 transition-colors rounded-md text-sm sm:text-base md:text-lg">
                                    Explore Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className=" max-w-6xl mx-auto py-12 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Why Choose Our Brand?</h2>
                            <p className="max-w-3xl mx-auto leading-relaxed text-gray-600 text-sm sm:text-base md:text-lg">
                                We stand out in the fashion industry through our unwavering commitment to quality, sustainability, and customer satisfaction. Each piece in our collection is crafted with precision and care, ensuring you receive garments that look exceptional and feel incredible to wear.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {whyChooseUsItems.map((item, index) => (
                                <div key={index} className="bg-white p-5 sm:p-6 text-center group hover:bg-[#f5b750] transition-colors duration-300 cursor-pointer rounded-lg shadow-sm flex flex-col items-center h-full">
                                    <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-[#f5b750] group-hover:bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-white mb-2 tracking-wider transition-colors duration-300">{item.title}</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white group-hover:opacity-90 leading-relaxed transition-colors duration-300 flex-grow">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section
                    className="py-12 sm:py-16 md:py-20 relative"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                            {statsItems.map((stat, index) => (
                                <div key={index}>
                                    <p className="text-3xl sm:text-4xl md:text-3xl font-bold text-[#f5b750]">{stat.value}</p>
                                    <p className="text-white mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-12 max-w-6xl mx-auto sm:py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Meet Our Fashion Team</h2>
                            <p className="max-w-3xl mx-auto leading-relaxed text-gray-600 text-sm sm:text-base md:text-lg">
                                Our talented team of fashion experts, designers, and industry professionals work tirelessly to bring you collections that combine style, quality, and sustainability. Get to know the creative minds behind our brand.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-100 p-6 sm:p-8 group hover:bg-[#f5b750] transition-colors duration-300 cursor-pointer rounded-lg shadow-sm">
                                    <div
                                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 bg-cover bg-center border-4 border-white group-hover:border-[#f5b750] transition-colors duration-300"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                    ></div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{member.name}</h4>
                                            <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white transition-colors duration-300">{member.role}</p>
                                        </div>
                                        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5b750] flex items-center justify-center text-white group-hover:bg-black transition-colors duration-300 rounded-md">
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default About;
'use client'
import React, { useState } from 'react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('General Information');

    const categorizedFaqs = {
        'General Information': [
            { question: 'What is Apparel Sourcing?', answer: 'Apparel sourcing is the mechanism by which apparel companies find suppliers and manufacturers to produce clothing and fashion items. That means finding trustworthy factories, the right materials, and overseeing the production process from design to delivery. The method of apparel sourcing is essential to make sure clothing is manufactured at a competitive price, in sufficient quantities, and of the quality demanded.' },
            { question: 'How does Aaryan Sourcing help businesses in garment manufacturing?', answer: 'We provide end-to-end garment production services, including fabrication, sewing, washing, and quality control. We connect you with a reputable factory, assist in sourcing the best fabrics, and ensure all production meets your quality requirements and specifications. Our goal is to reduce the lead time and cost for our customers by maintaining high-quality standards.' },
            { question: 'What kinds of clothing can you make?', answer: 'We specialize in delivering a variety of garments: Informal (Tees, hoodies, jeans, skirts, dresses), Activewear & Sportswear (Workout clothes, bottoms, sports bras, gym gear), Outerwear (Jackets, coats, raincoats), Workwear & Uniforms (Corporate uniforms, safety, custom workwear), Formal & Fashion wear, Kids wear, Lingerie & Swimwear, and Accessories (Hats, scarves, socks, gloves). We accept customized and OEM orders.' },
            { question: 'Do you offer custom designs for clothing?', answer: "Yes, we specialize in custom clothing design with your vision in mind. Our capabilities range from concept design to finished product, including custom logos, pattern making, sourcing materials, and full production. Whether you're creating a one-off special or launching a white label, we manage the project so it is simple, quick, and in line with your brand." },
            { question: 'Can you source eco-friendly fabrics?', answer: 'Yes, we certainly do. We focus on sustainability and partner with ethical and sustainable companies that meet international production standards for your quality and social responsibility.' },
            { question: 'What are your quality control procedures?', answer: 'We offer a strict pre-production sampling process to confirm design and materials. During production, our QA team performs in-line inspections on the shop floor to inspect stitching, fabric quality, and workmanship. After production, we check the final garments on every aspect, such as measurements, size, colour, and fabric. We also test for durability and ensure proper packaging.' },
        ],
        'Orders and Returns': [
            { question: 'How do I get started?', answer: "Get in touch with us to send us your requirement, and we will assist you with the entire sourcing & production process. Let us know what you need, and we'll handle the rest." },
            { question: 'How do I place an order with Aaryan Sourcing?', answer: 'Contact us via our website, email, or phone. Let us know your requirements (designs, materials, sizes, etc.). Our staff will help you decide on the details. We will provide a quote once we receive the specifications. After approval and deposit, we will create a sample. Production starts once the sample is approved and terms are established. We then manage production, quality control, and shipping.' },
            { question: 'How do I request a quote on my garment order?', answer: "Send us a message on our website or an email with specific details about your order (type of clothing, quantity, design, material, etc.). We will assess your request, consult on the brief, and then provide a detailed quote including price, lead time, and shipping cost. We’ll get into production once you’ve signed off on the price." },
            { question: 'What are the MOQs?', answer: 'Our MOQs (Minimum Order Quantities) vary depending on the types of products and customization. We cater to both small and large businesses, enabling us to adapt to whatever needs arise.' },
        ],
        'Shipping Information': [
            { question: 'What is the typical lead time for an apparel order?', answer: 'The regular turnaround time is 8-12 weeks, depending on the quantity and complexity. This process breaks down into: Design & Sampling (1-2 weeks), Mass Production (5-6 weeks), Quality Control (1-1.5 weeks), and Shipping & Delivery (5-10 days, depending on the destination).' },
            { question: 'How long does production take?', answer: 'For general mass production, the lead time is 5-6 weeks. Bulk orders typically take 4-6 weeks to process. The lead time can also be modified according to the production season and order complexity.' }
        ],
        'Payment Information': [
            { question: 'What payment methods do you accept?', answer: 'We accept various payment methods including bank transfers and major credit cards. Please contact us for specific details regarding your order and payment terms.' }
        ],
    };

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setOpenIndex(0);
    };

    const tabs = [
        { name: 'General Information', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24"> <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <path d="M14.5 10.5H9.5" /> <path d="M12.5 7.5H9.5" /> <path d="M17 15.5V11.1C17 9.99543 16.1046 9 15 9H6C4.89543 9 4 9.99543 4 11.1V14.5C4 15.6046 4.89543 16.5 6 16.5H9.5L12 18.5V16.5H15C16.1046 16.5 17 15.6046 17 14.5V15.5Z" /> <path d="M18.9999 12.5V8.1C18.9999 6.99543 18.1045 6 16.9999 6H9.99994C9.4716 6 8.96603 6.22108 8.59994 6.6" /> </g> </svg>) },
        { name: 'Orders and Returns', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24"> <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <rect x="7" y="3" width="10" height="18" rx="1.5" /> <path d="M10 7H14" /> <path d="M10 11H14" /> <path d="M10 15H12" /> </g> </svg>) },
        { name: 'Shipping Information', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24"> <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <path d="M5 18H3.5C2.94772 18 2.5 17.5523 2.5 17V8.5C2.5 7.94772 2.94772 7.5 3.5 7.5H14.5C15.0523 7.5 15.5 7.94772 15.5 8.5V14.5" /> <path d="M14.5 18H18.5" /> <circle cx="8" cy="19" r="2" /> <circle cx="18" cy="19" r="2" /> <path d="M14.5 13.5H21.5L19 9.5H14.5V13.5Z" /> <path d="M16 5.5L18 7.5L21.5 4.5" /> </g> </svg>) },
        { name: 'Payment Information', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24"> <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <rect x="2" y="7" width="18" height="12" rx="2" /> <path d="M6 11H8" /> <path d="M2 10H22" /> </g> </svg>) },
    ];

    const currentFaqs = categorizedFaqs[activeTab] || [];

    return (
        <div className="bg-white font-sans">
            <header
                className="h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/8DKVSBdV/FAQs-Frequently-Asked-Questions.jpg')"
                }}
            >
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center px-4">
                    Frequently Asked Questions
                </h1>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {tabs.map((tab) => (
                            <div
                                key={tab.name}
                                onClick={() => handleTabClick(tab.name)}
                                className={`flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer transition-colors duration-200 ${activeTab === tab.name ? 'bg-[#f8c255]' : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                <div className={`${activeTab === tab.name ? 'text-black' : 'text-gray-700'}`}>
                                    {tab.icon}
                                </div>
                                <span className="mt-2 sm:mt-4 text-sm font-semibold text-center text-gray-800">{tab.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">{activeTab}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-16">
                        <div>
                            <div className="space-y-0">
                                {currentFaqs.length > 0 ? (
                                    currentFaqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 py-5">
                                            <div
                                                className="flex justify-between items-center cursor-pointer group"
                                                onClick={() => handleToggle(index)}
                                            >
                                                <p className="text-gray-800 font-bold pr-4 group-hover:text-[#f5b750] transition-colors duration-200">{faq.question}</p>
                                                <span className={`text-2xl font-bold text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                                    {openIndex === index ? '−' : '+'}
                                                </span>
                                            </div>
                                            <div
                                                className={`overflow-hidden transition-all ease-in-out duration-500 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                            >
                                                <p className="pt-4 text-gray-600 text-sm leading-relaxed pr-4 md:pr-8">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600">No questions available for this category yet.</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#f8c255] p-6 sm:p-8 h-full rounded-lg">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Ask a Question</h2>
                                <p className="text-sm text-gray-700 mb-6 max-w-xs">
                                    Please feel free to contact us, our customer support will be happy to help you.
                                </p>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Name
                                        </label>
                                        <input type="text" id="name" className="w-full p-2.5 bg-white border-none rounded-md focus:ring-2 focus:ring-[#e4a83c]" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Email
                                        </label>
                                        <input type="email" id="email" className="w-full p-2.5 bg-white border-none rounded-md focus:ring-2 focus:ring-[#e4a83c]" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Comment
                                        </label>
                                        <textarea id="comment" rows="5" className="w-full p-2.5 bg-white border-none rounded-md focus:ring-2 focus:ring-[#e4a83c] resize-y"></textarea>
                                    </div>
                                    <button type="submit" className="w-full sm:w-auto bg-[#2d2d2d] hover:bg-black cursor-pointer text-white px-8 py-2.5 font-semibold text-sm rounded-md transition-colors duration-200">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Faq;
"use client";

import React from "react";
import Image from "next/image";
import CommonBanner from "../../components/CommonBanner";

const cirtificationData = [
  {
    id: 1,
    title: "Certifications for Sustainable Apparel Production",
    image: "https://i.ibb.co/NHN5sR6/Certifications-for-Sustainable-Apparel-Production.jpg",
    description:
      "Aaryan Sourcing is a fashion brand rooted in sustainability. We’re proud of each of our sustainable, ethical, and socially responsible accreditations. Our sourcing and production adhere to the world’s most stringent wellness standards for organic fiber, traceability of materials (FAIRTRADE), recyclable materials, and safe chemical use – including certifications such as GOTS, GRS, and OEKO-TEX®. We are also WRAP association members and BSCI certified, and all of our products are too. Partners can have confidence in environmentally friendly, sustainable apparel designed to promote high-quality clothing supply.",
  },
  {
    id: 2,
    title: "Certified Quality Control and Ethical Sourcing",
    image: "https://i.ibb.co/8gsDzttr/Certified-Quality-Control-and-Ethical-Sourcing-in-Apparel-Production.jpg",
    description:
      "Aaryan Sourcing continues to combat sweatshops by pairing responsible clothing sourcing with certified plant quality control. We maintain a quality policy that strictly adheres to ISO 9001 standards, from raw material milling to warehousing, ensuring readiness for shipment. Consciously sourced, fire retardant, and approved by BSCI, WRAP, and SEDEX. Ethical labor wages, safe working conditions, and sustainable labor practices are maintained. OEKO-TEX® and GOTS-certified materials ensure chemical safety and sustainability, creating high-quality, socially and environmentally responsible clothing.",
  },
  {
    id: 3,
    title: "Compliance with Apparel Manufacturing Standards",
    image: "https://i.ibb.co/3YFgR1jL/Compliance-with-Apparel-Manufacturing-Standards.jpg",
    description:
      "Aaryan Sourcing maintains conformity with global manufacturing standards. Ethical working environment, worker safety, and product quality are ensured according to WRAP, BSCI, SEDEX, and ISO9001. Regular audits and adherence to ISO 14001 environment management and OEKO-TEX® chemical-free standards protect your brand and guarantee each garment meets the highest safety, sustainability, and global ecological apparel production standards.",
  },
  {
    id: 4,
    title: "Global Sourcing Certifications",
    image: "https://i.ibb.co/Lzn3t6Xk/Global-Sourcing-Certifications.jpg",
    description:
      "Aaryan Sourcing has earned trust through certifications. These include ISO 9001 (quality management), ISO 14001 (environment management), OEKO-TEX® (textile chemical safety), GOTS, GRS, WRAP, and BSCI, focusing on sustainable production, ethical labor conditions, and supply chain transparency. Certifications demonstrate our commitment to sustainability and adherence to international standards, making us a reliable partner for global apparel brands.",
  },
  {
    id: 5,
    title: "Industry-Leading Apparel Certifications",
    image: "/Industry-Leading Apparel Certifications .jpg",
    description:
      "Production Process and Design: Aaryan Sourcing complies with global policies and standards of fashion and quality. Our garments are environmentally friendly, affordable, and made using GOTS, OEKO-TEX, and GRS certified fabrics with safe, non-flammable, chemical-free, kid-friendly dyes. ISO 14001 and 45001 certifications assure environmental and occupational health. Global retailers have access to garments exceeding industry standards, reflecting our commitment to transparency, sustainable sourcing, and quality manufacturing.",
  },
  {
    id: 6,
    title: "Our Certifications & Quality Standards",
    image: "https://i.ibb.co/VWDC4vC9/Our-Certifications-Quality-Standards.jpg",
    description:
      "Aaryan Sourcing values ethical and quality production. Syndicates like BSCI, OEKO-TEX®, SEDEX, and WRAP guarantee environmentally friendly and socially responsible clothing production. ISO 9001:2015 Quality Management ensures consistent product quality. Each process passes QC tests by professional staff, and materials are clean and defect-free. Local manufacturers also follow international quality standards. We are a verified, worker-welfare-driven, sustainable producer and trusted partner to international fashion brands.",
  },
  {
    id: 7,
    title: "Why Certifications Matter for Your Apparel Business",
    image: "/Why Certifications Matter for Your Apparel Business .jpg",
    description:
      "Certifications instill trust, standardize compliance, and open global markets. Aaryan Sourcing adopts GOTS, OEKO-TEX, WRAP, and BSCI to monitor and manage garment production, adhering to human-ecological requirements (CONFIDENCE IN TEXTILES). They verify quality and responsible sourcing for both retailers and consumers. Licensed products enhance brand value and trust in worldwide marketplaces. Working with certified factories ensures cleaner, sustainable, and safer clothing options for the environment.",
  },
];

const Certificate = () => {
  return (


    <main>
      <CommonBanner
        title={"our Certificate"}
        breadcrumb={"Certificate"}
      ></CommonBanner>

      <section className=" w-full max-w-6xl mx-auto  px-6 sm:px-10 md:px-14 lg:px-18 xl:px-0  py-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Heading Section */}
          <div className="flex justify-center md:justify-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug text-center md:text-left">
              Trusted Manufacturing & <br className="hidden md:block" />
              Sourcing Partner –{" "}
              <span className="text-[#ffbb42]">Bangladesh</span>
            </h2>
          </div>

          {/* Paragraph Section */}
          <div>
            <p className="text-gray-700 text-base  leading-relaxed text-justify">
              At{" "}
              <span className="font-semibold text-gray-900">
                Aaryan Sourcing
              </span>
              Aaryan Sourcing cloth quality standards. You, the earth, and your clothing makers deserve better. We are a wholesale
              ethical clothing company that guarantees our garments are of a high standard, made with ethics, and not exploited
              through certifications and production methods. Our most recent accreditations reflect our commitment to the world's
              leading garment standards. Quality and sourcing certificates certify our fair sourcing and the production of sustainably
              manufactured goods. They signal that we not only meet but consistently exceed global standards throughout our
              production, from OEKO-TEX and GOTS-certified sustainable materials to WRAP and BSCI-mandated social
              accountability.
            </p>


            <p className="mt-4 text-gray-700 text-base  leading-relaxed text-justify">
              Quality and transparency are the No.1 priority for Aaryan Sourcing. As with everything we make, we
              source worldwide for safe working conditions, fair or even above-average hours, and environmentally friendly
              materials. These values enable us to deliver ethical and quality standards that our clients expect. By downloading
              certificates from this page, you identify that you comply with our global standards and moral origins. Inquire about
              any certification. We are excited to highlight our eco-friendly practices and initiatives.
            </p>


          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-10 flex justify-center  text-lg capitalize font-semibold text-gray-100 my-4">
        <p>
          We believe in the power of culture, collaboration and cohesion to
          propel our partners forward.
        </p>
      </section>



      <section className=" w-full max-w-6xl mx-auto  px-6 sm:px-10 md:px-14 lg:px-18 xl:px-0  py-12 space-y-16">
        {cirtificationData.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[400px]"
          >
            {/* Text Content */}
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
              className={`w-full min-h-[300px] md:min-h-[400px] relative ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
            >
              <img
                src={item.image}
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

export default Certificate;
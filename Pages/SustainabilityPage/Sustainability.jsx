import React from 'react';
import Image from 'next/image';
import CommonBanner from '../../components/CommonBanner';

// --- Data for Page Sections ---
const socialComplianceData = [
  { id: 1, logo: 'https://i.ibb.co/L5B7t7S/gsv-logo.png', alt: 'GSV Logo', text: "GSV integrates global supply chain security initiatives like C-TPAT, PIP, and AEO to enhance safety, risk control, and efficiency. By collaborating with international suppliers and importers, GSV aims to develop a robust global security verification process, ensuring cost savings and greater security for all stakeholders." },
  { id: 2, logo: 'https://i.ibb.co/hL4g0Vg/smeta-logo.png', alt: 'SMETA Sedex Logo', text: "SEDEX is a not-for-profit membership organization focused on improving business practices in global supply chains. Founded in 2001 by UK retailers, it works on improving responsible and ethical business practices. It is used by suppliers to drive convergence in social audit standards and monitoring practices. It uses the SMETA audit methodology to ensure ethical compliance." },
  { id: 3, logo: 'https://i.ibb.co/mH0QhF3/wrap-logo.png', alt: 'WRAP Logo', text: "WRAP is a globally recognized certification program dedicated to ensuring ethical practices in manufacturing clothing, footwear, and sewn products. Certifying facilities against the 12 WRAP Principles guarantees compliance with standards that promote safe, legal, and responsible manufacturing processes. WRAP helps uphold the integrity of global supply chains by supporting ethical labor conditions and environmental responsibility within production facilities." },
  { id: 4, logo: 'https://i.ibb.co/C0Q6D5S/amfori-logo.png', alt: 'Amfori BSCI Logo', text: "BSCI, an initiative by the Foreign Trade Association (FTA), is a program that unites over 1,500 retailers, importers, brands, and national associations to promote sustainable trade practices. Its mission is to improve international commerce's political and legal framework, driving positive change in global supply chains while fostering ethical labor practices and environmental responsibility across industries." },
  { id: 5, logo: 'https://i.ibb.co/GQLF60G/ics-logo.png', alt: 'ICS Logo', text: "The ICS (International Code of Conduct) is built on Human Rights Principles and key ILO conventions and recommendations. By signing the code, suppliers commit to adhering to its standards and ensuring that their subcontractors and partners also uphold these ethical practices. This framework promotes responsible business conduct, ensuring respect for human rights and labor standards throughout the supply chain." },
];
const environmentComplianceData = [
    { id: 1, logo: 'https://i.ibb.co/4Z5vM9w/zdhc-logo.png', alt: 'ZDHC Logo', text: "Our mission is to empower brands and retailers in the textile, apparel, and footwear industries to adopt sustainable chemical management practices throughout their value chains. By fostering collaborative engagement, setting industry standards, and guiding implementation, we help drive responsible chemical usage, promoting environmental sustainability and safer working conditions across the supply chain." },
    { id: 2, logo: 'https://i.ibb.co/f4R1sXh/higg-index-logo.png', alt: 'Higg Index Logo', text: "The Higg FEM (Facility Environmental Module) offers facilities a comprehensive assessment of their environmental impacts. It enables them to identify areas where they can improve performance, prioritize sustainability initiatives, and enhance their overall environmental impact, helping businesses move toward more responsible and efficient operations." },
];
const technicalComplianceData = [
  { id: 1, logo: 'https://i.ibb.co/ZJp5L4j/ocs-logo.png', alt: 'OCS Logo', text: "The Organic Content Standard (OCS) certifies non-food products containing 95-100% organic material, ensuring transparency in the supply chain. It verifies the presence and quantity of organic content in the final product, tracking the raw material from its origin to the end product, thereby promoting trust and sustainability in the manufacturing process." },
  { id: 2, logo: 'https://i.ibb.co/gV2g1K2/grs-logo.png', alt: 'GRS Logo', text: "The Global Recycled Standard (GRS) is an international, voluntary certification that sets rigorous requirements for the third-party verification of recycled content, traceability, and responsible practices across the supply chain. It also ensures adherence to social and environmental standards and imposes chemical restrictions, fostering transparency and sustainability in producing recycled goods." },
  { id: 3, logo: 'https://i.ibb.co/Xz9W76F/rcs-logo.png', alt: 'RCS Logo', text: "The Recycled Claim Standard (RCS) is a chain of custody standard designed to trace recycled raw materials throughout the supply chain. It ensures transparency and accountability by verifying the amount of recycled content in products, providing a reliable method for tracking materials from their source to the final product." },
  { id: 4, logo: 'https://i.ibb.co/F8Sg0zY/gots-logo.png', alt: 'GOTS Logo', text: "The Global Organic Textile Standard (GOTS) guarantees the organic integrity of textiles throughout the entire supply chain. From harvesting raw materials to eco-friendly manufacturing processes and ethical labor practices, GOTS ensures each step meets high environmental and social standards. This certification assures consumers that the products they purchase are sustainably and responsibly produced." },
  { id: 5, logo: 'https://i.ibb.co/2Z500n5/bci-logo.png', alt: 'BCI Logo', text: "The Better Cotton Initiative (BCI) is a not-for-profit organization dedicated to improving global cotton production. It focuses on enhancing the lives of cotton farmers, promoting environmental sustainability, and ensuring a positive future for the cotton industry. Through its programs, BCI fosters better agricultural practices, supports fair labor conditions, and works towards a more sustainable cotton sector globally." },
  { id: 6, logo: 'https://i.ibb.co/h7gJj4p/european-flax-logo.png', alt: 'European Flax Logo', text: "The EUROPEAN FLAX® label guarantees full traceability of flax fibers from seed to finished product, ensuring transparency and quality at every processing stage. Exclusively produced in France, Belgium, and the Netherlands, certified European Flax® fibers are a mark of sustainability and craftsmanship, offering consumers a premium, responsibly sourced product." },
];
const safetyComplianceData = [
  { id: 1, logo: 'https://i.ibb.co/f4Q3N0Y/alliance-logo.png', alt: 'Alliance Logo', text: "Alliance enhances worker safety in the Ready-Made Garment (RMG) industry by improving fire, electrical, and building safety in factories. The organization empowers employees to uphold and maintain safe working conditions through comprehensive education for workers and management. By focusing on long-term safety practices, Alliance is committed to creating a secure and sustainable environment across Bangladesh's garment sector." },
  { id: 2, logo: 'https://i.ibb.co/K50fBfG/accord-logo.png', alt: 'Accord Logo', text: "The Accord on Fire and Building Safety in Bangladesh is dedicated to protecting workers from fire hazards, building collapses, and other workplace accidents. The Accord supports and monitors necessary safety improvements by conducting thorough fire, electrical, and structural safety inspections, ensuring a safer work environment. Its goal is to ensure that no worker has to fear for their safety while on the job." },
  { id: 3, logo: 'https://i.ibb.co/8Y4nL9g/rsc-logo.png', alt: 'RSC Logo', text: "The RSC (Remediation Coordination Cell) enhances safety in the Ready-Made Garment (RMG) industry by conducting comprehensive fire, electrical, structural, and boiler safety inspections. It supports and monitors necessary safety improvements, provides training, and operates an independent worker complaint mechanism. This ensures that workers in RMG factories have a safe and responsive system to address health and safety concerns." },
];


// --- Sub-Components for the Page ---

const PageBanner = () => (
    <CommonBanner title={'Sustainability'} breadcrumb={'Sustainability'}></CommonBanner>
);

const CoreValues = () => (
    <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-16">
                We are actively engaged in reducing the impact of garment manufacturing on people and the planet. Our commitment to the environment goes hand in hand with our vision for growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <svg className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.28-.24-1.88M7 12H2v-2a3 3 0 015.356-1.857M7 12H7m0 0v2c0 .653.084 1.28.24 1.88M12 12h0l.24-1.88M12 12h0l-.24 1.88M12 12h0l.24 1.88M12 12h0l-.24-1.88M12 4.145A3.493 3.493 0 0010.5 3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5S14 8.933 14 7c0-.52-.116-1.006-.322-1.451M12 4.145c1.474 0 2.678 1.11 2.822 2.555" /></svg>
                    <div className="w-16 h-px bg-gray-300 my-4"></div>
                    <h3 className="text-4xl font-light text-gray-800">People</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">Our organization's core is the value of caring, which fosters a happy and productive workforce. We believe that the true legacy of any life is the humanity we contribute, and we integrate this principle into every aspect of our operations. By prioritizing compassion and empathy, we create a supportive environment where individuals thrive professionally and personally.</p>
                </div>
                <div className="flex flex-col items-center">
                    <svg className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 5.06l.332.253a2 2 0 002.562 0l.332-.253M16.116 5.06l-.332.253a2 2 0 01-2.562 0l-.332-.253" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="w-16 h-px bg-gray-300 my-4"></div>
                    <h3 className="text-4xl font-light text-gray-800">Planet</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">We value respect and gratitude, recognizing that climate change and the depletion of finite resources impact everyone. Our proactive approach focuses on minimizing resource use and seeking sustainable alternatives to ensure a healthier planet for future generations.</p>
                </div>
                <div className="flex flex-col items-center">
                    <svg className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 22h16a2 2 0 002-2V8.92a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0015.414 2H4a2 2 0 00-2 2v16a2 2 0 002 2z" transform="rotate(-90 12 12)" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h8m-4 8v-4" /></svg>
                    <div className="w-16 h-px bg-gray-300 my-4"></div>
                    <h3 className="text-4xl font-light text-gray-800">Product</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">We are deeply passionate about our product and are driven by an experienced team dedicated to meeting the diverse needs of our global customers. Our success is supported by advanced production capabilities and an unwavering commitment to quality, ensuring we deliver exceptional results every time.</p>
                </div>
            </div>
        </div>
    </section>
);

const ComplianceSection = ({ title, items, gridCols = 'md:grid-cols-2' }) => (
    <section className="py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">{title}</h2>
            <div className={`grid grid-cols-1 ${gridCols} gap-x-12 gap-y-16 items-start`}>
                {items.map(item => (
                    <div key={item.id}>
                        <div className="h-24 flex items-center justify-center mb-6">
                            <Image src={item.logo} alt={item.alt} width={200} height={80} className="max-h-16 w-auto object-contain" />
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// --- The Main Page Component ---

export default function Sustainability() {
  return (
    <div className="bg-white">
      <main>
        <PageBanner />
        <CoreValues />
        <div className="border-t border-gray-200">
            <ComplianceSection title="Social & Security Compliance" items={socialComplianceData} />
        </div>
        <div className="border-t border-gray-200">
            <ComplianceSection title="Environment Compliance Initiatives" items={environmentComplianceData} />
        </div>
        <div className="border-t border-gray-200">
            <ComplianceSection title="Technical Compliance" items={technicalComplianceData} gridCols='md:grid-cols-3' />
        </div>
        <div className="border-t border-gray-200">
            <ComplianceSection title="Building, Electrical & Fire Safety" items={safetyComplianceData} gridCols='md:grid-cols-3' />
        </div>
      </main>
    </div>
  );
}
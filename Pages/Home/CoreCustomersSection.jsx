import React from 'react';

const logos = [
  { name: 'Kappa', src: 'https://i.ibb.co/BHSFx7Vz/blob.png' },
  { name: 'Kik', src: 'https://i.ibb.co/kVJwZ5hn/blob.png' },
  { name: 'Lidl', src: 'https://i.ibb.co/wZCNyRDX/blob.png' },
  { name: 'LPP', src: 'https://i.ibb.co/gZvr7tnG/blob.png' },
  { name: 'Pepco', src: 'https://i.ibb.co/RGdGH7YS/blob.png' },
  { name: 'Silbon', src: 'https://i.ibb.co/8nsMKYgh/blob.png' },
  { name: 'Valtrade', src: 'https://i.ibb.co/k2YG80mr/blob.jpg' },
  { name: 'Krolys', src: 'https://i.ibb.co/YBYj21ck/blob.png' },
  { name: 'Cropp', src: 'https://i.ibb.co/5hvhrs11/blob.png' },
  { name: 'Reserved', src: 'https://i.ibb.co/nsH7yGJg/blob.jpg' },
  { name: 'Sinsay', src: 'https://i.ibb.co/wFXKcX1v/blob.png' },
];

const CoreCustomersSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
              animation: infinite-scroll 50s linear infinite;
          }
        `}
      </style>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center  text-gray-800 mb-10 text-3xl font-bold text-gray-800">
            Our Core Customers
          </h2>
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:[animation-play-state:paused]">
              {logos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.name} className="h-14 object-contain" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:[animation-play-state:paused]" aria-hidden="true">
              {logos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.name} className="h-14 object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreCustomersSection;
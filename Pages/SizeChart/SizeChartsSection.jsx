import React from 'react';

const SizeChartsSection = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-gray-800">
                Size Charts
              </h2>
              <h3 className="mt-2 text-xl text-gray-500">
                International Sizes
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The stated sizes are subject to standard tolerances and have only been stated for orientation purposes. Some articles possess a tighter cut to emphasize the shape of the body (indicated as 'Body Fit' in product descriptions). Please order one size larger if you require a looser fit. All sizes are 'to fit' sizes.
              </p>
            </div>
          </div>

          <div className="w-full h-64 lg:h-auto bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1586170737392-383ba61aca98?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A fashion designer measuring a dress on a mannequin."
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SizeChartsSection;
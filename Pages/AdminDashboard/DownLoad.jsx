import Link from 'next/link';
import React from 'react';

import { FaDownload } from "react-icons/fa";

const DownLoad = () => {
    return (
        <div className='flex flex-col gap-3'>
              {/* product sheet */}
                 <div className='w-[180px] bg-[#E4DFCC] px-3 py-2 rounded-sm capitalize flex flex-wrap items-center gap-2 hover:bg-[#d9d3bb] transition'>
                     <FaDownload></FaDownload>
                    product sheet
                 </div>


                    {/* more downloads */}
                 <Link  href={'/resource'} className='w-[180px] bg-[#E4DFCC] px-3 py-2 rounded-sm capitalize flex flex-wrap items-center gap-2 hover:bg-[#d9d3bb] transition'>
                          <FaDownload></FaDownload>
                 more downloads
                 </Link>


        </div>
    );
};

export default DownLoad;
import React, { useState } from 'react';

const Footer = () => {
  const [footerData, setFooterData] = useState([
    ["FAQ", "Help Center", "Account", "Media Center"],
    ["Investor Relations", "Jobs", "Redeem Gift Cards", "Buy Gift Cards"],
    ["Ways to watch", "Terms of Use", "Privacy", "Cookie Preferences"],
    ["Corporate Information", "Contact Us", "Speed Test", "Legal Notices"],
    ["Netflix Originals"],
  ]);

  return (
    <div className='bg-black h-full'>
        
            
      <div className=' relative bottom-10 border-t-2  border-gray-500 p-8 md:p-20 md:bottom-20 z-20 text-white'>
        
      <h1 className='mb-8 text-lg text-gray-500 md:text-2xl'>Questions? Call 1-8X4-5X57-29X90</h1>        <div className='grid grid-flow-col '>
         
        {footerData.map((data, i) => (
          <div key={i} className='grid-col-3 flex flex-col items-center my-4 '>
            {data.map((d, j) => (
              <h1 key={j} className=' py-4 cursor-pointer text-xs md:text-base  text-gray-500 hover:text-gray-400 transition duration-300'>
                {d}
              </h1>
            ))}
          </div>
        ))}
        </div>
      </div>
      </div>
    
  );
};

export default Footer;

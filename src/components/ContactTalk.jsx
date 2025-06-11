
import React from 'react';

const ContactTalk = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 md:px-0">
      
      <div className="mb-4">
        
        <img src="src/assets/Arrow.png" alt="" />
      </div>

      
      <p className="text-sm font-semibold text-gray-800 uppercase mb-2">
        WE Can't WAIT TO MEET YOU
      </p>

      
      <p className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Let’s Talk
      </p>

      
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 mt-2 rounded transition duration-300">
        Try it free now
      </button>
    </div>
  );
};

export default ContactTalk;

import React from 'react';

const Brands = () => {
  const logos = [
    { src: 'src/assets/hooli.png', alt: 'Hooli' },
    { src: 'src/assets/lyft.png', alt: 'Lyft' },
    { src: 'src/assets/piper.png', alt: 'Piper' },
    { src: 'src/assets/stripe.png', alt: 'Stripe' },
    { src: 'src/assets/aws.png', alt: 'AWS' },
    { src: 'src/assets/reddit.png', alt: 'Reddit' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-8 bg-gray-50">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-12 opacity-60 hover:opacity-100 transition duration-300"
        />
      ))}
    </div>
  );
};

export default Brands;

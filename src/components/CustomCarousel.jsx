import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CustomCarousel = () => {
  return (
    <div className="w-full min-h-screen">
      <Carousel fade indicators={true}>
        {[
          {
            title: "GROCERIES DELIVERY",
            text: "We know how large objects will act, but things on a small scale just do not act that way.",
            bg: "/src/assets/carousel1.jpg",
          },
          {
            title: "FAST FOOD TO YOUR DOOR",
            text: "Delicious meals delivered fast and fresh.",
            bg: "https://images.placeholders.dev/350x150",
          },
        ].map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="p-4 md:p-8 text-center text-white max-w-[90%] md:max-w-[600px] mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
                <p className="text-base md:text-lg mb-6">{item.text}</p>
                <Link to='/shop'><Button variant="primary" className="text-white text-lg px-6 py-2">
                  Start Now
                </Button></Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;













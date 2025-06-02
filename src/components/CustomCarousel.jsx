import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCarousel = () => {
  return (
    <div className="w-full h-screen">
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
              className="w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg mb-6">{item.text}</p>
                <Button variant="primary" className="text-white text-lg px-6 py-2">
                  Start Now
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;












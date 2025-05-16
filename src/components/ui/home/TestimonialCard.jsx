import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = ({ name, role, imageSrc, quote }) => (
  <div className="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500 shadow-md">
    <div className="relative mb-4">
      <img className="h-16 w-16 rounded-full" src={imageSrc} alt={`Photo of ${name}`} />
      <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-600">
        <span className="text-white font-bold text-xs">★</span>
      </div>
    </div>
    <p className="italic">“{quote}”</p>
    <p className="text-lg text-gray-800 font-medium mt-5">{name}</p>
    <p className="text-xs text-gray-600">{role}</p>
  </div>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const testimonials = [
    { name: 'Nana Akosua', role: 'Akan Language Enthusiast', imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png', quote: 'Learning Akan has been an amazing experience!' },
    { name: 'Kwame Amoako', role: 'Cultural Heritage Advocate', imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png', quote: 'The cultural section is fantastic!' },
    { name: 'Abena Owusu', role: 'Linguistics Student', imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png', quote: 'The dictionary feature is incredibly helpful!' },
    { name: 'Yaw Mensah', role: 'Beginner Learner', imageSrc: 'https://via.placeholder.com/150/008080/FFFFFF?Text=YM', quote: "I'm starting to understand simple Akan phrases!" },
    { name: 'Ohemaa Pokuaa', role: 'Community Member', imageSrc: 'https://via.placeholder.com/150/800080/FFFFFF?Text=OP', quote: 'Connecting with other Akan speakers has been wonderful!' },
    { name: 'Kofi Asante', role: 'History Enthusiast', imageSrc: 'https://via.placeholder.com/150/4682B4/FFFFFF?Text=KA', quote: 'The depth of Akan history and customs is impressive!' },
  ];

  return (
    <div className="flex flex-col items-center bg-[#b4ab99] text-center py-16">
      <h2 className="text-4xl font-bold max-w-2xl mb-12">Trusted by the Akan Kasa Community</h2>
      <div className="w-full max-w-7xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
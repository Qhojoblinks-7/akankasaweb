import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = ({ name, role, imageSrc, quote }) => (
  <div className="flex flex-col items-center bg-white px-6 py-8 rounded-lg border border-gray-300/80 max-w-xs mx-auto text-center text-gray-600 shadow-md">
    <div className="relative mb-6">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src={imageSrc}
        alt={`Photo of ${name}`}
      />
      <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white font-bold text-xs">
        ★
      </div>
    </div>
    <blockquote className="italic mb-4 text-lg">“{quote}”</blockquote>
    <cite className="not-italic mt-4">
      <p className="text-lg font-semibold text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </cite>
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
    autoplaySpeed: 4000, // Slightly adjusted autoplay speed
    cssEase: 'ease-in-out', // Smoother transition
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Hide dots on very small screens
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Nana Akosua',
      role: 'Akan Language Enthusiast',
      imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
      quote: 'Learning Akan has been an amazing experience! The platform is easy to navigate and the resources are top-notch.',
    },
    {
      name: 'Kwame Amoako',
      role: 'Cultural Heritage Advocate',
      imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png',
      quote: 'The cultural section is fantastic! It provides valuable insights into Akan traditions and history. Highly recommended!',
    },
    {
      name: 'Abena Owusu',
      role: 'Linguistics Student',
      imageSrc: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png',
      quote: 'The dictionary feature is incredibly helpful for my studies. The example sentences make understanding context so much easier.',
    },
    {
      name: 'Yaw Mensah',
      role: 'Beginner Learner',
      imageSrc: 'https://via.placeholder.com/150/008080/FFFFFF?Text=YM',
      quote: "I'm starting to understand simple Akan phrases thanks to the beginner modules. The audio pronunciations are a great aid!",
    },
    {
      name: 'Ohemaa Pokuaa',
      role: 'Community Member',
      imageSrc: 'https://via.placeholder.com/150/800080/FFFFFF?Text=OP',
      quote: 'Connecting with other Akan speakers through the community forum has been wonderful. It’s a great way to practice and learn together.',
    },
    {
      name: 'Kofi Asante',
      role: 'History Enthusiast',
      imageSrc: 'https://via.placeholder.com/150/4682B4/FFFFFF?Text=KA',
      quote: 'The depth of Akan history and customs shared on this platform is impressive! I’ve learned so much about my heritage.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 md:text-4xl">
          Trusted by the Akan Kasa Community
        </h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
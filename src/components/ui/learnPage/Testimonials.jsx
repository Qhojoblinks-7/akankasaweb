import { UserCircleIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Akosua Mensah',
    quote: "Learning Akan on this platform has been amazing! The lessons are clear, and I'm finally able to communicate with my family back home.",
    image: 'https://via.placeholder.com/80', // Replace with actual image URL
  },
  {
    name: 'Kwame Owusu',
    quote: "The audio pronunciation feature is incredibly helpful. I can now confidently say words and phrases. Highly recommended!",
    image: 'https://via.placeholder.com/80', // Replace with actual image URL
  },
  {
    name: 'Nana Ama',
    quote: "I loved exploring the cultural activities alongside the language lessons. It made the learning experience so much richer.",
    image: 'https://via.placeholder.com/80', // Replace with actual image URL
  },
  // Add more testimonials here
];

const LearnTestimonials = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">What Our Learners Say</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read what others are saying about their experience learning Akan with our platform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-y-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="mx-auto max-w-md">
              <div className="flex items-center justify-center">
                {testimonial.image ? (
                  <img className="h-16 w-16 rounded-full object-cover shadow-md" src={testimonial.image} alt={testimonial.name} />
                ) : (
                  <UserCircleIcon className="h-16 w-16 text-gray-400" />
                )}
              </div>
              <blockquote className="mt-4 text-center font-semibold text-gray-900">
                <p className="text-lg leading-7 italic">“{testimonial.quote}”</p>
              </blockquote>
              <div className="mt-2 text-center text-sm text-gray-500">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnTestimonials;
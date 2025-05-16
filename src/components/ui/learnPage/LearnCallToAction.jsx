import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-black px-6 pb-20 pt-16 shadow-xl sm:px-12 sm:pb-24 lg:px-20 lg:pb-20 xl:px-24">
          <div className="mx-auto max-w-max text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Embark on Your Akan Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join thousands of learners and discover the beauty and richness of the Akan language and culture. Start your adventure today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/learn"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-blue-50  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Start Learning Now
              </Link>
              <Link
                to="/sign-up" // Or a relevant page like a free trial or account creation
                className="text-base font-semibold leading-6 text-white hover:text-blue-50"
              >
                Create a Free Account <ArrowRightIcon className="inline-block h-5 w-5 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
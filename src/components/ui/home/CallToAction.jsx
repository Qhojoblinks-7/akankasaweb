import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-black/50 h-1/2">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#akanGradient)" fillOpacity="0.9" />
            <defs>
              <radialGradient id="akanGradient">
                <stop stopColor="#FACC15" /> {/* Akan Gold */}
                <stop offset={1} stopColor="#A36207" /> {/* Darker Akan Gold */}
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Ready to Explore Akan Language and Culture?
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Begin your journey into the Akan language, discover rich cultural traditions, and connect with a vibrant community. Start exploring today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/learn"
                className="rounded-md bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-akan-blue-700 shadow-md hover:bg-akan-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Learning
              </Link>
              <Link to="/culture" className="text-sm/6 font-semibold text-white">
                Discover Culture <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="Akan cultural symbol"
              src="/src/assets/medium-shot-women-dancing.jpg"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
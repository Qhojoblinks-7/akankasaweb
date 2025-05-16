import React from 'react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const LevelHeroSection = ({ level, adinkraSymbol, mainTopic, description, studentCount, courseSeriesCount, views, lessonLevel }) => {
  const navigate = useNavigate();

  const handleStreamNowClick = () => {
    // Determine the dashboard route based on the level
    let dashboardRoute = '/dashboard'; // Default route

    switch (level.toLowerCase()) {
      case 'beginner':
        dashboardRoute = '/dashboard/beginner';
        break;
      case 'intermediate':
        dashboardRoute = '/dashboard/intermediate';
        break;
      case 'advanced':
        dashboardRoute = '/dashboard/advanced';
        break;
      default:
        // You might want to handle cases where the level doesn't match
        console.warn(`Unknown level: ${level}. Navigating to default dashboard.`);
        break;
    }

    navigate(dashboardRoute);
  };

  return (
    <section className="px-6 h-11/12 md:px-20 lg:px-30 xl:px-40 pt-20 md:pt-35">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg max-md:mt-7">
          <div className="flex items-center mb-4">
            {adinkraSymbol && (
              <img src={adinkraSymbol} alt={`${level} Level Adinkra Symbol`} className="h-12 w-12 mr-4 object-contain" />
            )}
            <h1 className="font-bold text-3xl md:text-4xl text-black">
              {level} Level
            </h1>
          </div>
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-4">
            {mainTopic}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            {description}
          </p>
          <div className="flex items-center mt-6">
            <button onClick={handleStreamNowClick} className="relative">
              <span className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-semibold px-6 py-2.5 rounded-md transition">
                Stream Now
              </span>
              {/* SVG Arrow (Optional) */}
              <svg className="absolute -left-5 -bottom-10 text-black" width="61" height="26" viewBox="0 0 61 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.459.135Q.227.25 0 .371c.037.277.143.473.283.712l.12.207q.128.215.263.425c.368.577.66 1.18.95 1.798l.155.33q.482 1.022.945 2.053A43 43 0 0 0 4.744 9.87q.13.224.256.452c.303.54.64 1.003 1.05 1.465.48.549.897 1.14 1.295 1.75.694 1.063 1.382 2.094 2.247 3.025q.184.199.362.404a55 55 0 0 0 .855.956c.586.644 1.18 1.289 1.847 1.852q.116.098.227.203c1.533 1.426 3.483 2.524 5.467 3.175l.146.05c3.46 1.144 8.094 1.185 11.552-.071.437-.16.437-.16.886-.095.292.146.543.348.797.55 1.32 1.047 2.973 1.682 4.608 2.03l.171.037c.934.186 1.886.247 2.836.293l.157.007c4.196.204 7.78-.675 11.206-3.172l.197-.143q.276-.205.547-.414l.206-.156c1.714-1.305 3.732-3.357 4.162-5.56.02-.39-.125-.727-.354-1.032-.227-.165-.327-.165-.604-.124-1.173.322-1.856 1.295-2.464 2.27-1.53 2.45-3.617 3.87-6.428 4.555-.966.221-1.96.325-2.948.356l-.236.008c-2.287.037-4.497-.497-6.65-1.223l-.195-.065c-.423-.147-.864-.308-1.227-.577-.063-.119-.063-.119-.061-.248.153-.324.353-.57.6-.828l.1-.106q.277-.293.57-.57c1.048-1.04 1.727-2.375 2.127-3.78l.04-.137c.44-1.627.233-3.458-.586-4.917a3.6 3.6 0 0 0-.434-.557l-.166-.18c-.921-.975-2.102-1.576-3.455-1.632l-.362-.006-.17-.003c-.987.007-1.666.478-2.356 1.14l-.178.164c-1.418 1.33-2.11 3.092-2.426 4.974l-.022.13c-.295 1.783-.198 3.684.488 5.36l.088.217.084.192c.058.164.058.164.006.31-.127.157-.269.16-.464.182l-.142.01-.162.01-.174.012-.183.012-.384.026-.577.038c-1.059.07-2.095.096-3.153-.01l-.124-.013c-3.307-.338-6.274-1.762-8.857-3.814l-.118-.093a23 23 0 0 1-1.49-1.278 12 12 0 0 0-.418-.373 17 17 0 0 1-.864-.824l-.269-.268c-.29-.29-.572-.582-.839-.893q-.209-.238-.426-.469a17 17 0 0 1-.769-.893q-.216-.264-.436-.523a27 27 0 0 1-.965-1.245l-.315-.424a54 54 0 0 1-2.41-3.5 105 105 0 0 1-1.92-3.116 56 56 0 0 0-.962-1.565l-.096-.154C1.702.444 1.222-.214.459.135m33.775 12.223c.725.953.996 2.063.836 3.245-.21 1.207-1.069 2.195-2.028 2.906-.218.145-.302.15-.558.124-.623-.297-1.066-1.242-1.302-1.857-.445-1.34-.535-2.625-.259-4.004q.046-.23.088-.46l.058-.295.026-.137c.06-.3.13-.621.378-.822 1.036-.28 2.134.56 2.76 1.3m-17.62 6.894.195.09 1.044.48q1.018.47 2.046.916l-.123.124q-.586-.246-1.168-.493l-.398-.167-.572-.241-.178-.075q-.455-.192-.908-.386zm17.628 2.102.198.116.206.123.204.12.547.325.177.098.133.088v.123c-.27-.037-.468-.137-.706-.27l-.111-.063-.349-.197-.237-.133-.58-.327v-.186c.23 0 .322.067.518.183" fill="#2563EB" />
                <path d="M59.388 8.914q-.259.108-.515.22c-.246.097-.491.17-.747.236l-.153.04c-.744.189-1.5.324-2.253.467-.686.13-1.366.266-2.036.465l-.148.044c-.496.154-.95.379-1.4.633l-.162.09c-.593.363-1.166.914-1.389 1.581-.008.166-.002.33 0 .495.639.326 1.247.15 1.919.008q.135-.03.27-.056l.713-.15.71-.147c1.42-.295 1.42-.295 2.033-.433l.199-.044.354-.08c.298-.068.564-.101.87-.088.157.744.284 1.491.408 2.241l.1.605.065.388.03.18c.113.67.113.67.14 1.347l-.004.2-.003.208c-.006.623.01 1.226.193 1.826.156.155.211.144.426.147.656-.016 1.151-.223 1.62-.681.37-.438.38-1.01.387-1.561l.002-.142.002-.463.001-.164a29 29 0 0 0-.17-2.95 42 42 0 0 1-.174-2.876l-.011-.316-.003-.143c-.014-.362-.08-.675-.343-.943-.32-.213-.551-.313-.93-.184" fill="#2563EB" />
              </svg>
            </button>
            <button className="flex items-center gap-1.5 px-6 py-2.5">
              Learn more
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        {/* Image */}
        <img className="w-52 md:w-80 scale-x-[-1] max-md:mt-10" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg" alt={`${level} Level Illustration`} />
      </div>

      {/* Stats Section */}
      <div className="mt-10 md:mt-12 max-w-4xl mx-auto flex items-center justify-center text-gray-600 text-xs md:text-sm pb-12">
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-4 max-md:py-3 md:px-6 border-r border-gray-300">
          <AcademicCapIcon className="w-6 md:w-8 text-gray-600" />
          <p>{studentCount} Students</p>
        </div>
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-4 max-md:py-3 md:px-6 border-r border-gray-300">
          <BookOpenIcon className="w-6 md:w-8 text-gray-600" />
          <p>{courseSeriesCount} Series</p>
        </div>
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-4 max-md:py-3 md:px-6">
          <EyeIcon className="w-6 md:w-8 text-gray-600" />
          <p>{views} Views</p>
        </div>
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-4 max-md:py-3 md:px-6">
          <DocumentDuplicateIcon className="w-6 md:w-8 text-gray-600" />
          <p>Level: {lessonLevel}</p>
        </div>
      </div>
    </section>
  );
};

export default LevelHeroSection;
import { AcademicCapIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const learningLevels = [
  {
    name: 'Beginner',
    description: 'Perfect for those just starting their Akan language journey. Learn the fundamentals and basic communication.',
    icon: AcademicCapIcon,
    to: '/learn/beginner',
  },
  {
    name: 'Intermediate',
    description: 'Expand your vocabulary and grammar skills. Engage in more complex conversations and understand cultural nuances.',
    icon: LightBulbIcon,
    to: '/learn/intermediate',
  },
  {
    name: 'Advanced',
    description: 'Achieve fluency and mastery of the Akan language. Explore advanced topics and engage in sophisticated discussions.',
    icon: RocketLaunchIcon,
    to: '/learn/advanced',
  },
  // You can add more levels if needed
];

const LearningLevels = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">Choose Your Path</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Learning Levels
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select the level that best suits your current understanding of Akan. Start learning at your own pace and progress towards fluency.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-3">
          {learningLevels.map((level) => (
            <div key={level.name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-4">
                <level.icon className="h-8 w-8 text-gray-500" aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-6 text-gray-900">{level.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{level.description}</p>
              <Link
                to={level.to}
                className="mt-4 block text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 transition-colors duration-200"
              >
                Start {level.name} Level <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningLevels;
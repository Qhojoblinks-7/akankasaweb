import { PlayCircleIcon, MicrophoneIcon, DocumentIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const resources = [
  {
    name: 'Interactive Lessons',
    description: 'Engaging lessons with exercises, quizzes, and real-life scenarios to make learning fun and effective.',
    icon: PlayCircleIcon,
    to: '/resources/lessons',
  },
  {
    name: 'Audio Pronunciation',
    description: 'Listen to native speakers pronounce words and phrases correctly, helping you master the sounds of Akan.',
    icon: MicrophoneIcon,
    to: '/resources/audio',
  },
  {
    name: 'Downloadable Guides',
    description: 'Convenient PDFs and worksheets for offline study and quick reference.',
    icon: DocumentIcon,
    to: '/resources/guides',
  },
  {
    name: 'Cultural Activities',
    description: 'Explore Akan culture through interactive activities, stories, and traditions.',
    icon: PuzzlePieceIcon,
    to: '/resources/culture',
  },
  // You can add more resource types here
];

const FeaturedResources = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">Dive Deeper</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Learning Resources
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a variety of resources designed to help you learn Akan in a way that suits your learning style.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div key={resource.name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-4">
                <resource.icon className="h-8 w-8 text-gray-500" aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-6 text-gray-900">{resource.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{resource.description}</p>
              <Link
                to={resource.to}
                className="mt-4 block text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 transition-colors duration-200"
              >
                Explore {resource.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedResources;
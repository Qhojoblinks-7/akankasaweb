import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
  faExpand,
  faCompress,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/logo1.svg';
import { courseData } from '../../../data/courseData';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

const VideoPlaybackPageMobile = () => {
  const { level, moduleId, videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [levelData, setLevelData] = useState(null);
  const [moduleTitle, setModuleTitle] = useState('');
  const [subtopicTitle, setSubtopicTitle] = useState('');
  const location = useLocation();

  // Video player state
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8); // Default volume
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      setLoading(true);
      setError(null);
      setVideoDetails(null);
      setLevelData(null);
      setModuleTitle('');
      setSubtopicTitle('');

      try {
        const currentLevelData = courseData[level];
        if (currentLevelData) {
          setLevelData(currentLevelData);
          const currentModule = currentLevelData.modules?.find(mod => mod.id === moduleId);
          if (currentModule) {
            setModuleTitle(currentModule.title);
            let foundVideo = null;
            let currentSubtopicTitle = '';
            currentModule.subtopics?.forEach(subtopic => {
              const video = subtopic.videos?.find(vid => vid.id === videoId);
              if (video) {
                foundVideo = video;
                currentSubtopicTitle = subtopic.title;
              }
            });

            if (foundVideo) {
              setVideoDetails({
                ...foundVideo,
                url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
                transcript: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
              });
              setSubtopicTitle(currentSubtopicTitle);
            } else {
              setError('Video not found.');
            }
          } else {
            setError('Module not found.');
          }
        } else {
          setError('Level not found.');
        }
      } catch  {
        setError('Failed to load video details.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [level, moduleId, videoId]);

  if (loading) {
    return <div>Loading video...</div>;
  }

  if (error) {
    return <div>Error loading video: {error}</div>;
  }

  if (!videoDetails) {
    return <div>Video not found.</div>;
  }

  const backToModuleLink = `/dashboard/${level}/module/${moduleId}`;

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    setMuted(false); // Unmute when volume is changed
  };

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerRef.current); // Toggle fullscreen on the video player container
      setIsFullscreen(!isFullscreen);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 bg-black text-white rounded-md p-2 z-50 focus:outline-none lg:hidden mt-10"
      >
        <Bars3BottomLeftIcon className="h-6 w-6 " aria-hidden="true" />
      </button>

      {/* Sidebar (Mobile) */}
      <aside
        className={`bg-black mt-10 text-white w-64 p-4 flex flex-col fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex justify-center">
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        {levelData?.title && (
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">{levelData.title}</h2>
          </div>
        )}
        {levelData?.modules && levelData.modules.length > 0 && (
          <div className="mb-4 overflow-y-auto">
            <h3 className="text-md font-semibold mb-2">Modules</h3>
            <ul>
              {levelData.modules.map(module => (
                <li key={module.id}>
                  <Link
                    to={`/dashboard/${level}/module/${module.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${moduleId === module.id ? 'bg-gray-700' : ''}`}
                  >
                    {module.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-4">
          <Link
            to="/forum"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${location.pathname === '/forum' ? 'bg-gray-700' : ''}`}
          >
            Discussion Forum
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/resources"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${location.pathname === '/resources' ? 'bg-gray-700' : ''}`}
          >
            Resources
          </Link>
        </div>
      </aside>

      {/* Main Content (Video Player and Details) */}
      <main className="flex-1 flex  flex-col mt-20 p-4">
        <div className="bg-white rounded-md shadow-sm p-6 mb-4">
          <div className="mb-4">
            <Link to={backToModuleLink} className="text-gray-600 hover:underline text-sm ">
              Back to {levelData?.title} - {moduleTitle} - {subtopicTitle}
            </Link>
          </div>
        </div>

        {/* Video Player Section with Embedded Controls */}
        <div className="bg-black rounded-md overflow-hidden shadow-lg mb-4 relative" ref={playerRef} style={{ width: '100%', aspectRatio: '16/9' }}> {/* Adjusted for mobile */}
          <ReactPlayer
            url={videoDetails.url}
            width="100%"
            height="100%"
            playing={playing}
            muted={muted}
            volume={volume}
            config={{
              youtube: {
                playerVars: { showinfo: 0 },
              },
            }}
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white p-2 flex items-center justify-between z-10">
            {/* Play/Pause Button */}
            <button onClick={handlePlayPause} className="mr-2 focus:outline-none">
              <FontAwesomeIcon icon={playing ? faPause : faPlay} size="lg" />
            </button>

            {/* Volume Control */}
            <div className="flex items-center mr-2">
              <button onClick={handleMuteUnmute} className="focus:outline-none">
                <FontAwesomeIcon icon={muted ? faVolumeMute : faVolumeUp} size="lg" />
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
                className="ml-2 w-24"
              />
            </div>

            {/* Fullscreen Button */}
            {screenfull.isEnabled && (
              <button onClick={toggleFullscreen} className="focus:outline-none">
                <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} size="lg" />
              </button>
            )}
          </div>
        </div>

        {/* Video Details Section */}
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{videoDetails.title}</h2>
          {videoDetails.description && <p className="text-gray-700 mb-4">{videoDetails.description}</p>}

          {videoDetails.transcript && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transcript</h3>
              <p className="text-gray-700 whitespace-pre-line">{videoDetails.transcript}</p>
            </div>
          )}

          {videoDetails.vocabulary && videoDetails.vocabulary.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Vocabulary</h3>
              <ul>
                {videoDetails.vocabulary.map((term) => (
                  <li key={term.word} className="text-gray-700">{term.word}: {term.definition}</li>
                ))}
              </ul>
            </div>
          )}

          {/* You can add more related content here */}
        </div>
      </main>
    </div>
  );
};

export default VideoPlaybackPageMobile;
// src/community/components/EventsCalendarSection.js
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaClock, FaMicrophoneAlt, FaVideo } from 'react-icons/fa'; // Added FaMicrophoneAlt and FaVideo

const eventsData = [
  {
    date: 'June 4, 2025',
    title: 'Akan Oral Heritage Workshop (Online)',
    description: 'A deep-dive session on Akan oral traditions, proverbs, and storytelling, featuring guest speakers from Ghana and the diaspora.',
    time: '3:00 PM - 5:00 PM GMT',
    location: 'Online Event',
    icon: <FaMicrophoneAlt />, // Specific icon for this event type
    online: true // Flag for online events
  },
  {
    date: 'June 10, 2025',
    title: 'Traditional Music & Dance Evening',
    description: 'Experience authentic Akan music and dance performances in Accra. All are welcome. RSVP required.',
    time: '7:00 PM - 9:30 PM',
    location: 'Accra Cultural Centre',
    icon: null, // No specific icon visible in the image for this
    online: false
  },
  {
    date: 'June 17, 2025',
    title: 'Storytelling Night: Folklores & Legends',
    description: 'Gather with the community for a lively evening of Akan folkales. Open mic for all ages!',
    time: '6:30 PM - 8:00 PM',
    location: 'Kumasi Community Hall',
    icon: null,
    online: false
  },
  {
    date: 'June 25, 2025',
    title: 'Youth Akan Language Challenge (Online)',
    description: 'Interactive quiz and games to test your Akan skills. Prizes for the top three participants!',
    time: '4:00 PM - 5:15 PM GMT',
    location: 'Online Event',
    icon: <FaVideo />, // Specific icon for this event type
    online: true
  },
];

function EventsCalendarSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday

  const totalDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const leadingBlanks = Array.from({ length: firstDay }, (_, i) => null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDayDetails = (day) => {
    // Dates with events as per the image
    if (currentMonth.getMonth() === 5 && currentMonth.getFullYear() === 2025) { // June 2025
      if ([4, 10, 13, 17, 24, 25, 28].includes(day)) return 'event'; // Specific highlighted dates
    }
    return '';
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Events Calendar</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">
          See All Events <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Calendar Grid (Left) */}
        <div className="lg:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <button onClick={goToPrevMonth} className="text-gray-600 hover:text-gray-900">
              <FaChevronLeft />
            </button>
            <h3 className="text-xl font-bold text-gray-800">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button onClick={goToNextMonth} className="text-gray-600 hover:text-gray-900">
              <FaChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-700 mb-4">
            {daysOfWeek.map(day => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-gray-800">
            {leadingBlanks.map((_, i) => (
              <div key={`blank-${i}`} className="py-2"></div>
            ))}
            {days.map(day => (
              <div
                key={day}
                className={`relative py-2 rounded-md ${getDayDetails(day) === 'event' ? 'bg-yellow-100 border border-yellow-300 font-bold text-yellow-800' : 'hover:bg-gray-50'}`}
              >
                {day}
                {/* Small orange dot for highlighted dates */}
                {getDayDetails(day) === 'event' && (
                  <span className="absolute bottom-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events List (Right) */}
        <div className="lg:w-1/2 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-4"> {/* Adjusted space between events for tighter look */}
            {eventsData.map((event, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100"> {/* Added card styling */}
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-yellow-600 font-semibold flex items-center">
                    {event.icon && <span className="mr-2 text-xl">{event.icon}</span>} {/* Render specific icon if available */}
                    {event.date}
                  </p>
                  <a href="#" className="text-orange-800 hover:underline text-xs font-medium">Details</a> {/* Smaller Details link */}
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">{event.title}</h4>
                <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <FaClock className="mr-2 text-blue-600" /> {event.time}
                  {event.online && (
                    <span className="ml-4 flex items-center">
                      <FaVideo className="mr-2 text-blue-600" /> Online Event
                    </span>
                  )}
                </div>
                {!event.online && ( // Only show physical location if not an online event
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" /> {event.location}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsCalendarSection;
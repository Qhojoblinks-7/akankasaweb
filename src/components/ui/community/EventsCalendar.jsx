import React from 'react';
import { Link } from 'react-router-dom'; // If you want event links

function EventsCalendar({ events }) {
  if (!events || events.length === 0) {
    return <p className="text-gray-500">No upcoming events.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-3">Events Calendar</h3>
      <ul>
        {events.map(event => (
          <li key={event.id} className="py-2 border-b last:border-b-0">
            {event.url ? (
              <Link to={event.url} className="text-blue-500 hover:underline font-semibold">
                {event.title}
              </Link>
            ) : (
              <span className="font-semibold">{event.title}</span>
            )}
            <p className="text-gray-600 text-sm">{event.date} - {event.location}</p>
            <p className="text-gray-700 text-sm">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsCalendar;

// Example Usage (in CommunityPage):
// const upcomingEvents = [
//   { id: 'e1', title: 'Akan Language Workshop (Beginner)', date: '2024-06-15', location: 'Online', description: 'Learn the basics of Akan pronunciation and greetings.', url: '/events/akan_workshop' },
//   { id: 'e2', title: 'Akan Cultural Festival', date: '2024-07-20', location: 'Kumasi, Ghana', description: 'A celebration of Akan music, dance, and traditions.', url: '/events/akan_festival' },
//   { id: 'e3', title: 'Online Lecture: The History of the Ashanti Kingdom', date: '2024-08-05', location: 'Online', description: 'A lecture by Dr. Opoku Ware on the history of the Ashanti Kingdom.', url: '/events/ashanti_history_lecture' },
// ];
// <EventsCalendar events={upcomingEvents} />
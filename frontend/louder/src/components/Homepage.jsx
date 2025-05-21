import React, { useEffect, useState } from 'react';

function Homepage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://event-scraping-service.onrender.com/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      className=" bg-slate-800 min-h-screen bg-cover bg-center bg-no-repeat py-10 px-4 md:px-8"
      style={{
            }}
    >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">Events in Sydney</h1>
        {events.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">Loading events...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg p-6 text-white hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                <p className="mb-4 text-sm">{e.date} | {e.venue}</p>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  GET TICKETS
                </a>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default Homepage;

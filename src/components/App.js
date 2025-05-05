import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tour from './Tour';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) return <Loading />;

  if (tours.length === 0) {
    return (
      <main id="main">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main id="main">
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;



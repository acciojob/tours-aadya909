import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tours:', error);
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

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;



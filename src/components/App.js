import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import Loading from './Loading';
import Tours from './Tours';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async ()=> {
    setLoading(true);
    try {
      const response = await fetch("https://www.course-api.com/react-tours-project");
      const data = await response.json();
      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching tours: ", error);
      setLoading(false);
 }
  }

  useEffect(() => {
    fetchTours();
  }, [])


  return (
    <div id='main'>
      <h1 style={{textAlign:'center'}}>
        {tours.length ? "Our Tours" : "No tours left"}
      </h1>
      {loading ? (
      <Loading /> 
      ) : (
        <Tours tours={tours} setTours={setTours}/>
      )}
    </div>
  )
}

export default App



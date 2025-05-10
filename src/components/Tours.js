import React from 'react';
import Tour from './Tour';

const Tours = ({tours, setTours}) => {
    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };
  return (
    <div style={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: '20px',
        margin: 'auto',
        width: '90%',
    }}>
        {tours.map((tour)=> (
            <div key={tour.id}>
                <Tour tour={tour} removeTour={removeTour}/>
            </div>
        ))}
    </div>
  )
}

export default Tours


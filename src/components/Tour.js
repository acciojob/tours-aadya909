import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour" id={`tour-${id}`}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        {/* 🟢 Description with dynamic ID */}
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See less' : 'Show more'}
          </button>
        </p>

        {/* 🟢 Remove button with dynamic ID */}
        <button
          className="delete-btn"
          id={`delete-btn-${id}`}
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;




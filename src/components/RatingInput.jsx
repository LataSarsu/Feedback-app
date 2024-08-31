import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const RatingInput = () => {
  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };
  const { ratingContext } = useContext(CounterContext);
  const [rating, setRating] = ratingContext;
  return (
    <div className="rating-options">
      <h2>How would you rate your service with us?</h2>
      {[...Array(10).keys()].map((i) => (
        <label key={i + 1}>
          <input
            className="radInp"
            type="radio"
            name="rating"
            value={i + 1}
            checked={rating === i + 1}
            onChange={handleRatingChange}
          />
          {i + 1}
        </label>
      ))}
    </div>
  );
};

export default RatingInput;

import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";

const AverageRating = () => {
  const { averageRatingContext, feedbackContext } = useContext(CounterContext);
  const [averageRating, setAverageRating] = averageRatingContext;
  const [feedbackList, setFeedbackList] = feedbackContext;

  return (
    <div className="average-rating">
      <label>{feedbackList.length} Reviews</label>
      <label>Average Rating: {averageRating.toFixed(2)}</label>
    </div>
  );
};

export default AverageRating;

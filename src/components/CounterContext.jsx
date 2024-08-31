import React from "react";
import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        countContext: [count, setCount],
        ratingContext: [rating, setRating],
        reviewContext: [review, setReview],
        feedbackContext: [feedbackList, setFeedbackList],
        averageRatingContext: [averageRating, setAverageRating],
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };

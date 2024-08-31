import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";

const FeedbackList = () => {
  const { feedbackContext, averageRatingContext } = useContext(CounterContext);
  const [feedbackList, setFeedbackList] = feedbackContext;
  const [averageRating, setAverageRating] = averageRatingContext;
  const onRemove = (index) => {
    setFeedbackList((feedbackList) =>
      feedbackList.filter((_, i) => i !== index)
    );
  };
  useEffect(() => {
    if (feedbackList.length > 0) {
      const totalRatings = feedbackList.reduce(
        (sum, feedback) => sum + feedback.rating,
        0
      );
      const average = totalRatings / feedbackList.length;
      setAverageRating(average);
    } else {
      // Handle case where there are no items
      setAverageRating(0);
    }
  }, [feedbackList, setAverageRating]);
  return (
    <div className="feedback-list">
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index} className="feedback-item">
            <span>
              <strong>Rating: </strong>
              {feedback.rating}
            </span>
            <span>
              <strong>Review: </strong>
              {feedback.review}
            </span>
            <ImCross onClick={() => onRemove(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;

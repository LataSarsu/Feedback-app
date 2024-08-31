import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";

const ReviewInput = () => {
  const {
    ratingContext,
    reviewContext,
    feedbackContext,
    averageRatingContext,
  } = useContext(CounterContext);
  const [rating, setRating] = ratingContext;
  const [review, setReview] = reviewContext;
  const [feedbackList, setFeedbackList] = feedbackContext;
  const [averageRating, setAverageRating] = averageRatingContext;

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  //Handle submit
  const handleSubmit = () => {
    if (rating && review) {
      const newFeedback = { rating, review };
      const updatedFeedbackList = [...feedbackList, newFeedback];
      setFeedbackList(updatedFeedbackList);

      const totalRatings = updatedFeedbackList.reduce(
        (sum, feedback) => sum + feedback.rating,
        0
      );
      const average = totalRatings / updatedFeedbackList.length;
      setAverageRating(average);

      setRating(null), setReview("");
    }
  };
  return (
    <div className="review-input">
      <input
        className="revInp"
        type="text"
        value={review}
        onChange={handleReviewChange}
        placeholder="Write yor review here"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewInput;

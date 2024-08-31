import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RatingInput from "./components/RatingInput";
import ReviewInput from "./components/ReviewInput";
import FeedbackList from "./components/FeedbackList";
import AverageRating from "./components/AverageRating";
import { useContext } from "react";
import { CounterContext } from "./components/CounterContext";

function App() {
  // const [count, setCount] = useState(0);
  // const [rating, setRating] = useState(null);
  // const [review, setReview] = useState("");
  // const [feedbackList, setFeedbackList] = useState([]);
  // const [averageRating, setAverageRating] = useState(0);
  // const {
  //   countContext,
  //   ratingContext,
  //   reviewContext,
  //   feedbackContext,
  //   averageRatingContext,
  // } = useContext(CounterContext);

  // const [count, setCount] = countContext;
  // const [rating, setRating] = ratingContext;
  // const [review, setReview] = reviewContext;
  // const [feedbackList, setFeedbackList] = feedbackContext;
  // const [averageRating, setAverageRating] = averageRatingContext;

  //Handle rating change
  // const handleRatingChange = (e) => {
  //   setRating(Number(e.target.value));
  // };

  //Handle Review change
  // const handleReviewChange = (e) => {
  //   setReview(e.target.value);
  // };

  //Handle submit
  // const handleSubmit = () => {
  //   if (rating && review) {
  //     const newFeedback = { rating, review };
  //     const updatedFeedbackList = [...feedbackList, newFeedback];
  //     setFeedbackList(updatedFeedbackList);

  //     const totalRatings = updatedFeedbackList.reduce(
  //       (sum, feedback) => sum + feedback.rating,
  //       0
  //     );
  //     const average = totalRatings / updatedFeedbackList.length;
  //     setAverageRating(average);

  //     setRating(null), setReview("");
  //   }
  // };

  return (
    <>
      <h1>Feedback app</h1>
      <div className="feedback-app">
        <div className="rating-input">
          <RatingInput />
          <ReviewInput />
        </div>
        <AverageRating />
        <FeedbackList />
      </div>
    </>
  );
}

export default App;

import React from "react";
import data from "../data.json";
import './Feedback.css'; 

const Feedback = () => {
    const feedbackData = data.feedback;

    return (
      <section className="feedback">
        <h2>Customer Feedback</h2>
        <p>Checkout the feedback from our online customers or visit our online store for more information</p>
        <ul>
          {feedbackData.map((feedback, index) => (
            <li key={index}>
              <blockquote>{feedback.text}</blockquote>
              <cite>- {feedback.author}</cite>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Feedback;

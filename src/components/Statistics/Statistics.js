import React from 'react';

const Statistics = ({good, neutral, bad, total, positivePercentage= 0}) => (
  <div>
    <h2>Statistics</h2>
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  </div>
);

export default Statistics;

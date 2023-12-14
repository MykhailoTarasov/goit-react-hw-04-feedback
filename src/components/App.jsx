import React, { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Made one function for all three buttons
  const handlerButtonTags = (option) => {
    setFeedback(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    const percentage = total > 0 ? (good / total) * 100 : 0;

    return percentage.toFixed(0);
  };

  const tags = Object.keys(feedback);
  const { good, neutral, bad } = feedback;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: '#c1eab2',
      }}
    >
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={tags}
            onLeaveFeedback={handlerButtonTags}
          />

          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;

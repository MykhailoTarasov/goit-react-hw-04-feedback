import React from 'react';

import { nanoid } from 'nanoid';
import { Button, Container } from './FeedbackOptions.Styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
   {options.map(option => (
        <span key={nanoid()}>
          <Button
            type="button"
            onClick={evt => onLeaveFeedback(evt.target.value)}
            value={option}
          >
            {option}
          </Button>
        </span>
      ))}
  </Container>
);

export default FeedbackOptions;

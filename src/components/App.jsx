import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './app.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <div className={css.statistics}>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions
        onGood={() => setGood(prevState => prevState + 1)}
        onNeutral={() => setNeutral(prevState => prevState + 1)}
        onBad={() => setBad(prevState => prevState + 1)}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed()}
          />
        </Section>
      )}
    </div>
  );
}

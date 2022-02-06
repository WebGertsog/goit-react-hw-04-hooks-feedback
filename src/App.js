import { useState } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notofication";
import { GlobalStyle } from "./components/Global.styled";
import { Container } from "./App.styled.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handle Increment State
  const handleIncrementState = (opt) => {
    switch (opt) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  // Count Total Feedback
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Count Positive Feedback Percentage
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const summ = Math.round((good / total) * 100);
    return summ ? summ : "0";
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={handleIncrementState}
          />
        </Section>

        <Section title={"Statistics:"}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback!"></Notification>
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;

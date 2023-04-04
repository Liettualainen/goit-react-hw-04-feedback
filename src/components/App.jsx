import { Component } from 'react';

import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  LeaveFeedback = e => {
    const el = e.target.textContent;
    this.setState(prevState => {
        return {
         [el]: prevState[el] +1,
    }  
  })
}

  countTotalFeedback = () => {
    const stateArr = Object.values(this.state);
    return stateArr.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const {
      LeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={LeaveFeedback}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage(
                countTotalFeedback()
              )}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

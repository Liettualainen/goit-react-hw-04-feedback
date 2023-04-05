// import { Component } from 'react';
 import { useState } from 'react';


import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

import css from './App.module.css';

export const App = () => {
  const [good, goodCounter] = useState(0);
  const [neutral, neutralCounter] = useState(0);
  const [bad, badCounter] = useState(0);


  const onFeedback = event => {
    const feedback = event.target.textContent;

    switch (feedback) {
      case 'good':
        goodCounter(prev => prev + 1);
        break;
      case 'neutral':
         neutralCounter(prev => prev + 1);
        break;
      case 'bad':
       badCounter(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = total => {
    return Math.round((good / total) * 100);
  };

  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback ={onFeedback}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedback(countTotalFeedback())}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );








}

  
  
  // export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   LeaveFeedback = e => {
//     const el = e.target.textContent;
//     this.setState(prevState => {
//         return {
//          [el]: prevState[el] +1,
//     }  
//   })
// }

//   countTotalFeedback = () => {
//     const stateArr = Object.values(this.state);
//     return stateArr.reduce((acc, el) => acc + el, 0);
//   };

//   countPositiveFeedbackPercentage = total => {
//     return Math.round((this.state.good / total) * 100);
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const {
//       LeaveFeedback,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     return (
//       <div className={css.app}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={LeaveFeedback}
//           />
//         </Section>
//         {countTotalFeedback() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback()}
//               positivePercentage={countPositiveFeedbackPercentage(
//                 countTotalFeedback()
//               )}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }





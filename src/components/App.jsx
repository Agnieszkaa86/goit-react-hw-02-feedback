import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counter = e =>
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });

  getTotal = () =>
    Object.values(this.state).reduce((acc, item) => (acc += item), 0);

  positivePercentage = () => {
    return Math.round((this.state.good / this.getTotal()) * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions counter={this.counter} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.getTotal()}
          positivePercentage={this.positivePercentage()}
        />
      </Section>
    );
  }
}

export default App;

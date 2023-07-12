import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.statistics}>
        <p className={css.statItem}>Good: {good}</p>
        <p className={css.statItem}>Neutral: {neutral}</p>
        <p className={css.statItem}>Bad: {bad}</p>
        <p className={css.statItem}>Total: {total}</p>
        <p className={css.statItem}>Positive Feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

const totalStatistics = PropTypes.number.isRequired;

Statistics.propTypes = {
  good: totalStatistics,
  neutral: totalStatistics,
  bad: totalStatistics,
  total: totalStatistics,
  positivePercentage: totalStatistics,
};
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Progress.css';

const Progress = ({ progress }) => {
  const { currentChapter, completed } = progress;

  return (
    <div className="grid-center">
      <div className="grid-item">
        <p className="percentage">{`${completed}%`}</p>
        <p className="completed">Completed</p>
      </div>
      <div className="grid-item-1">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">{currentChapter}</p>
        <button className="update-progress" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default Progress;

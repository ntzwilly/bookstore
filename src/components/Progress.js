import React from 'react';
import PropTypes from 'prop-types';
import '../css/Progress.css';

const Progress = ({ progress }) => {
  const { currentChapter, completed } = progress;

  return (
    <>
      <div>
        <p>{`${completed}%`}</p>
        <p>Completed</p>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
      </div>
    </>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default Progress;

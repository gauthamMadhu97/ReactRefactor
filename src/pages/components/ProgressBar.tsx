import React from 'react';
import './ProgressBar.css'; // Import your CSS styles

const ProgressBar = ({ percentage }: any) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;

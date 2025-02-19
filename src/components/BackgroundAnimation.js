import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
      <div className="floating-shapes">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`shape shape-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
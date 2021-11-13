import React from 'react';
import Navigation from '../component/Navigation';

const Test = () => {
  return (
    <div className="test">
        <Navigation />
        <div className="testContent">
          <div className="content">
            <h1>Dominique LEROY</h1>
            <h2>Développeur Front-end</h2>
            <div className="pdf">
              <a href="#" target="_blank">Télécharger CV</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Test;
import React from 'react';
import Navigation from '../component/Navigation';
import ProjectList from '../component/Portfolio/ProjectList';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
       <ProjectList />
    </div>
  );
};

export default Portfolio;
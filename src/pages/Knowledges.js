import React from 'react';
import { NavLink } from 'react-router-dom';
import Experience from '../component/Knowledges/Experience';
import Hobbies from '../component/Knowledges/Hobbies';
import Languages from '../component/Knowledges/Languages';
import OtherSkills from '../component/Knowledges/OtherSkills';
import Navigation from '../component/Navigation';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
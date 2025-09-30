import React from 'react';
// 🚨 CORRECTED IMPORT PATH: Use './' for relative import
import SkillsCircles from './SkillsCircles'; 
// Assuming technologies and their icons are correctly imported here
import { technologies } from '../constants'; 

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Passing the technologies array to the new component */}
      <SkillsCircles icons={technologies} /> 
    </div>
  );
};

export default Tech;
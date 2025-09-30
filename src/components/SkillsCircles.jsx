import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'; 

// Destructure 'link' from props
const SkillCircle = ({ icon, name, index, link }) => {
  
  // Define the content inside the motion.div
  const circleContent = (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      
      // Tailwind CSS for the circular design and shadow. Removed cursor-pointer
      // because the <a> tag will handle the pointer style.
      className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-800 shadow-xl p-4" 
      title={name} 
    >
      <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    </motion.div>
  );

  // If a link exists, wrap the circle content in an anchor tag
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        // Style the <a> tag to look like a clickable item
        className="cursor-pointer"
      >
        {circleContent}
      </a>
    );
  }

  // If no link exists, just return the motion div
  return circleContent;
};

const SkillsCircles = ({ icons }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {icons && Array.isArray(icons) && icons.map((skill, index) => (
        <SkillCircle 
            key={skill.name || index} 
            index={index} 
            {...skill} // Spread all properties (name, icon, link)
        />
      ))}
    </div>
  );
};

export default SkillsCircles;
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { Tilt } from 'react-tilt'; 

// --- Project Card Component ---

const ProjectCard =({ index, name, description, tags, image, source_code_link}) =>{
  return (
    <motion.div 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.25 }} 
      variants={fadeIn("up","spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className = "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
          className='w-full h-full object-cover rounded-2xl' />
          
          <div className='absolute inset-0 flex justify-end m-3'>
            <motion.div
              onClick={()=> window.open
                (source_code_link, "_blank")}
              
              // Initial width is 40px, expands to 120px on hover
              initial="collapsed"
              whileHover="expanded" 
              variants={{
                collapsed: { width: 40 },
                expanded: { width: 120 }
              }}
              transition={{ duration: 0.3, type: "tween" }} 
              
              className='black-gradient w-10 h-10 rounded-full flex items-center cursor-pointer relative overflow-hidden' 
            >
              
              {/* Text component: Fades in only after the parent container has expanded. */}
              <motion.span
                  variants={{
                      collapsed: { opacity: 0 },
                      expanded: { opacity: 1 }  
                  }} 
              className='text-white text-xs pl-10 whitespace-nowrap' 
              >
                  Click here
              </motion.span>
              
              {/* Icon component: Stays fixed on the right. */}
              <motion.div 
                className='w-10 h-10 flex justify-center items-center flex-shrink-0 absolute right-0'
                variants={{
                  collapsed: { x: 0  },
                  expanded: { x: -80 } // Move right by 80px when expanded
                }}
              >
                  <img 
                    src={github} 
                    alt="Click Here"
                    className='w-1/2 h-1/2 object-contain'
                  />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) =>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name }
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

// --- Works Section Component ---

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links and live demos in it. It reflects my ability to design variety of products, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map ((project, index)=>(
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")
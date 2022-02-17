import { motion } from 'framer-motion';
import {FC} from 'react';

const Projects: FC = () => {
  return (
    <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}} className='mx-auto container text-white'>
      Test
    </motion.div>
  )
};

export default Projects;
import {motion} from 'framer-motion';
import React, {FC} from 'react';
import Card from "../components/ui/Card";
import {FaUsers} from "react-icons/fa";

const Home: FC = () => {
  return (
    <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}}
                className='bg-dark h-1/3 text-white py-4 space-y-8'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[1, 2, 3, 4].map((x,index) => (
            <Card title={`This is card ${x}`} key={index}>
              <div className="flex">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque doloribus, expedita harum labore
                  nemo possimus quia sed. Ab aperiam deserunt, doloremque eligendi nam nisi nobis qui reiciendis sed
                  voluptatum?
                </p>
                <FaUsers className='w-full text-3xl text-primary'/>
              </div>
            </Card>
          ))}
        </div>
        <h4 className='text-center mt-8 text-2xl'>Believe in unbelievable</h4>
      </div>
      <div className='bg-dark/50 w-full h-56'>
        <div className="container mx-auto py-4">
          Test
        </div>
      </div>
    </motion.div>
  )
};

export default Home;
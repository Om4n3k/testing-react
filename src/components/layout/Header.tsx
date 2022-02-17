import React, {FC} from 'react';
import NavigationItem from "../NavigationItem";
import {motion} from "framer-motion";
import Button from "../ui/Button";
import backgroundVideo from "../../assets/bg.mp4";

const Header: FC = () => {
  return (
    <header className='w-full h-2/3 overflow-hidden relative text-white'>
      <nav className='sticky top-0 bg-gradient-to-b from-black/80 to-black/20 py-8'>
        <div className="container mx-auto flex items-center justify-between">
          <h1 className='text-3xl font-bold'>Project-<span className='text-primary'>O</span></h1>
          <ul className='flex gap-8'>
            <NavigationItem to='/'>Home</NavigationItem>
            <NavigationItem to='/projects'>Projects</NavigationItem>
          </ul>
        </div>
      </nav>
      <div className="mx-auto container mt-16 space-y-4">
        <motion.h2 animate={{
          x: [-100, 0],
          opacity: [0, 1]
        }} className='text-2xl font-semibold drop-shadow-xl'>Your <span
          className='text-primary'>appearance</span> made for today's standards
        </motion.h2>
        <motion.h3 animate={{
          x: [-100, 0],
          opacity: [0, 1]
        }} transition={{delay: .1}} className='text-xl drop-shadow-xl'>Professional websites for professionals
        </motion.h3>
        <Button animate={{
          x: [-100, 0],
          opacity: [0, 1]
        }} transition={{delay: .1}}>
          Contact us
        </Button>
      </div>
      <div className='absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-dark'/>
      <video className='absolute top-0 left-0 object-cover h-full w-full -z-10' autoPlay={true} muted={true}
             loop={true} src={backgroundVideo}/>
    </header>
  )
};

export default Header;
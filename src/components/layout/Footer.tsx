import {FC} from 'react';
import {FaHeart} from "react-icons/fa";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-dark-lighter text-white py-6'>
      <div className='mx-auto container flex justify-between items-center text-sm'>
        <span>Made with <FaHeart className='inline'/> by Om4n3k</span>
        <span>Copyright &copy; {year}. All rights reserved</span>
      </div>
    </footer>
  )
};

export default Footer;
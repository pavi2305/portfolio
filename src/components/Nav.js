import React from 'react';
import {BiHomeAlt, BiUser} from  'react-icons/bi';
import {BsChatSquareText,BsBriefcase,BsClipboardData} from  'react-icons/bs';
import {Link} from 'react-scroll';

const Nav = () => {
  return(
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[76px] backdrop-blur-2xl rounded-full max-w-[260px] mx-auto px-5 flex justify-between text-2xl text-white/50'>
          <Link to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[76px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[76px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to='services' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[76px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

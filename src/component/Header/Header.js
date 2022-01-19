import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../icons/BackIcon';
import User from '../../icons/User';

const Header = () => {
    return (
        <header className='bg-blue-400 text-gray-50 py-2 flex justify-between px-5 items-center'>
           <a href="#" className='bg-blue-500 rounded-full py-3.5 px-6 hover:bg-blue-600'> 
               <BackIcon/>
           </a>
           <Link to="/profile" className="hover:bg-blue-500 rounded-md p-5">
           <User />
           </Link>
        </header>
    );
}

export default Header;
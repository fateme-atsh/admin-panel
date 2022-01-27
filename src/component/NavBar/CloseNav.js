import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../icons/Logout';
import Profile from '../../icons/Profile';
import Table from '../../icons/Table';
import UserCircle from '../../icons/UserCircle';
import Users from '../../icons/Users';
import Reserve from '../../icons/Reserve'

const CloseNav = () => {
    return (
            <ul className='w-full sm:hidden md:hidden'>
                <li className='border-b border-gray-200 flex px-8 py-4 m-3 items-center'>
                    <UserCircle />
                </li>

                <li className='cursor-pointer'>
                    <Link to="/users" className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Users />
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to="/reserve" className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Reserve />
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/tables' className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Table />
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/profile' className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Profile />
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/logout' className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Logout />
                    </Link>
                </li>
            </ul>
        );
}

export default CloseNav;
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../icons/Logout';
import Profile from '../../icons/Profile';
import Table from '../../icons/Table';
import UserCircle from '../../icons/UserCircle';
import Users from '../../icons/Users';

const CloseNav = () => {
    return (
            <ul className='w-full'>
                <li className='border-b border-gray-200 flex px-8 py-4 m-3 items-center'>
                    <UserCircle />
                </li>


                <li className='cursor-pointer'>
                    <Link to="/users" className='flex px-8 py-4 m-3 hover:bg-gray-100'>
                        <Users />
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
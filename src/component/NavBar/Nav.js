import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../icons/Logout';
import Profile from '../../icons/Profile';
import Table from '../../icons/Table';
import UserCircle from '../../icons/UserCircle';
import Users from '../../icons/Users';

const Nav = () => {
    return (
        <nav className='bg-white grid grid-cols-1 text-xl w-1/4'>
            <ul className='w-full'>
                <li className='border-b border-gray-200 flex px-8 py-4 m-3 items-center'>
                    <UserCircle />
                    <h1 className='px-8 text-2xl'>پنل ادمین</h1>
                </li>


                <li className='cursor-pointer'>
                    <Link to="/users" className='flex px-16 py-4 m-3 hover:bg-gray-100'>
                        <Users />
                        <h2 className='px-8'> جدول کاربران</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/tables' className='flex px-16 py-4 m-3 hover:bg-gray-100'>
                        <Table />
                        <h2 className='px-8'>جدول میزها</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/profile' className='flex px-16 py-4 m-3 hover:bg-gray-100'>
                        <Profile />
                        <h2 className='px-8'>پروفایل</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/logout' className='flex px-16 py-4 m-3 hover:bg-gray-100'>
                        <Logout />
                        <h2 className='px-8'>خروج</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
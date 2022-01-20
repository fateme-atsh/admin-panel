import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../icons/Logout';
import Profile from '../../icons/Profile';
import Table from '../../icons/Table';
import UserCircle from '../../icons/UserCircle';
import Users from '../../icons/Users';

const OpenNav = () => {
    return (
            <ul className='w-full ml-12'>
                <li className='border-b border-gray-200 flex px-2 py-4 m-3 items-center'>
                    <UserCircle />
                    <h1 className='px-8 text-xl'>پنل ادمین</h1>
                </li>


                <li className='cursor-pointer'>
                    <Link to="/users" className='flex px-2 py-4 m-3 hover:bg-gray-100'>
                        <Users />
                        <h2 className='px-8 text-base'> جدول کاربران</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/tables' className='flex px-2 py-4 m-3 hover:bg-gray-100'>
                        <Table />
                        <h2 className='px-8 text-base'>جدول میزها</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/profile' className='flex px-2 py-4 m-3 hover:bg-gray-100'>
                        <Profile />
                        <h2 className='px-8 text-base'>پروفایل</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/logout' className='flex px-2 py-4 m-3 hover:bg-gray-100'>
                        <Logout />
                        <h2 className='px-8 text-base'>خروج</h2>
                    </Link>
                </li>
            </ul>
    );
}

export default OpenNav;
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../icons/Logout';
import Profile from '../../icons/Profile';
import Table from '../../icons/Table';
import UserCircle from '../../icons/UserCircle';
import Users from '../../icons/Users';
import Reserve from '../../icons/Reserve';

const OpenNav = ({...props}) => {



    return (
            <ul className='w-full ml-12 sm:ml-0'>
                <li className='border-b border-gray-200 flex px-2 py-4 m-3 items-center sm:hidden'>
                    <UserCircle />
                    <h1 className='px-8 text-xl sm:px-2 sm:text-xs md:text-sm'>پنل ادمین</h1>
                </li>


                <li className='cursor-pointer'>
                    <Link to="/users" onClick={props.clickToCloseNav}
                    className='flex px-2 py-4 m-3 hover:bg-gray-100 sm:m-1 sm:px-1 sm:py-2' >
                        <Users />
                        <h2 className='px-8 text-base sm:px-2 sm:text-xs md:text-sm'> کاربران</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to="/reserve" onClick={props.clickToCloseNav}
                    className='flex px-2 py-4 m-3 hover:bg-gray-100 sm:m-1 sm:px-1 sm:py-2'>
                        <Reserve/>
                        <h2 className='px-9 text-base sm:px-2 sm:text-xs md:text-sm'> رزروها</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/tables' onClick={props.clickToCloseNav}
                    className='flex px-2 py-4 m-3 hover:bg-gray-100 sm:m-1 sm:px-1 sm:py-2'>
                        <Table />
                        <h2 className='px-9 text-base sm:px-2 sm:text-xs md:text-sm'> میزها</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to='/profile' onClick={props.clickToCloseNav}
                    className='flex px-2 py-4 m-3 hover:bg-gray-100 sm:m-1 sm:px-1 sm:py-2'>
                        <Profile />
                        <h2 className='px-8 text-base sm:px-2 sm:text-xs md:text-sm'> پروفایل</h2>
                    </Link>
                </li>

                <li className='cursor-pointer'>
                    <button className='flex px-2 py-4 m-3 hover:bg-gray-100 w-11/12 sm:m-1 sm:px-1 sm:py-2'
                    onClick={props.handleLogOut}>
                        <Logout />
                        <h2 className='px-9 text-base sm:px-2 sm:text-xs md:text-sm'> خروج</h2>
                    </button>
                </li>
            </ul>
    );
}

export default OpenNav;
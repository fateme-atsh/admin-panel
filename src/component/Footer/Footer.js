import React from 'react';
import Copyright from '../../icons/Copyright';

const Footer = () => {
    return (  
        <footer className='bg-gray-100 border-t border-gray-200 flex justify-between py-8 px-3'>
            <div className='text-md'>
                <ul className='cursor-pointer flex '>
                    <li><a href='#' className='hover:text-blue-400 px-4'>خانه</a></li>
                    <li><a href='#' className='hover:text-blue-400 px-4'>شرکت</a></li>
                    <li><a href='#' className='hover:text-blue-400 px-4'>پرتفولیو</a></li>
                    <li><a href='#' className='hover:text-blue-400'>بلاگ</a></li>
                </ul>
            </div>

            <div className='flex text-lg' dir='ltr'>
                <Copyright/>
                <p className='px-2'>
                پنل ادمین<a href='#' className='text-blue-400'> توربو</a> 2022
                </p>
            </div>
            

        </footer>
    );
}
 
export default Footer;
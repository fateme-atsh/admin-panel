import React from 'react';
import { Link } from 'react-router-dom';

const NewDate = () => {
    return ( 
        <section className='sm:p-5'>
            <div dir='ltr' className='my-6 ml-14 sm:m-5'>
                <Link to="/tables/calendar" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 hover:bg-gray-50 sm:text-xs'>
                    بازگشت
                </Link>
            </div>

        <form>
            <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs'>شماره ی میز:</label>
                <input type='text' className='border border-slate-900 rounded-md sm:h-8' >
                </input>
            </div>

            <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs' >انتخاب تاریخ:</label>
                <input type='date' className='border border-slate-900 rounded-md sm:h-8' >
                </input>
            </div>

            <div className='my-10 pl-8 w-2/4 sm:flex' dir='ltr'>
                    <input type='reset' value='کنسل'
                        className='text-xl px-5 py-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                    <input type='submit' value='ذخیره' 
                        className='text-xl px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                </div>
        </form>
        </section>
     );
}
 
export default NewDate;
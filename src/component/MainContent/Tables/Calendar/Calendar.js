import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
    return (
        <>
            <div dir='ltr' className='my-6 ml-14 sm:m-5'>
                <Link to="/tables/calendar/new-date" className='bg-blue-500 text-white font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 mx-5 hover:bg-blue-600 sm:text-xs'>
                    تاریخ جدید
                </Link>

                <Link to="/tables" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 mx-5 hover:bg-gray-50 sm:text-xs'>
                    بازگشت
                </Link>
            </div>
            <div className='sm:text-xs sm:w-full sm:px-12 md:text-sm'>
                <table className='mx-10 my-5 w-11/12
            scrollbar-thin scrollbar-thumb-gray-500
            sm:w-full sm:overflow-x-scroll sm:block sm:m-5
            md:w-full md:overflow-x-scroll md:block md:mx-2'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-4 px-2 sm:p-1'>شماره میز</th>
                            <th className='py-4 px-2 sm:p-1'>تاریخ ها</th>
                            <th className='py-4 px-2 sm:p-1'>لیست ساعت ها</th>
                            <th className='py-4 px-2 sm:p-1'>ویرایش</th>
                            <th className='py-4 px-2 sm:p-1'>حذف</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Calendar;
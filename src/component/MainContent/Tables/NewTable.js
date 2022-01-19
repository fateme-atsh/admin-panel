import React from 'react';
import { Link } from 'react-router-dom';

const NewTable = () => {
    return (
        <>
            <div dir='ltr' className='my-6 ml-14'>
                <Link to="/tables" className='bg-blue-500 text-white font-bold text-lg rounded-md px-3 py-2 hover:bg-blue-600'>
                    بازگشت
                </Link>
            </div>

            <form>
                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold' > شماره میز</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='table-number'/>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'> ظرفیت</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='people'/>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>تاریخ</label>
                    <input type="date" className='border border-slate-900 rounded-md' name='date'/>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>ساعت شروع</label>
                    <input type="time" className='border border-slate-900 rounded-md' name='start-time'/>
                </div>
                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>ساعت پایان</label>
                    <input type="time" className='border border-slate-900 rounded-md' name='end-time'/>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold' >نام رزرو کننده</label>
                    <input type="text" className='border border-slate-900 rounded-md' name='user'/>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>شماره تماس رزروکننده</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='user-phone'/>
                </div>

                <div>
                    <input type='submit'>ذخیره</input>
                    <input type='click'>کنسل</input>
                </div>
            </form>
        </>
    );
}

export default NewTable;
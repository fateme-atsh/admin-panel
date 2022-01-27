import React from 'react';
import { Link } from 'react-router-dom';

const EditForm = ({...props}) => {
    console.log({...props})
    
    return (
        <section className='py-6'>
            <div dir='ltr' className='my-6 ml-14'>
                <Link to="/users" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 hover:bg-gray-50'>
                    بازگشت
                </Link>
            </div>

            <form>
                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold' > نام</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='name'
                        value={props.name}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'> نام کاربری</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='userName'
                        value={props.userName}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'> شماره تماس</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='phone'
                        value={props.phone}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'> ایمیل</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='email'
                        value={props.email}
                    ></input>
                </div>

                <div className='my-10 w-2/4' dir='ltr'>
                    <input type='reset' value='کنسل'
                        className='text-xl px-5 py-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white mx-2 cursor-pointer' />

                    <input type='submit' value='ذخیره ی تغییرات'
                        className='text-xl px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer' />

                </div>
            </form>
        </section>

    );
}

export default EditForm;
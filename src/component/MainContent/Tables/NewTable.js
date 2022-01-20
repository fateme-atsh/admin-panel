import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NewTable = () => {
    const [EditProfile, setEditProfile] = useState(
        {
            tableNumb: '',
            people: '',
            date: '',
            startOfBooking: '',
            endOfBooking: '',
            user: '',
            userPhone: '',
        }
    );

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...EditProfile };
        newFormData[fieldName] = fieldValue;

        setEditProfile(newFormData);
        
    };
    console.log(['field change:',EditProfile]);

    return (
        <section>
            <div dir='ltr' className='my-6 ml-14'>
                <Link to="/tables" className='bg-blue-500 text-white font-bold text-lg rounded-md px-3 py-2 hover:bg-blue-600'>
                    بازگشت
                </Link>
            </div>

            <form >
                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold' > شماره میز</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='tableNumb' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'> ظرفیت</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='people' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>تاریخ</label>
                    <input type="date" className='border border-slate-900 rounded-md' name='date' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>ساعت شروع</label>
                    <input type="time" className='border border-slate-900 rounded-md' name='startOfBooking' 
                    onChange={handleFormChange}></input>
                </div>
                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>ساعت پایان</label>
                    <input type="time" className='border border-slate-900 rounded-md' name='endOfBooking' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold' >نام رزرو کننده</label>
                    <input type="text" className='border border-slate-900 rounded-md' name='user' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-5 grid grid-cols-4'>
                    <label className='mx-8 text-xl font-semibold'>شماره تماس رزروکننده</label>
                    <input type="number" className='border border-slate-900 rounded-md' name='userPhone' 
                    onChange={handleFormChange}></input>
                </div>

                <div className='my-10 pl-8 w-2/4' dir='ltr'>
                    <input type='reset' value='کنسل'
                        className='text-xl px-5 py-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white mx-2 cursor-pointer' />

                    <input type='submit' value='ذخیره'
                        className='text-xl px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer' />

                </div>
            </form>
        </section>
    );
}

export default NewTable;
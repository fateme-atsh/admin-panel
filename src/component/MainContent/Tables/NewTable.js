import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NewTable = () => {
    const [EditProfile, setEditProfile] = useState(
        {
            tableNumb: '',
            people: '',
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
                <Link to="/tables" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 hover:bg-gray-50'>
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
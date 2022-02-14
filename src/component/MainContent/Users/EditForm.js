import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const EditForm = () => {
    const navigate= useNavigate();
    const [editUser, setEditUser] = useState(
        {
            name: '',
            username: '',
            phone: '',
            email: '',
        }
    );

    useEffect(()=>{
        const user = localStorage.getItem('edit-user');
        setEditUser(JSON.parse(user));
        console.log(editUser);
    },[]);

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editUser };
        newFormData[fieldName] = fieldValue;

        setEditUser(newFormData);

    };

    console.log(['field change:', editUser]);
    
    // function: save new user
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const editedUser = {
            name: editUser.name,
            userName: editUser.userName,
            phone: editUser.phone,
            email: editUser.email
        }

        axios.post('https://jsonplaceholder.typicode.com/posts/', editedUser).then(response => {
            console.log(response);
            setEditUser({
                name: '',
                userName: '',
                phone: '',
                email: '',
            });
            swal("تغییرات با موفقیت انجام شد.", {
                icon: "success",
            }).then(
                navigate('/users')
            );
        });
    };

    const handleCancelButton = ()=>{
        setEditUser();
        navigate('/users');
    }

    return (
        <section className='py-6 sm:p-5'>
            <div dir='ltr' className='my-6 ml-14 sm:m-5'>
                <Link to="/users" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 hover:bg-gray-50 sm:text-xs'>
                    بازگشت
                </Link>
            </div>

            <form onSubmit={handleFormSubmit}>
                <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs' > نام</label>
                    <input type="text" className='border border-slate-900 rounded-md sm:h-8' name='name'
                        onChange={handleFormChange}
                        value={editUser.name}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs'> نام کاربری</label>
                    <input type="text" className='border border-slate-900 rounded-md sm:h-8' name='username'
                        onChange={handleFormChange}
                        value={editUser.username}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs'> شماره تماس</label>
                    <input type="text" className='border border-slate-900 rounded-md sm:h-8' name='phone'
                        onChange={handleFormChange}
                        value={editUser.phone}
                    ></input>
                </div>

                <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs'> ایمیل</label>
                    <input type="email" className='border border-slate-900 rounded-md sm:h-8' name='email'
                        onChange={handleFormChange}
                        value={editUser.email}
                    ></input>
                </div>

                <div className='my-10 w-2/4 sm:flex' dir='ltr'>
                    <input type='reset' value='کنسل' onClick={handleCancelButton}
                        className='text-xl px-5 py-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                    <input type='submit' value='ذخیره ی تغییرات'
                        className='text-xl px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                </div>
            </form>
        </section>

    );
}

export default EditForm;
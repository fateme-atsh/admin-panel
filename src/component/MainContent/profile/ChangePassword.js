import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const ChangePassword = () => {
    const [password, setPassword] = useState({
        oldpass: '',
        newpass: ''
    });

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...password };
        newFormData[fieldName] = fieldValue;

        setPassword(newFormData);
    };

    console.log(['field change:', password]);

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const editPassword = {
            oldpass: password.oldpass,
            newpass: password.newpass
        };
        axios.post('https://mytestapi.free.beeceptor.com/updatepassword', editPassword).then(response => {
            console.log(response);
            swal("تغییرات با موفقیت انجام شد.", {
                icon: "success"
            }).then(
                setPassword({
                    oldpass: '',
                    newpass: ''
                })
            )
        });
    }

    const handleCancleButton = () => {
        setPassword({
            oldpass: '',
            newpass: ''
        });
    }

    return (
        <div className='bg-white m-5 border rounded-md sm:m-0'>
            <form onSubmit={handleSubmitForm}>
                <div className='mx-10 my-5 grid grid-cols-2 sm:grid-cols-1'>
                    <label className='mx-4'>لطفا رمزعبور "فعلی" را وارد کنید:</label>
                    <input onChange={handleFormChange}
                        type='text' className='border rounded-md sm:my-2' name='oldpass'></input>
                </div>

                <div className='mx-10 my-5 grid grid-cols-2 sm:grid-cols-1'>
                    <label className='mx-4'>لطفا رمزعبور "جدید" را وارد کنید:</label>
                    <input onChange={handleFormChange}
                        type='text' className='border rounded-md sm:my-2' name='newpass'></input>
                </div>

                <div className='mx-10 my-5 grid grid-cols-2'>
                    <input type='submit' value='تغییر رمز عبور' className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer sm:p-2' />

                    <input type='reset' value='کنسل' onClick={handleCancleButton}
                        className='bg-gray-500 border rounded-md text-white px-5 py-3 mx-4 hover:bg-gray-600 cursor-pointer sm:p-2' />
                </div>

            </form>
        </div>
    );
}

export default ChangePassword;
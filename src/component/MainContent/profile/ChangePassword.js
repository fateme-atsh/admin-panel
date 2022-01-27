import React from 'react';

const ChangePassword = ({...props}) => {
    return (
        <div className='bg-white m-5 border rounded-md'>
            <form>
                <div className='mx-10 my-5 grid grid-cols-2'>
                    <label className='mx-4'>لطفا رمزعبور "فعلی" را وارد کنید:</label>
                    <input type='text' className='border rounded-md' name='oldPass'></input>
                </div>

                <div className='mx-10 my-5 grid grid-cols-2'>
                    <label className='mx-4'>لطفا رمزعبور "جدید" را وارد کنید:</label>
                    <input type='text' className='border rounded-md' name='newPass'></input>
                </div>

                <div className='mx-10 my-5 grid grid-cols-2'>
                    <input type='submit' value='تغییر رمز عبور' className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer' />

                    <input type='reset' value='کنسل'
                        className='bg-gray-500 border rounded-md text-white px-5 py-3 mx-4 hover:bg-gray-600 cursor-pointer' />
                </div>

            </form>
        </div>
    );
}

export default ChangePassword;
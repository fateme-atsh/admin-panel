import React from 'react';

const EditProfile = ({ ...props }) => {

    return (

        <form className='bg-white m-5 border rounded-md'
            onSubmit={(event) => props.handleSaveEditedForm(event,props)}>

            <div className='mx-10 my-5 grid grid-cols-2'>
                <label className='mx-4'>نام :</label>
                <input type='text' className='border rounded-md' name='name'
                    value={props.editProfile.name}
                    onChange={props.handleFormChange} ></input>
            </div>

            <div className='mx-10 my-5 grid grid-cols-2'>
                <label className='mx-4'>نام خانوادگی :</label>
                <input type='text' className='border rounded-md' name='last'
                    value={props.editProfile.last}
                    onChange={props.handleFormChange} ></input>
            </div>

            <div className='mx-10 my-5 grid grid-cols-2'>
                <label className='mx-4'>ایمیل :</label>
                <input type='text' className='border rounded-md' name='email'
                    value={props.editProfile.email}
                    onChange={props.handleFormChange}
                    dir='ltr'></input>
            </div>

            <div className='mx-10 my-5 grid grid-cols-2'>
                <label className='mx-4'> تلفن همراه :</label>
                <input type='text' className='border rounded-md' name='phone'
                    value={props.editProfile.phone}
                    onChange={props.handleFormChange}
                    dir='ltr' />
            </div>

            <div dir='ltr' className='my-12 mx-4'>
                <button type='reset'
                    onClick={props.handleCancelEdditing}
                    className='bg-gray-500 border rounded-md text-white px-5 py-3 mx-4 hover:bg-gray-600 cursor-pointer' >
                    کنسل
                </button>
                <button type="submit" 
                className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer' >
                    ذخیره ی تغییرات
                </button>
            </div>

        </form>

    )
}


export default EditProfile;
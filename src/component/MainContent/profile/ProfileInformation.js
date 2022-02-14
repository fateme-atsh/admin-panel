import React from 'react';

const ProfileInfo = ({...props}) => {
    return ( 
        <form className='bg-white m-5 border rounded-md sm:m-0'
        onSubmit={(event) => props.handleSaveEditedForm(event)}>

        <div className='mx-10 my-5 grid grid-cols-2'>
            <label className='mx-4'>نام :</label>
            <input type='text' className='' name='name'
                value={props.name}
                />
        </div>

        <div className='mx-10 my-5 grid grid-cols-2'>
            <label className='mx-4'>نام خانوادگی :</label>
            <input type='text' className='' name='last'
                value={props.last}
                />
        </div>

        <div className='mx-10 my-5 grid grid-cols-2'>
            <label className='mx-4'>ایمیل :</label>
            <input type='text' className='' name='email'
                value={props.email}
                />
        </div>

        <div className='mx-10 my-5 grid grid-cols-2' >
            <label className='mx-4'> تلفن همراه :</label>
            <input type='text' className='' name='phone'    
                value={props.phone}
                />
        </div>

        <div dir='ltr' className='my-12 mx-4'>
            <button type="button" 
            className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer sm:p-2'
            onClick={(event)=> props.handleEditProfile(event,props)} >
                تغییر اطلاعات
            </button>
        </div>

    </form>
     );
}
 
export default ProfileInfo;
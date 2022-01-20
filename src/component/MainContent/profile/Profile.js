import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProfileLocalStorage } from '../../../context/ProfileLocalStorage';

const Profile = () => {
    const localData = useContext(ProfileLocalStorage);
    const [user, setUser] = useState([]);
    const [EditProfile, setEditProfile] = useState(
        {
            name: '',
            lastName: '',
            email: '',
            phone: '',
        }
    );
    const [userId, setUserId] = useState();

    // save data on localstorage, in component state
    useEffect(() => {
        const data = [...localData];
        setUser(data);

        // save user's data in state for changes
        setEditProfile(data);
    }, [localData]);

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...EditProfile };
        newFormData[fieldName] = fieldValue;

        setEditProfile(newFormData);

    };
    console.log(['field change:', EditProfile]);

    // function: save EDITED informations
    const handleSaveEditedForm = (event, user) => {
        event.preventDefault();
        const id = user.id;
        console.log(id);

        const editedUser = {
            name: EditProfile.name,
            lastName: EditProfile.lastName,
            phone: EditProfile.phone,
            email: EditProfile.email,
        };

        const newUser = [...user];

        const index = user.findIndex((user) => user.id === userId);
        newUser[index] = editedUser;

        setUser(newUser);

        // axios.put(`https://randomuser.me/api/?format=JSON/${userId}`, editedUser)
        //     .then(res => { console.log(res) });
    };

    return (
        <section className='flex my-10'>
            {user !== [] ?
                <>
                    {user.map((user) => (
                        <Fragment>
                            <div className='bg-white w-1/3 m-5 grid justify-center border rounded-md'>
                                <div className='grid justify-center'>
                                    <img src={user.picture.large} alt="user" className='rounded-full mx-3 my-5' />
                                </div>
                                <h4 className='m-3 text-center text-lg font-semibold'>{user.name.first} {user.name.last}</h4>
                                <p className='text-xs text-justify py-2 px-5' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            </div>

                            <form className='bg-white w-2/3 m-5 border rounded-md'
                                onSubmit={(event) => handleSaveEditedForm(event, user)}>

                                <div className='mx-10 my-5 grid grid-cols-2'>
                                    <label className='mx-4'>نام :</label>
                                    <input type='text' className='border rounded-md' name='name'
                                        placeholder={user.name.first}
                                        onChange={handleFormChange} ></input>
                                </div>

                                <div className='mx-10 my-5 grid grid-cols-2'>
                                    <label className='mx-4'>نام خانوادگی :</label>
                                    <input type='text' className='border rounded-md' name='lastName'
                                        placeholder={user.name.last}
                                        onChange={handleFormChange} ></input>
                                </div>

                                <div className='mx-10 my-5 grid grid-cols-2'>
                                    <label className='mx-4'>ایمیل :</label>
                                    <input type='text' className='border rounded-md' name='email'
                                        value={user.email}
                                        onChange={handleFormChange} ></input>
                                </div>

                                <div className='mx-10 my-5 grid grid-cols-2'>
                                    <label className='mx-4'> تلفن همراه :</label>
                                    <input type='text' className='border rounded-md' name='phone'
                                        placeholder={user.phone}
                                        onChange={handleFormChange} ></input>
                                </div>

                                <div dir='ltr' className='my-12 mx-4'>
                                    <input type='reset' value='کنسل' className='bg-gray-500 border rounded-md text-white px-5 py-3 mx-4 hover:bg-gray-600 cursor-pointer' />
                                    <input type="submit" value='ذخیره ی تغییرات' className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer' />
                                </div>

                            </form>
                        </Fragment>
                    ))}
                </>
                :
                <h2 className='font-bold'>
                    متاسفانه اطلاعات شما یافت نشد.
                </h2>
            }

        </section>
    );
}

export default Profile;
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ProfileLocalStorage } from '../../../context/ProfileLocalStorage';

const Profile = () => {
    const localData = useContext(ProfileLocalStorage);
    const [user, setUser] = useState([]);

    // save data on localstorage, in component state
    useEffect(() => {
        const data = [...localData];
        setUser(data);
        console.log(data);
    }, [localData]);
    console.log(user)

    return (
        <section className='flex'>
            {user !== [] ?

                <>

                    {user.map((user) => (
                        <Fragment>
                            <div className='bg-white w-1/3 m-5 grid justify-center border rounded-md'>
                                <div className='grid justify-center'>
                                <img src={user.picture.large} className='rounded-full mx-3 my-5' />
                                </div>                          
                                <h4 className='m-3 text-center text-lg font-semibold'>{user.name.first} {user.name.last}</h4>
                                <p className='text-xs text-justify py-2 px-5' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            </div>

                            <div className='bg-white w-2/3 m-5 border rounded-md'>
                                <form>
                                    <div className='mx-10 my-5 grid grid-cols-2'>
                                        <label className='mx-4'>نام :</label>
                                        <input type='text' value={user.name.first} className='border rounded-md' />
                                    </div>

                                    <div className='mx-10 my-5 grid grid-cols-2'>
                                        <label className='mx-4'>نام خانوادگی :</label>
                                        <input type='text' value={user.name.last} className='border rounded-md' />
                                    </div>

                                    <div className='mx-10 my-5 grid grid-cols-2'>
                                        <label className='mx-4'>ایمیل :</label>
                                        <input type='text' value={user.email} className='border rounded-md' />
                                    </div>

                                    <div className='mx-10 my-5 grid grid-cols-2'>
                                        <label className='mx-4'> تلفن همراه :</label>
                                        <input type='text' value={user.phone} className='border rounded-md' />
                                    </div>

                                    <div dir='ltr' className='my-12 mx-4'>                                        
                                        <input type='reset' value='کنسل' className='bg-gray-500 border rounded-md text-white px-5 py-3 mx-4 hover:bg-gray-600 cursor-pointer' />
                                        <input type="submit" value='ذخیره ی تغییرات' className='bg-blue-500 border rounded-md text-white px-5 py-3 hover:bg-blue-600 cursor-pointer' />
                                    </div>

                                </form>
                            </div>
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
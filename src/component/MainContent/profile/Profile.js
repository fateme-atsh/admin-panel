import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProfileLocalStorage } from '../../../context/ProfileLocalStorage';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import ProfileInfo from './ProfileInformation';

const Profile = () => {
    const localData = useContext(ProfileLocalStorage);
    const [user, setUser] = useState([]);
    const [editProfile, setEditProfile] = useState({
        name: '',
        last: '',
        email: '',
        phone: '',
    });

    // uses for editting data.
    const [userId, setUserId] = useState(null);

    // save data on localstorage, in component state
    useEffect(() => {
        const data = [...localData];
        setUser(data);

        // save user's data in state for changes
        setEditProfile(user);
    }, [localData]);

    console.log(userId);

    //when user clicked the edit button
    const handleEditProfile = (event, user) => {
        event.preventDefault();
        setUserId(user.id);
        console.log(user.id);

        const editedValues = {
            name: user.name,
            last: user.last,
            email: user.email,
            phone: user.phone,
        };
        setEditProfile(editedValues);
        console.log(userId);
    };

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editProfile };
        newFormData[fieldName] = fieldValue;

        setEditProfile(newFormData);
        console.log(['field change:', editProfile]);

    };

    // function: save EDITED informations
    const handleSaveEditedForm = (event, props) => {
        event.preventDefault();
        const id = props.id;
        console.log(id);

        const editedUser = {
            name: editProfile.name,
            last: editProfile.last,
            phone: editProfile.phone,
            email: editProfile.email,
        };
        console.log(editProfile);

        const newUser = { ...user };

        const index = user.findIndex((user) => user.id.value === id);
        console.log(index)
        newUser[index] = editedUser;

        setUser(editedUser);

        axios.put(`https://randomuser.me/api/${id}`, editedUser)
            .then(res => { console.log(res) });
    };

    // function: cancel editting
    const handleCancelEdditing = (event) => {
        event.preventDefault();
        setUserId(null);
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

                            <div className='w-2/3'>
                                {userId !== null ?
                                    <EditProfile
                                        id={user.id.value}
                                        handleFormChange={handleFormChange}
                                        handleSaveEditedForm={handleSaveEditedForm}
                                        handleCancelEdditing={handleCancelEdditing}
                                        editProfile={editProfile}
                                    />
                                    :
                                    <ProfileInfo
                                        id={user.id.value}
                                        name={user.name.first}
                                        last={user.name.last}
                                        email={user.email}
                                        phone={user.phone}
                                        handleEditProfile={handleEditProfile}
                                    />
                                }
                                <ChangePassword

                                />
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
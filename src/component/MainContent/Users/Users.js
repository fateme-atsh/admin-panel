import React, { useState, useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { UsersLocalStorage } from '../../../context/UsersLocalStorage';
import { useNavigate } from 'react-router';
import ShowUsersTable from './ShowTable';
import EditForm from './EditForm';

const Users = () => {
    const localData = useContext(UsersLocalStorage);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [editTableRows, setEditTableRows] = useState({
        id: '',
        name: '',
        username: '',
        email: '',
        phone: '',
    }
    );

    // save data on localstorage, in component state
    useEffect(() => {
        setUsers(localData);
    }, [localData]);

    //rowId uses for editting the row data.
    const [userId, setUserId] = useState(null);

    // function: delete users
    const handleDeleteRows = (event, props) => {
        event.preventDefault();

        const id = props.id;
        const username = props.username;
        console.log(id);

        swal({
            title: ` آیا میخواهید کاربر"${username}" را حذف کنید؟`,
            text: " در صورت حذف امکان برگشت اطلاعات وجود ندارد!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
                        console.log(res);
                        setUsers(users.filter(props => props.id !== id));
                        swal("کاربر با موفقیت حذف شد.", {
                            icon: "success",
                        });
                    });
                } else {
                    swal("عملیات حذف کاربر، کنسل شد.");
                }
            });
    };

    //when user clicked the edit button in a row
    const editClick = (event, props) => {
        event.preventDefault();
        console.log(props.id);

        const editedValues = {
            id: props.id,
            name: props.name,
            username: props.username,
            email: props.email,
            phone: props.phone,
        };
        localStorage.setItem('edit-user', JSON.stringify(editedValues));
        navigate('/edit-form')
    };

    return (
        <section className='sm:text-xs sm:w-full sm:px-12 md:text-sm'>
            <table className='mx-10 my-5 w-11/12 scrollbar-thin scrollbar-thumb-gray-500
            sm:w-full sm:overflow-x-scroll sm:block sm:m-5
            md:w-full md:overflow-x-scroll md:block md:mx-2'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2 sm:p-1'>نام</th>
                        <th className='py-4 px-2 sm:p-1'>نام کاربری</th>
                        <th className='py-4 px-2 sm:p-1'>شماره تماس</th>
                        <th className='py-4 px-2 sm:p-1'>ایمیل</th>
                        <th className='py-4 px-2 sm:p-1'>ویرایش</th>
                        <th className='py-4 px-2 sm:p-1'>حذف</th>
                    </tr>
                </thead>

                {users !== [] ?
                    <tbody>
                        {users.map((user) => (
                            <Fragment>
                                <ShowUsersTable
                                    key={user.id}
                                    name={user.name}
                                    username={user.username}
                                    email={user.email}
                                    phone={user.phone}
                                    editClick={editClick}
                                    handleDeleteRows={handleDeleteRows}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                    :
                    <tbody className='text-black'>
                        <tr>
                            خطا.
                        </tr>
                    </tbody>
                }
            </table>
        </section>
    );
}

export default Users;
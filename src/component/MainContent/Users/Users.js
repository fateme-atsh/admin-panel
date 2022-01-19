import React, { useState, useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { UsersLocalStorage } from '../../../context/UsersLocalStorage';
import UsersTable from './ShowTable';

const Users = () => {
    const localData = useContext(UsersLocalStorage);
    const [users, setUsers] = useState([]);

    // save data on localstorage, in component state
    useEffect(() => {
        setUsers([...localData]);
    }, [localData]);

    //rowId uses for editting the row data.
    const [rowId, setRowId] = useState(null);

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

    return (
        <section>

            <table className='mx-10 my-5 w-11/12 text-black'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2'>نام</th>
                        <th className='py-4 px-2'>نام کاربری</th>
                        <th className='py-4 px-2'>شماره تماس</th>
                        <th className='py-4 px-2'>ایمیل</th>
                        <th className='py-4 px-2'>حذف</th>
                    </tr>
                </thead>

                {users !== [] ?
                    <tbody>
                        {users.map((user) => (
                            <Fragment>
                                <UsersTable
                                    id={user.id}
                                    name={user.name}
                                    username={user.username}
                                    email={user.email}
                                    phone={user.phone}
                                    handleDeleteRows={handleDeleteRows}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                    :
                    <tbody className='text-black'>
                        <tr>
                            err.
                        </tr>
                    </tbody>
                }
            </table>
        </section>
    );
}

export default Users;
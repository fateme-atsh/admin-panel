import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import ShowTables from './ShowTables';
import { TablesLocalStorage } from '../../../context/TablesLocalStorage'

const Tables = () => {
    const localData = useContext(TablesLocalStorage);
    const [tables, setTables] = useState([]);

    // save data on localstorage, in component state
    useEffect(() => {
        setTables([...localData]);
    }, [localData]);

    // function: delete users
    const handleDeleteRows = (event, props) => {
        event.preventDefault();

        const id = props.id;
        const table = props.tableNumb;
        console.log(id);

        swal({
            title: ` آیا میخواهید میز"${table}" را حذف کنید؟`,
            text: " در صورت حذف امکان برگشت اطلاعات وجود ندارد!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
                        console.log(res);
                        setTables(tables.filter(props => props.id !== id));
                        swal("میز با موفقیت حذف شد.", {
                            icon: "success",
                        });
                    });
                } else {
                    swal("عملیات حذف میز، کنسل شد.");
                }
            });
    };


    return (
        <section className=''>
            <div dir='ltr' className='my-6 ml-14'>
                <Link to="/new-table" className='bg-blue-500 text-white font-bold text-lg rounded-md px-3 py-2 hover:bg-blue-600'>
                    اضافه کردن میز
                </Link>
            </div>

            <table className='mx-10 my-5 w-11/12 text-black'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2'>شماره میز</th>
                        <th className='py-4 px-2'>ظرفیت</th>
                        <th className='py-4 px-2'>تاریخ</th>
                        <th className='py-4 px-2'>ساعت</th>
                        <th className='py-4 px-2'>وضعیت رزرو</th>
                        <th className='py-4 px-2'>نام رزرو کننده</th>
                        <th className='py-4 px-2'>شماره تماس رزرو کننده</th>
                        <th className='py-4 px-2'>ویرایش</th>
                        <th className='py-4 px-2'>حذف</th>
                    </tr>
                </thead>

                {tables !== [] ?
                    <tbody>
                        {tables.map((table) => (
                            <Fragment>
                                <ShowTables
                                    id={table.id}
                                    tableNumb={table.tableNumb}
                                    people={table.people}
                                    date={table.date}
                                    startOfBooking={table.startOfBooking}
                                    endOfBooking={table.endOfBooking}
                                    user={table.user}
                                    userPhone={table.userPhone}
                                    handleDeleteRows={handleDeleteRows}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                    :
                    <tbody className='text-red-700 text-3xl font-extrabold'>
                        اطلاعات یافت نشد!
                    </tbody>
                }
            </table>
        </section>
    );
}

export default Tables;
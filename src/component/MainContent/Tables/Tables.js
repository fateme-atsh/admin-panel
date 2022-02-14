import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import ShowTables from './ShowTables';
import { TablesLocalStorage } from '../../../context/TablesLocalStorage'

const Tables = () => {
    const navigate = useNavigate();
    const localData = useContext(TablesLocalStorage);
    const [tables, setTables] = useState([]);
    const [newTable, setNewTable] = useState({
        tableNumb: '',
        people: '',
    })

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
    //rowId uses for editting the row data.
    const [userId, setUserId] = useState(null);

    //when user clicked the edit button in a row
    const editClick = (event, props) => {
        event.preventDefault();
        setUserId(props.id);
        console.log(props.id);

        const editedValues = {
            tableNumb: props.tableNumb,
            people: props.people,
        };
        localStorage.setItem('edit-table', JSON.stringify(editedValues));
        navigate('/new-table')
    };

    const calendarClick = (event, props) => {
        event.preventDefault();
        setUserId(props.id);
        console.log(props.id);

        const editedValues = {
            tableNumb: props.tableNumb,
            people: props.people,
        };
        localStorage.setItem('edit-table', JSON.stringify(editedValues));
        navigate('/tables/calendar')
    };

    return (
        <section className=''>
            <div dir='ltr' className='my-6 ml-14 sm:m-5'>
                <Link to="/new-table" className='bg-blue-500 text-white font-bold text-lg rounded-md px-3 py-2 hover:bg-blue-600 sm:text-xs'>
                    اضافه کردن میز
                </Link>
            </div>
            <div className='sm:text-xs sm:w-full sm:px-12 md:text-sm'>
                <table className='mx-10 my-5 w-11/12
            scrollbar-thin scrollbar-thumb-gray-500
            sm:w-full sm:overflow-x-scroll sm:block sm:m-5
            md:w-full md:overflow-x-scroll md:block md:mx-2'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-4 px-2 sm:p-1'>شماره میز</th>
                            <th className='py-4 px-2 sm:p-1'>ظرفیت</th>
                            <th className='py-4 px-2 sm:p-1'>تاریخ</th>
                            <th className='py-4 px-2 sm:p-1'>ویرایش</th>
                            <th className='py-4 px-2 sm:p-1'>حذف</th>
                        </tr>
                    </thead>

                    {tables !== [] ?
                        <tbody>
                            {tables.map((table, i) => (
                                <Fragment>
                                    <ShowTables key={i}
                                        id={table.id}
                                        tableNumb={table.tableNumb}
                                        people={table.people}
                                        date={table.date}
                                        startOfBooking={table.startOfBooking}
                                        endOfBooking={table.endOfBooking}
                                        handleDeleteRows={handleDeleteRows}
                                        editClick={editClick}
                                        calendarClick={calendarClick}
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
            </div>
        </section>
    );
}

export default Tables;
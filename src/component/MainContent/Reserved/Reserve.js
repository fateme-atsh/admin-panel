import React, { Fragment, useState, useContext, useEffect } from 'react';
import ReserveTable from './ReserveTable';
import { TablesLocalStorage } from '../../../context/TablesLocalStorage';

const Reserve = () => {
    const localData = useContext(TablesLocalStorage);
    const [tables, setTables] = useState([]);

    // save data on localstorage, in component state
    useEffect(() => {
        setTables([...localData]);
    }, [localData]);

    return (
        <section className='sm:text-xs sm:w-full sm:px-12 md:text-sm'>           
            <table className='mx-10 my-5 w-11/12 scrollbar-thin scrollbar-thumb-gray-500
            sm:w-full sm:overflow-x-scroll sm:block sm:m-5
            md:w-full md:overflow-x-scroll md:block md:mx-2'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2 sm:p-1'>شماره میز</th>
                        <th className='py-4 px-2 sm:p-1'>ظرفیت</th>
                        <th className='py-4 px-2 sm:p-1'>تاریخ</th>
                        <th className='py-4 px-2 sm:p-1'>ساعت</th>
                        <th className='py-4 px-2 sm:p-1'>نام رزروکننده</th>
                        <th className='py-4 px-2 sm:p-1'>شماره تماس رزروکننده</th>
                        <th className='py-4 px-2 sm:p-1'>وضعیت رزرو</th>
                        <th className='py-4 px-2 sm:p-1'>مدیریت رزرو ها</th>

                    </tr>
                </thead>

                {tables !== [] ?
                    <tbody>
                        {tables.map((table,i) => (
                            <Fragment>
                                <ReserveTable
                                    key={i}
                                    id={table.id}
                                    tableNumb={table.tableNumb}
                                    people={table.people}
                                    date={table.date}
                                    startOfBooking={table.startOfBooking}
                                    endOfBooking={table.endOfBooking}
                                    user={table.user}
                                    userPhone={table.userPhone}
                                    status={table.status}
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

export default Reserve;
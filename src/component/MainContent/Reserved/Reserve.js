import React,{Fragment, useState, useContext,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
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
        <section className=''>           
            <table className='mx-10 my-5 w-11/12 text-black'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2'>شماره میز</th>
                        <th className='py-4 px-2'>ظرفیت</th>
                        <th className='py-4 px-2'>تاریخ</th>
                        <th className='py-4 px-2'>ساعت</th>
                        <th className='py-4 px-2'>وضعیت رزرو</th>
                        <th className='py-4 px-2'>نام رزروکننده</th>
                        <th className='py-4 px-2'>شماره تماس رزروکننده</th>
                    </tr>
                </thead>

                {tables !== [] ?
                    <tbody>
                        {tables.map((table) => (
                            <Fragment>
                                <ReserveTable
                                    id={table.id}
                                    tableNumb={table.tableNumb}
                                    people={table.people}
                                    date={table.date}
                                    startOfBooking={table.startOfBooking}
                                    endOfBooking={table.endOfBooking}
                                    user={table.user}
                                    userPhone={table.userPhone}
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
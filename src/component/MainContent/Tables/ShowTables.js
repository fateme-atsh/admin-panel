import React from 'react';
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';

const ShowTables = ({ ...props }) => {

    return (
        <tr className='text-center odd:bg-gray-50 even:bg-white hover:bg-gray-200'>
            <td className='py-4 px-2'>{props.tableNumb}</td>
            <td className='py-4 px-2'>{props.people}</td>
            <td className='py-4 px-2'>{props.date}</td>
            <td className='py-4 px-2'>{props.startOfBooking}-{props.endOfBooking}</td>
            <td className='py-4 px-2 font-semibold'>
                {props.user !== ""
                    ? <h3 className='text-green-500'>رزرو شده</h3>
                    : <h3 className='text-gray-600'>رزرو نشده</h3>
                }
            </td>
            <td className='py-4 px-2'>{props.user}</td>
            <td className='py-4 px-2'>{props.userPhone}</td>
            <td className='py-4 px-2 text-green-700 hover:bg-green-200'>
                <button type="button" >
                    <Edit />
                </button>
            </td>
            <td className='py-4 px-2 text-red-600 hover:bg-red-200'>
                <button type="button" onClick={(event) => props.handleDeleteRows(event, props)}>
                    <Trash />
                </button>
            </td>
        </tr>
    );
}

export default ShowTables;
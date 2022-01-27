import React from 'react';
import Trash from '../../../icons/Trash';

const ReserveTable = ({ ...props }) => {

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
        </tr>
    );
}

export default ReserveTable ;
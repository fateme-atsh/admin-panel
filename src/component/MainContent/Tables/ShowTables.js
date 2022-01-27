import React from 'react';
import Calendar from '../../../icons/Calendar';
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';

const ShowTables = ({ ...props }) => {

    return (
        <tr className='text-center odd:bg-gray-50 even:bg-white hover:bg-gray-200'>
            <td className='py-4 px-2'>{props.tableNumb}</td>
            <td className='py-4 px-2'>{props.people}</td>
            
            <td className='py-4 px-2 text-violet-800 hover:bg-violet-200'>
                <button type="button" >
                    <Calendar />
                </button>
            </td>

            <td className='py-4 px-2 text-green-600 hover:bg-green-200'>
                <button type="button" >
                    <Edit/>
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
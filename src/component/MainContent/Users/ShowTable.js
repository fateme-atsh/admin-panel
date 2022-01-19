import React from 'react';
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';

const UsersTable = ({ ...props }) => {

    return (
        <tr className='text-center odd:bg-gray-50 even:bg-white hover:bg-gray-200'>
            <td className='py-4 px-2'>{props.name}</td>
            <td className='py-4 px-2' dir='ltr'>{props.username}</td>
            <td className='py-4 px-2' dir='ltr'>{props.phone}</td>
            <td className='py-4 px-2' dir='ltr'>{props.email}</td>
            <td className='py-4 px-2 text-red-600 hover:bg-red-200'>
                <button type="button" onClick={(event) => props.handleDeleteRows(event,props)}>
                    <Trash />
                </button>
            </td>
        </tr>
    );
}

export default UsersTable;
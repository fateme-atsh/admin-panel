import React,{useContext, useState, useEffect} from 'react';
import { UsersLocalStorage } from '../../../context/UsersLocalStorage';
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';

const ShowUsersTable = ({ ...props }) => {


    return (
        <tr className='text-center odd:bg-gray-50 even:bg-white hover:bg-gray-200'>
            <td className='py-4 px-2 sm:p-1'>{props.name}</td>
            <td className='py-4 px-2 sm:p-1' dir='ltr'>{props.username}</td>
            <td className='py-4 px-2 sm:p-1' dir='ltr'>{props.phone}</td>
            <td className='py-4 px-2 sm:p-1' dir='ltr'>{props.email}</td>
            <td className='py-4 px-2 text-green-600 hover:bg-green-200 sm:p-1'>
                <button type="button" onClick={(event) => props.editClick(event, props)} >
                    <Edit />
                </button>
            </td>
            <td className='py-4 px-2 text-red-600 hover:bg-red-200 sm:p-1'>
                <button type="button" onClick={(event) => props.handleDeleteRows(event,props)}>
                    <Trash />
                </button>
            </td>
        </tr>
    );
}

export default ShowUsersTable;
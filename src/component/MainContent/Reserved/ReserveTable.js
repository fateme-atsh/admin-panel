import React, { useState } from 'react';
import swal from 'sweetalert';

const ReserveTable = ({ ...props }) => {
    const [reserve, setReserve] = useState('')
    const [checkboxDefault, setCheckboxDefault] = useState(null);
    const [rowId, setRowId] = useState([]);

    // const handlechangeChecked = (event, props) => {
    //     setCheckboxDefault(!checkboxDefault);
    //     let id = props.id;
    //     if (checkboxDefault === true) { console.log(id) };
    //     setRowId.push(id);

    // }

    const handleAcceptReserve = () => {
        setCheckboxDefault(!checkboxDefault);
        let id = props.id;
        swal(`${id}`, {
            title: 'تایید رزرو',
            text: " در صورت تایید امکان تغییر اطلاعات وجود ندارد!",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                setReserve('تایید شده')
                swal(`${id}`, {
                    text: 'رزرو تایید شد',
                    icon: "success",
                })
            }
        }
        );

    }
    console.log(checkboxDefault);
    console.log(rowId);

    const handleRejectReserve = () => {
        setCheckboxDefault(!checkboxDefault);
        let id = props.id;
        swal(`${id}`, {
            title: 'رد رزرو',
            text: " در صورت تایید امکان تغییر اطلاعات وجود ندارد!",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                setReserve('رد شده')
                swal({
                    text: 'رزرو رد شد',
                    icon: "error",
                })
            }
        });
    }

    return (
        <>{props.user !== ''
            ? <tr className='text-center odd:bg-gray-50 even:bg-white hover:bg-gray-200'>
                <td className='py-4 px-2 sm:p-1'>{props.tableNumb}</td>
                <td className='py-4 px-2 sm:p-1'>{props.people}</td>
                <td className='py-4 px-2 sm:p-1'>{props.date}</td>
                <td className='py-4 px-2 sm:p-1'>{props.startOfBooking}-{props.endOfBooking}</td>
                <td className='py-4 px-2 sm:p-1'>{props.user}</td>
                <td className='py-4 px-2 sm:p-1'>{props.userPhone}</td>
                <td className='py-4 px-2 font-semibold sm:p-1'>
                    {props.status !== ""
                        ? <>
                            {props.status === 'تایید شده'
                                ? <h3 className='text-green-600'>{props.status}</h3>
                                : <h3 className='text-red-600'>{props.status}</h3>
                            }
                        </>
                        : <h3 className='text-gray-400'>در حال انتظار...</h3>
                    }
                </td>
                <td className='py-4 px-2 sm:p-1'>
                    <button type='button' onClick={handleAcceptReserve}
                        disabled={props.status !== '' ? 'disabled' : false}
                        className='bg-blue-500 text-white text-sm rounded-md px-3 py-2 m-5
                     hover:bg-blue-600
                     disabled:bg-gray-400 disabled:hover:bg-gray-400
                     sm:text-xs sm:p-1 sm:m-1'>
                        تایید رزرو
                    </button>

                    <button type='button' onClick={handleRejectReserve}
                        disabled={props.status !== '' ? 'disabled' : false}
                        className='bg-red-500 text-white text-sm rounded-md px-2 py-2 m-2
                    hover:bg-red-600
                    disabled:bg-gray-400 disabled:hover:bg-gray-400
                    sm:text-xs sm:p-1 sm:m-1'>
                        رد رزرو
                    </button>
                </td>
            </tr>
            : null
        }
        </>
    );
}

export default ReserveTable;
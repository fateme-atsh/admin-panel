import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const NewTable = () => {
    const navigate = useNavigate();
    const [newTable, setNewTable] = useState(
        {
            tableNumb: '',
            people: '',
        }
    );

    useEffect(() => {
            const table = localStorage.getItem('edit-table');
            setNewTable(JSON.parse(table));
            console.log(newTable);
    }, []);

    // when the form's field change, this fucntion called
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...newTable };
        newFormData[fieldName] = fieldValue;

        setNewTable(newFormData);

    };
    console.log(['field change:', newTable]);

    // function: save new table OR save edited table data
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const Table = {
            tableNumb: newTable.tableNumb,
            people: newTable.people,
        };

        axios.post('https://jsonplaceholder.typicode.com/posts/', Table).then(response => {
            console.log(response);
            setNewTable({
                tableNumb: '',
                people: '',
            });
            swal("تغییرات با موفقیت انجام شد.", {
                icon: "success",
            }).then(
                navigate('/tables')
            );
        });
    };

    const handleCancelButton = () => {
        setNewTable();
        localStorage.setItem('edit-table', newTable);
        navigate('/tables');
    }

    return (
        <section className='sm:p-5'>
            <div dir='ltr' className='my-6 ml-14 sm:m-5'>
                <Link to="/tables" className='bg-white text-blue-500 font-bold text-lg border-2 border-blue-500 rounded-md px-3 py-2 hover:bg-gray-50 sm:text-xs'>
                    بازگشت
                </Link>
            </div>
            <form onSubmit={handleFormSubmit}>

                <div className='my-5 grid grid-cols-4 sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs' > شماره میز</label>
                    {newTable.tableNumb !== ''
                        ? <input type="number" className='border border-slate-900 rounded-md sm:h-8' name='tableNumb'
                            value={newTable.tableNumb}
                            onChange={handleFormChange}></input>
                        : <input type="number" className='border border-slate-900 rounded-md sm:h-8' name='tableNumb'

                            onChange={handleFormChange}></input>}
                </div>

                <div className='my-5 grid grid-cols-4  sm:grid-cols-1'>
                    <label className='mx-8 text-xl font-semibold sm:mx-1 sm:text-xs'> ظرفیت</label>
                    {newTable.people !== ''
                        ? <input type="number" className='border border-slate-900 rounded-md sm:h-8' name='tableNumb'
                            value={newTable.people}
                            onChange={handleFormChange}></input>
                        : <input type="number" className='border border-slate-900 rounded-md sm:h-8' name='people'
                            onChange={handleFormChange}></input>}
                </div>

                < div className='my-10 pl-8 w-2/4 sm:flex' dir='ltr'>
                    <input type='reset' value='کنسل' onClick={handleCancelButton}
                        className='text-xl px-5 py-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                    <input type='submit' value='ذخیره'
                        className='text-xl px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs sm:p-2' />

                </div>
            </form>
        </section >
    );
}

export default NewTable;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users/Users';
import Tables from './Tables/Tables';
import Profile from './profile/Profile';
import NewTable from './Tables/NewTable';
import Reserve from './Reserved/Reserve';
import EditForm from './Users/EditForm';
import Calendar from './Tables/Calendar/Calendar';
import NewDate from './Tables/Calendar/NewDate';


const Main = () => {
    return (
        <main className='h-screen overflow-y-auto overflow-x-hidden sm:text-xs md:text-sm sm:w-screen'>
            <Routes>
                <Route index element={
                    <div className='mt-20 mb-24 mx-10 sm:m-5'>
                        <h2 className='text-2xl font-bold my-5 sm:text-md md:text-md'>
                            به پنل کاربری خوش آمدید.
                        </h2>
                        <p>
                            برای شروع از منوی سمت راست گزینه ی مورد نظر را انتخاب کنید.
                        </p>
                    </div>
                } />
                <Route path="/users" element={<Users />} />
                <Route path="/edit-form" element={<EditForm />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/tables/calendar" element={<Calendar />} />
                <Route path='/tables/calendar/new-date' element={<NewDate />} />
                <Route path="/new-table" element={<NewTable />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </main>

    );
}

export default Main;
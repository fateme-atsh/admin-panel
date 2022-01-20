import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users/Users';
import Logout from './Logout';
import Tables from './Tables/Tables';
import Profile from './profile/Profile';
import NewTable from './Tables/NewTable';


const Main = () => {
    return (
        <main>
            <Routes>
                <Route index element={
                    <div className='mt-20 mb-24 mx-10'>
                        <h2 className='text-2xl font-bold my-5'>
                            به پنل کاربری خوش آمدید.
                        </h2>
                        <p>
                            برای شروع از منوی سمت راست گزینه ی مورد نظر را انتخاب کنید.
                        </p>
                    </div>
                } />
                <Route path="/users" element={<Users />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/new-table" element={<NewTable />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </main>

    );
}

export default Main;
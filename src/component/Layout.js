import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersLocalStorageProvider from '../context/UsersLocalStorage';
import TablesLocalStorageProvider from '../context/TablesLocalStorage';
import ProfileLocalStorageProvider from '../context/ProfileLocalStorage';
import Nav from './NavBar/Nav';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Main from './MainContent/Main';
import BtnLogicContextProvider from '../context/BtnLogicContext';
import Register from './Registration/Registration';


const Layout = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        setUser(localStorage.getItem('user-info'));
    },[user]);


    return (
        <div className='flex min-h-screen bg-gray-100 overflow-x-hidden relative sm:text-xs md:text-sm'>
            <BrowserRouter>
                {user ?
                    <ProfileLocalStorageProvider>
                        <UsersLocalStorageProvider>
                            <TablesLocalStorageProvider>
                                <BtnLogicContextProvider>
                                    <Nav />
                                    <section className='flex-1'>
                                        <Header />
                                        <Main />
                                        <Footer />
                                    </section>
                                </BtnLogicContextProvider>
                            </TablesLocalStorageProvider>
                        </UsersLocalStorageProvider>
                    </ProfileLocalStorageProvider>
                    
                    : <Register/>}

            </BrowserRouter >
        </div>
    );
}

export default Layout;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UsersLocalStorageProvider from '../context/UsersLocalStorage';
import TablesLocalStorageProvider from '../context/TablesLocalStorage';
import ProfileLocalStorageProvider from '../context/ProfileLocalStorage';
import Nav from './NavBar/Nav';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Main from './MainContent/Main';
import BtnLogicContextProvider from '../context/BtnLogicContext';


const Layout = () => {

    return (
        <div className='flex min-h-screen bg-gray-100 overflow-x-hidden'>
            <BrowserRouter>
                <ProfileLocalStorageProvider>
                    <UsersLocalStorageProvider>
                        <TablesLocalStorageProvider>
                            <BtnLogicContextProvider>
                            <Nav/>
                            <section className='flex-1'>
                                <Header/>
                                <Main/>
                                <Footer />
                            </section>
                            </BtnLogicContextProvider>
                        </TablesLocalStorageProvider>
                    </UsersLocalStorageProvider>
                </ProfileLocalStorageProvider>
            </BrowserRouter >
        </div>
    );
}

export default Layout;
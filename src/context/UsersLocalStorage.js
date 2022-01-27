import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const UsersLocalStorage = createContext();

const UsersLocalStorageProvider = ({ ...props }) => {

    const [users, setUsers] = useState(null);
    const [localDAtaObject, setLocalDataObject] = useState([]);

    // get the data from server.
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });;
            const data = [...response.data];
            setUsers(data);
        };
        getUsers();

    }, []);

    //save the data(has recieved from server) in a localstorage.
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        if (users !== null) {
            let LocalData = localStorage.getItem('users');
            setLocalDataObject(JSON.parse(LocalData));
        }
    }, [users]);


    
    return (
        <UsersLocalStorage.Provider value={localDAtaObject}>
            {props.children}
        </UsersLocalStorage.Provider>
    );
}

export default UsersLocalStorageProvider;

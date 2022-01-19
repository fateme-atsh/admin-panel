import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ProfileLocalStorage = createContext();

const ProfileLocalStorageProvider = ({...props}) => {

   const [user, setUser] = useState([]);
    const [localDataObject, setLocalDataObject] = useState([]);

    // get the data from server.
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get('https://randomuser.me/api/?format=JSON')
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
            const data = [...response.data.results];
            setUser(data);
        };
        getUser();

    }, []);

    //save the data(has recieved from server) in a localstorage.
    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(user));
        if (user !== []) {
            let LocalData = localStorage.getItem('profile');
            setLocalDataObject(JSON.parse(LocalData));
        }
    }, [user]);



    return (
        <ProfileLocalStorage.Provider value={localDataObject}>
            {props.children}
        </ProfileLocalStorage.Provider>
    );
}
 
export default ProfileLocalStorageProvider;
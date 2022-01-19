import React, { createContext, useEffect, useState } from 'react';
import data from '../reservation-mock-api.json'

export const TablesLocalStorage = createContext();

const TablesLocalStorageProvider = ({ ...props }) => {

    const [tables, setTables] = useState([]);
    const [localDAtaObject, setLocalDataObject] = useState([]);

    // get the data from JSON file.
    useEffect(() => {
        setTables(data);
    }, [tables]);

    //save the data(has recieved from server) in a localstorage.
    useEffect(() => {
        localStorage.setItem('tables', JSON.stringify(tables));
        if (tables !== null) {
            let LocalData = localStorage.getItem('tables');
            setLocalDataObject(JSON.parse(LocalData));
        }
    }, [tables]);



    return (
        <TablesLocalStorage.Provider value={localDAtaObject}>
            {props.children}
        </TablesLocalStorage.Provider>
    );
}

export default TablesLocalStorageProvider;

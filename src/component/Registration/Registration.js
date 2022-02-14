import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Login from './Login';

const Register = () => {
    const [user, setUser] = useState([]);
    const [changeField, setChangeField] = useState({
        name: "",
        pass: ""
    })
    const history = useNavigate();

    // function called when form value change
    const handleformchange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...changeField };
        newFormData[fieldName] = fieldValue;

        setChangeField(newFormData);
        console.log(changeField)
    }

    // function for submit SignUp form
    const handleLogin = (event) => {
        event.preventDefault();

        setUser(changeField);
        console.log(user);

        const sent = async () => {
            let post = await axios.post('https://mytestapi.free.beeceptor.com/login', JSON.stringify(user))
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('user-info', JSON.stringify(res));
                    history('');
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error.toJSON());
                });
        }
        sent();

    }

    return (
        <section className='w-1/3 bg-slate-200 m-auto rounded-md sm:w-screen md:w-screen'>
            {user !== []
                ? <Login
                    handleformchange={handleformchange}
                    handleLogin={handleLogin}
                />
                : null
            }
        </section>
    );
}

export default Register;
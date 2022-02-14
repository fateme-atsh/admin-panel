import React from 'react';

const Login = ({...props}) => {


    return (
        <>
        <h2 className='m-auto font-bold text-center pt-4'>لطفا وارد حساب کاربری خود شوید:</h2>
        <form className='py-6 px-2' onSubmit={props.handleLogin}>
            <div className='my-5 text-center'>
                <label className='ml-2 text-lg font-semibold sm:text-xs md:text-sm' > نام کاربری:</label>
                <input type="text" onChange={props.handleformchange}
                className='border border-slate-900 rounded-md w-3/4' name='name' />
            </div>

            <div className='my-5 text-center'>
                <label className='ml-3.5 text-lg font-semibold sm:text-xs md:text-sm' > رمز عبور:</label>
                <input type="password" onChange={props.handleformchange}
                className='border border-slate-900 rounded-md w-3/4' name='pass' />
            </div>

            <div className='my-5 text-center sm:my-1'>
                <input type='submit' 
                value='ورود'
                className='text-xl px-10 py-2.5 bg-blue-500 hover:bg-blue-700 rounded-md text-white mx-2 cursor-pointer sm:text-xs md:text-sm'/>
            </div>
        </form>
        </>
    );
}

export default Login;
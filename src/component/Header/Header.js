import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToRight from '../../icons/ToRight';
import ToLeft from '../../icons/ToLeft';
import User from '../../icons/User';
import { BtnLogicContext } from '../../context/BtnLogicContext';

const Header = ({ ...props }) => {
    const BtnContext = useContext(BtnLogicContext);
    const [btnLogic, setBtnLogic] = useState([]);
    const  {clickToCloseNav} = BtnContext;

    useEffect(() => { 
        setBtnLogic(BtnContext);
    }, [BtnContext]);

    return (
        <header className='bg-blue-400 text-gray-50 py-2 flex justify-between px-5 items-center'>
            <button className='bg-blue-500 rounded-full py-3.5 px-6 hover:bg-blue-600'
                onClick={clickToCloseNav}>
                {btnLogic.btnLogic === true ?

                    <ToRight />

                    : <ToLeft />}
            </button>
            <Link to="/profile" className="hover:bg-blue-500 rounded-md p-5">
                <User />
            </Link>
        </header>
    );
}

export default Header;
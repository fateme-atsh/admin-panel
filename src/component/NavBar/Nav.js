import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseNav from './CloseNav';
import OpenNav from './OpenNav';
import { BtnLogicContext } from '../../context/BtnLogicContext';


const Nav = () => {
    const navigate =useNavigate();
    const BtnContext = useContext(BtnLogicContext);
    const { clickToCloseNav } = BtnContext;
    const [btnLogic, setBtnLogic] = useState([]);

    useEffect(() => {
        setBtnLogic(BtnContext);
    }, [BtnContext]);

    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    
    return (
        <nav className='bg-white text-xl md:z-2 sm:z-2 sm:absolute sm:right-0 sm:top-12 sm:text-xs md:text-sm sm:h-screen sm:bg-blue-100'>
            <div className='grid grid-cols-1 '>
                {btnLogic.btnLogic === true
                    ? <OpenNav 
                    handleLogOut={handleLogOut}
                    clickToCloseNav={clickToCloseNav}/>
                    : <CloseNav handleLogOut={handleLogOut}/>}
            </div>
        </nav>
    );
}

export default Nav;
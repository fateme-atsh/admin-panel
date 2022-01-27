import React, { useState, useContext, useEffect } from 'react';
import CloseNav from './CloseNav';
import OpenNav from './OpenNav';
import { BtnLogicContext } from '../../context/BtnLogicContext';


const Nav = () => {
    const BtnContext = useContext(BtnLogicContext);
    const [btnLogic, setBtnLogic] = useState([]);

    useEffect(() => {
        setBtnLogic(BtnContext);
    }, [BtnContext]);

    return (
        <nav className='bg-white text-xl sm:translate-x-0 sm:absolute sm:right-0 '>
            <div className='grid grid-cols-1 '>
                {btnLogic.btnLogic === true
                    ? <OpenNav />
                    : <CloseNav />}
            </div>
        </nav>
    );
}

export default Nav;
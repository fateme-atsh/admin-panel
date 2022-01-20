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
        <nav className='bg-white grid grid-cols-1 text-xl sm:translate-x-0'>
            {btnLogic.btnLogic === true
                ? <OpenNav />
                : <CloseNav />}
        </nav>
    );
}

export default Nav;
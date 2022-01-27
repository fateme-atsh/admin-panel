import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faUser} className=" text-2xl sm:text-lg"/>
        </div>);
    }
}
 
export default User;
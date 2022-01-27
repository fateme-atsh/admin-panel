import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class Users extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faUsers} className="text-3xl sm:text-lg"/>
        </div>);
    }
}
 
export default Users;
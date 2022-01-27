import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class UserCircle extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faUserCircle} className="text-3xl sm:text-lg"/>
        </div>);
    }
}
 
export default UserCircle;
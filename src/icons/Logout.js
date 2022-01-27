import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Logout extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faSignOutAlt} className="text-3xl sm:text-lg"/>
        </div>);
    }
}
 
export default Logout;
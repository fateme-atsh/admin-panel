import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

class Profile extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faIdCard} className="text-3xl"/>
        </div>);
    }
}
 
export default Profile;
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

class Copyright extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faCopyright} className="text-lg sm:text-sm"/>
        </div>);
    }
}
 
export default Copyright;
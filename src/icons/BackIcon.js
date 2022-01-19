import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class BackIcon extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faAngleRight} className="text-3xl"/>
        </div>);
    }
}
 
export default BackIcon;
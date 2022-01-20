import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class ToLeft extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faAngleLeft} className="text-3xl"/>
        </div>);
    }
}
 
export default ToLeft;
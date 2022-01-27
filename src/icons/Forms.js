import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class Forms extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faEdit} className="text-3xl sm:text-lg"/>
        </div>);
    }
}
 
export default Forms;
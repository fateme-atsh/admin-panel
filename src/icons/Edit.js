import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class Edit extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faEdit} className="text-lg"/>
        </div>);
    }
}
 
export default Edit;
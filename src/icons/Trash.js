import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Trash extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faTrashAlt} className="text-lg"/>
        </div>);
    }
}
 
export default Trash;
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';

class Table extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faTable} className="text-3xl sm:text-lg"/>
        </div>);
    }
}
 
export default Table;
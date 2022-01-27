import React,{useHistory} from 'react';
import Layout from "./component/Layout";
import UsersLocalStorageProvider from './context/UsersLocalStorage';

function App() {
  // const history = useHistory();

  return (
    <div className="App">
      <Layout/>      
    </div>
  );
}

export default App;

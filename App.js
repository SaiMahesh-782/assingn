
import './App.css';
import Sidebar from "./components/sidebar"
import Setpayment from './components/SetPayment';
import GeneralSettings from './components/GeneralSettings'
import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>

      <div className=' flex flex-row'>
    <Sidebar/>;
    <Setpayment/>
    <GeneralSettings/>
    </div>
    </>
  );
}

export default App;

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alerta, CustomNavbar } from './components';

export const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
       <CustomNavbar />      
      </header>
      <Alerta /> 
    </div>
  );
}
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alerta, CustomNavbar } from './components';
import { CartWidget } from './components';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

const bookList = [
  {
    title:'Don Quijote de la Mancha',
    year:'1605',
    author: 'Miguel de Cervantes',
    code : '001'
  }
  ,{
    title:'La Ilíada',
    year:'siglo VIII aC',
    author: ' Homero',
    code : '002'
  },
  {
    title:'Hamlet',
    year:'1599',
    author: 'William Shakespeare',
    code : '003'
  }
  ,
  {
    title:'La divina comedia',
    year:'1304',
    author: 'Dante Alighieri',
    code : '004'
  },
  {
    title:'La guerra y la paz',
    year:'1869',
    author: 'León Tolstoi',
    code : '005'
  }
]

export const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
       <CustomNavbar />
       <CartWidget/>      
      </header>
      <Alerta />
      <ItemListContainer bookList = { bookList } greeting = " Hola soy una prop"/>
    </div>
  );
}
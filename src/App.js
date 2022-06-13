import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';
import Search from './component/Search';

function App() {
  return (
    <>
     <Header />
       <Routes>
         <Route path='/' element={ <Home/>} ></Route>
         <Route path='/search' element={<Search/>} ></Route>
         <Route path='/photo/:id' element={<Detail/>}></Route>
       </Routes>
       
    </>
  );
}

export default App;

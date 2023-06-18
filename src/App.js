import { Route, Routes } from 'react-router-dom';


import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Read from './components/Read/Read';
import Test from './components/Test/Test';
import Test1 from './components/Test/Test1';
import Test2 from './components/Test/Test2';
import Test3 from './components/Test/Test3';
import Avtor from './components/Avtor/Avtor';

import './App.scss';

function App() {
  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/read' element={ <Read />}/>
        <Route path='/about' element={ <Avtor />}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/test1' element={<Test1/>}/>
        <Route path='/test2' element={<Test2/>}/>
        <Route path='/test3' element={<Test3/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;

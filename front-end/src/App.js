import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import StdLogin from './Components/Login/StdLogin';
import FacltyLogin from './Components/Login/FacltyLogin';
function App() {
  return (
<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/stdLogin' element={<StdLogin/>}/>
      <Route path='/faculty' element={<FacltyLogin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
</>
  );
}

export default App;

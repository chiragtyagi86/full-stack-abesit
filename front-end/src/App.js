import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import StdLogin from './Components/Login/StdLogin';
import FacltyLogin from './Components/Login/FacltyLogin';
import Land from './Students/Land'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Team from './Components/Team/Team';
import Regis from './Components/Login/Regis';
import Dashbord from './Components/Screen/Dashbord/Dashbord';

function App() {
  return (
<>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/stdLogin' element={<StdLogin/>}/>
      <Route path='/FacltyLogin' element={<FacltyLogin/>}/>
      <Route path='/student' element={<Land/>}/>
      <Route path='/create' element={<Regis/>}/>
      <Route path='/Dashbord' element={<Dashbord/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    
</>
  );
}

export default App;

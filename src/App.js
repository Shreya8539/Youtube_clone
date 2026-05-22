import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import Home from './pages/Home/home';
import Video from './pages/Video/video';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Profile from './pages/Profile/profile';
function App() {
  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
    <div className="App">
     <Navbar setSideNavbarFunc={setSideNavbar} sideNavbar={sideNavbar} />
     <Routes>
      <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
      <Route path='/watch/:id' element={<Video />} />
      <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />} />
     </Routes>
     

    </div>
  );
}

export default App;

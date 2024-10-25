import './App.css';
import '../../CSS/design-system.css'
import '../../CSS/appearance.css';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home/Home';
import Canonical from '../Canonical/Canonical.js';
import { useState, useEffect } from 'react';
import Obi from '../Obi/obi.js';
import Resume from '../Resume/Resume.js';
import Rebrand from '../Rebrand/Rebrand.js';


export default function App() {

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <div className='container'>
    <BrowserRouter>
      <Header width={screenSize.width}/>
      <Routes>
        <Route path="" element={<Home width={screenSize.width}/>}/>
        <Route path="/" element={<Home width={screenSize.width}/>}/>
        <Route path="/#" element={<Home width={screenSize.width}/>}/>
        <Route path="/Home" element={<Home width={screenSize.width}/>}/>
        <Route path="/Canonical" element={<Canonical width={screenSize.width}/>}/>
        <Route path="/Ubuntu-Rebrand" element={<Rebrand width={screenSize.width}/>}/>
        <Route path="/Obi" element={<Obi width={screenSize.width}/>}/>
        <Route path="/Resume" element={<Resume width={screenSize.width}/>}/>
      </Routes>
      <Footer width={screenSize.width}/>
    </BrowserRouter>
    </div>
  )
}
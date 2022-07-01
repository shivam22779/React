import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  // const [myStyle, setMystyle] = useState({color: 'white', backgroundColor: 'black', border:'1px solid white'});
  // const [btnText, btnMytext] = useState("Enable white mode");

  // const toggleMode = ()=>{
  //   if(myStyle.color === 'white'){
  //     setMystyle({color: 'black', backgroundColor: 'white', border:'1px solid black'});
  //     btnMytext("Enable dark mode");
  //   }
  //   else{
  //     setMystyle({color: 'white', backgroundColor: 'black', border:'1px solid white'});
  //     btnMytext("Enable light mode");
  //   }
  // }

  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "#1762ad";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    
    
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      
      <Routes>

        <Route exact path="/" element={<Home mode={mode}/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        
         
      </Routes>
    </Router>
  );
}

export default App;

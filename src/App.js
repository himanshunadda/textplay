import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import TextArea from './components/TextArea';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar title = "textplay" mode = {mode} setMode = {setMode}/>
      <Routes>
        <Route path = "/" element = {<TextArea mode = {mode} setMode = {setMode}/>}></Route>
      
      {/*  */}
      <Route path = "/about" element = { <About mode = {mode} setMode = {setMode}/>}></Route>
     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

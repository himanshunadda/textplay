import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const[btnTxt, setBtnTxt] = useState("Enable Dark Mode");

    const handleButtonTxt = () =>{
        if(props.mode === 'light'){
            props.setMode('dark');
            setBtnTxt("Disable Dark Mode");
            document.body.style.backgroundColor = 'black';
        }else{
            props.setMode('light');
            setBtnTxt("Enable Dark Mode");
            document.body.style.backgroundColor = 'white';
        }
    }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        
       
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={handleButtonTxt} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >{btnTxt}</label>
</div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

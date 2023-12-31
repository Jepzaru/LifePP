
  import React from 'react';
  import { Link } from 'react-router-dom';
  import { FaSearch } from "react-icons/fa";
  import { FaCrown } from "react-icons/fa";
  import '../LifeCss/header.css';

  const Header = () => {
    return (
      <header>
          <div className="logo"></div>
          <div className='headlife'>
        <h1>LIFE ++</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="&nbsp;&nbsp;&nbsp;Search..."  />
          <FaSearch style={{fontSize: '30px', marginLeft: '10px', marginBottom:'-10px'}}/>
        </div>
        <div className="prembutton">
          <Link to="/index/pricing" className="prem-but"> 
          <FaCrown style={{color: 'yellow',marginRight: '10px', marginLeft: '-10px', marginBottom: '-2px'}}/>
          Go Premium</Link>
        </div>
        
      </header>
    );
  }

  export default Header;

import './App.css';
import React from 'react';
import tick from './Vector.svg'

function App() {
  return (
    <div className="App">
      <div className='hero'>
        <div className="topnav" id="myTopnav">
          <a href="#home" className='sniper'>Deltify</a>
          <a href="#home" className='nav-links'>Home</a>
          <a href="#about" className='nav-links'>ABOUT</a>
          <a href="#pages"className='nav-links'>PAGES</a>
          <a href="#services"className='nav-links'>SERVICES</a>
          <a href="#portfolio"className='nav-links'>PORTFOLIO</a>
          <a href="#blog"className='nav-links'>BLOG</a>
          <a href="#contact"className='nav-links'>CONTACT</a>
          <div>
            <a href="#say-hi"className='say-my-name'>SAY HI</a>       
          </div>
          <a  className="icon">
          <i className="fa fa-bars"></i>
          </a>
          <div className='hoya'>
        <h1 className='Lets-sky'>
           Let's Sky
           Rocket
           Your
           Revenue
        </h1>
        <div>
          <p className='some-words'>
          lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam lorem ipsum dolor sit amet.
          </p>
          </div>
          </div>
          <div className='space-ship'></div>
      <div className="lorem-grid-1">
        <div className="lorem-1">
        <div className='lorem-img-1'><img src={tick} /></div>
          Lorem Ipusum
          </div>
        <div className="lorem-1">
        <div className='lorem-img-1'><img src={tick} /></div>
          Lorem Ipusum
          </div>
        <div className="lorem-1">
        <div className='lorem-img-1'><img src={tick} /></div>
          Lorem Ipusum
          </div>
      </div>
      <div className='lorem-grid-2'>    
        <div className="lorem-2">
      <div className='lorem-img-2'><img src={tick}/></div>
          Lorem Ipusum
          </div>
        <div className="lorem-2">
        <div className='lorem-img-2'><img src={tick} /></div>
          Lorem Ipusum
          </div>
        <div className="lorem-2">
        <div className='lorem-img-2'><img src={tick} /></div>
          Lorem Ipusum
          </div>  
      </div> 
          <button className='get-started-oval'>Get Started</button>
          
    </div>
  </div>
</div>


);
}
export default App;

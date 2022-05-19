import React from 'react'
import Footer from './Footer/Footer';
import './Home.css';
import {Link} from 'react-router-dom';
import vishal from './vishal.png';
import atul from './atul.png';
import alok from './alok.png';
import prashant from './prashant.png';
import Contact from './Contact/Contact';
import About from './About/About';


function Home() {
  return (
      <>
    <div>
        <div  >
        <img src="https://www.egeniq.nl/sites/default/files/2020-06/frontend_webdeveloper.jpg" className="image" alt="nature image" />
        </div>
        <About/>
       
        {/* ................................ */}
        <h1>Some Example Of Project</h1>
        <div className="father-box">
        <Link class="nav-link" to='/game'>
        <div className="box">
           <h2>Games</h2>
           <h4>Here,You can Play Tic Toe Game.Here your competitor is computer.You will also get score of game with number of game tie and computer score and player score.</h4>
        </div>
        </Link>
        <Link class="nav-link" to='/notes'>
        <div className="box">
       <h2>Notes</h2>
        <h4>Here,You can make notes as per your requirement.If you want to add important point,then you can add it and also you can edit the notes and delete after work done.</h4>
        </div>
        </Link>
        <Link class="nav-link" to='/calculator'>
        <div className="box">
        <h2>Calculator</h2>
        <h4>Here,You can do Calculation as per your Calculation.It's very Simple.But you can perform any calculation with 100% accuracy and also get result in display.</h4>
          
        </div>
        </Link>
        </div>
        {/* /////////////////////////// */}
        <h1>Some Famous Service Of Mine</h1>
        <div className="father-box">
        <div className="box1">
        <h2>Video Editing</h2>
        <h5>We are best in that field.we have a best team to fight with any difficult to easy work.If you have any work related to video Contact me.</h5>
        </div>
        <div className="box1">
        <h2>Content Writer</h2>
        <h5>We are best in that field.we have a best team to fight with any difficult to easy work.If you have any work related to video Contact me.</h5>
        </div>
        <div className="box1">
        <h2>Web Developer</h2>
        <h5>We are best in that field.we have a best team to fight with any difficult to easy work.If you have any work related to video Contact me.</h5>
        </div>
        </div>

        <h1>Our Team Member</h1>
        <div className="father-box1">
        <div className="box">
           <img src={vishal} alt="vishal" className="image1"/> 
        <h2>Vishal Kumar</h2>
        <h3>Content Writer</h3>
        </div>
        <div className="box">
           <img src={atul} alt="vishal"  className="image1"/>
           <h2>Atul Kesharwani</h2>
           <h3>Web Developer</h3>
        </div>
        <div className="box">
           <img src={alok} alt="vishal"  className="image1"/>
           <h2>Alok Tripathi</h2>
           <h3>UI Designer</h3>
        </div>
        <div className="box">
           <img src={prashant} alt="vishal"  className="image1"/>
           <h2>Prashant Singh</h2>
           <h3>Digital Marketer</h3>
        </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
    </>
    
  );
};

export default Home;
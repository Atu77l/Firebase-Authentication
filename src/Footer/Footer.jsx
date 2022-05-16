import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <>
  <footer className="footer">
    <div className='link'>
      <a  id="link" className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/atul.kesharwani.756" role="button"
        ><FaFacebookSquare/>
     </a>

      <a id="link" className="btn btn-outline-light btn-floating m-2" href="https://twitter.com/kesharwani_atul" role="button"
        ><FaTwitter/>
      </a>

 
      <a id="link" className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/atul.kesharwani.756/" role="button"
        ><FaTwitter/>
      </a>

  
      <a id="link" className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/in/kesharwaniatul/" role="button"
        ><FaLinkedin/>
      </a>

      <a id="link" className="btn btn-outline-light btn-floating m-2" href="https://github.com/Atu77l" role="button"
      ><FaGithubSquare/></a>
      </div>
    <h1>
        <span className="vivek">Atul Kesharwani</span>
    </h1>
</footer>
</>
    )
};
export default Footer;

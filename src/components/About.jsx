import React from 'react';
import './Header.css';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {    
    return(
        <>
            <Link to='/'>
                <div className="header">
                    <img className="logo" alt="logo" src='/images/earth.png' />
                </div>
            </Link>  
            <div className="demonstration">
                    <img src='./images/team.jpg' alt="tranquil" />
                    <div style={{width: '400px'}}>
                    <h2 style={{fontWeight: '700', textAlign: 'left'}}>About us</h2>
                    <p style={{textAlign: 'left'}}>We aim to innovate and listen to our customers to provide
                        them with the best customer experience in every aspect,
                        whether they are looking for a luxury or a budgetary office space. 
                        Built on a philosophy of creativity we have a privilege of 
                        offering our customers trend-setting projects.</p>
                    </div>
                </div>
        </>
    );
};

export default About;
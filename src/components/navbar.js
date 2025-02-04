import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
        if(window.innerWidth <= 960) {  
            setButton(false);
        } else {
            setButton(true);
        }
    };

    

    window.addEventListener('resize',showButton);
  
    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/home" className="navbar-logo">
                <div className='navbar-logo-img'>
                    <svg className="navbar-logo-img"class="svg-icon" width="84" height="87" vertical-align="middle" fill="currentColor" overflow="hidden" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M593.4 566.7H430.7v189.9H295V268.4h135.7v162.7h162.7V268.4H729v488.2H593.4z" fill="#E35951" /><path d="M196.9 827.6l17.1-17.1c6.4 6.4 14 11.6 22.4 15 8 3.3 16.9 5.2 26.2 5.2h498.8c9.3 0 18.2-1.8 26.2-5.2 8.4-3.5 16-8.6 22.4-15 6.4-6.4 11.6-14 15.1-22.4 3.4-8 5.2-16.9 5.2-26.2V263.1c0-9.3-1.8-18.2-5.2-26.2-3.5-8.4-8.6-16-15.1-22.4l17.1-17.1C810.3 180.5 787 170 761.4 170H262.5c-25.6 0-48.8 10.5-65.7 27.3-16.9 16.9-27.3 40.1-27.3 65.7v498.8c0.1 25.7 10.5 48.9 27.4 65.8z m65.7-698.2h498.9c36.8 0 70.2 15 94.4 39.3 24.2 24.2 39.3 57.7 39.3 94.5V762c0 36.8-15 70.2-39.3 94.5-24.2 24.2-57.6 39.3-94.4 39.3H262.6c-36.8 0-70.2-15-94.5-39.3-24.2-24.2-39.3-57.7-39.3-94.5V263.1c0-36.8 15.1-70.2 39.3-94.5 24.3-24.2 57.7-39.2 94.5-39.2z" fill="#E35951" /></svg>
                </div>
                    HEALER<i className='fav fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-item'> 
                        <Link to="/home" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to="/contactus" className='nav-links' onClick={closeMobileMenu} href="#top">
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to="/BookRoom.js" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Book A Bed
                        </Link>
                    </li>
                </ul>
                
                {button && <Button buttonStyle="btn--outline">
                    <Link to="/BookRoom.js" onClick={closeMobileMenu} color="red">BOOK A BED</Link>
                </Button>}
                
            </div>
        </nav>
    </> 
  )
}

export default Navbar;

import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logoNew.jpg'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'


const Navbar = () => {
  const [click, setClick] = useState(false);  

  const  handleClick = () => setClick(!click);
  const closeClick = () => setClick(false);
  const [t, i18n ] = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={(handleClick)}>
                {click ? (<FaTimes size={30} style={{color: 'black'}} />) : (<FaBars size={30} style={{color: 'black'}} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item' onClick={closeClick}>
                    <a href='./'>{t('Home')}</a>
                </li>
                <li className='nav-item' onClick={closeClick}>
                    <Link to="./#about" className='Link'>
                      {t('About')}    
                    </Link>
                </li>
                <li className='nav-item' onClick={closeClick}>
                    <Link to="./#machines" className='Link'>
                      {t('Machines')}  
                    </Link>
                </li>
                <li className='nav-item' onClick={closeClick}>
                    <Link to="./#contact" className='Link'>
                      {t('Contact')}    
                    </Link>
                </li>
                <li className='nav-item' onClick={closeClick}>
                   <button onClick={() => changeLanguage('ar')}>العربية</button>
                   <button onClick={() => changeLanguage('en')}>English</button>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar
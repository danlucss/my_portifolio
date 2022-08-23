import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FaBars, FaClosedCaptioning, FaExchangeAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { VscClose } from 'react-icons/vsc';
import danAvatar from '../../assets/images/danlucss-photo.png';

import './index.scss';

import homeIcon from '../../assets/images/icons/home.svg';
import aboutIcon from '../../assets/images/icons/user.svg';

import portifolioIcon from '../../assets/images/icons/portfolio.svg';
import contactIcon from '../../assets/images/icons/contact.svg';






const Sidebar = () => {

    const [active, setMode] = useState(false);

    const [showMenu, setShowMenu] = useState(false);


    const ToggleMenu = () => {
        setShowMenu(!showMenu);
    }


    const ToggleMode = () => {
        setMode(!active);
    }


    return (

        <div className='nav-bar'>

            <Link to='/' className='logo'>
                <img src={danAvatar} alt="DanLucss" />

            </Link>

            <nav>
                <div className={showMenu ? 'icon iconActive' : 'icon'} onClick={ToggleMenu}>
                    <div className='hamburger hamburgerIcon'></div>
                </div>
                <div className={showMenu ? 'menu menuOpen' : 'menu menuClose'}>
                    <div className='links-container'>
                        <NavLink to='/' exact="true" className="menu-item" activeclassname='active' onClick={ToggleMenu}>
                            <i className="icon-home">
                                <img src={homeIcon} alt="home" />
                            </i>
                        </NavLink>

                        <NavLink to='/about' className="menu-item about-link" onClick={ToggleMenu} >
                            <i className="icon-user">
                                <img src={aboutIcon} alt="about" />
                            </i>
                        </NavLink>

                        <NavLink to='/portifolio' className="portifolio-link menu-item" onClick={ToggleMenu}>
                            <i className="icon-portifolio">
                                <img src={portifolioIcon} alt="portifolio" />
                            </i>
                        </NavLink>

                        <NavLink to='/contact' className="contact-link menu-item" onClick={ToggleMenu}>
                            <i className="icon-contact">
                                <img src={contactIcon} alt="contact" />
                            </i>

                        </NavLink>
                    </div>


                    {/* <VscClose className='menu-close' onClick={() => {
                        setShowNav(false)
                        const menuOpen = document.querySelector('.hamburguer-icon');

                        menuOpen.style.display = 'block';
                    }} /> */}
                </div>
            </nav >


            <ul>
                <li>
                    <a href='https://github.com/danlucss' target="_blank" rel='noreferrer'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/danlucss' target="_blank" rel='noreferrer'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href='mailto:daniellucas.bio@gmail.com' target="_blank" rel='noreferrer'>
                        <SiGmail />
                    </a>
                </li>
                <li>
                    <a href='http://api.whatsapp.com/send?phone=5562993298751' target="_blank" rel='noreferrer'>
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>

            <FaBars onClick={() => {
                const menuOpen = document.querySelector('.hamburguer-icon');

                setShowNav(true)
                menuOpen.style.display = 'none';

            }
            } className='hamburguer-icon' />
        </div >

    )
};

export default Sidebar;
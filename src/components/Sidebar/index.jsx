import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaGithub, FaHome, FaLinkedin, FaUser, FaWhatsapp } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './index.scss';

import { useState } from 'react';

const Sidebar = () => {

    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    }


    return (
        <>
            <div className='nav-bar'>

                <Link to='/' className='logo'>
                    <h3>Daniel Lucas</h3>

                </Link>
                <nav>
                    <div className={active ? 'icon iconActive' : 'icon'} >
                        <div className='hamburger hamburguerIcon'></div>
                    </div>
                    <div className={active ? 'icon iconActive' : 'icon'} >
                        <div className="link-container">
                            <NavLink to='/' exact="true" activeClassName='active'>
                                <FaHome />
                            </NavLink>

                            <NavLink to='/about' exact activeClassName='active' className="about-link">
                                <FaUser />
                            </NavLink>

                            <NavLink to='/portifolio' exact activeClassName='active' className="portifolio-link" >
                                <BsCodeSlash />
                            </NavLink>

                            <NavLink to='/contact' exact activeClassName='active' className="contact-link">
                                <FaEnvelope />

                            </NavLink>
                        </div>
                    </div>

                </nav>

                {/* <ul>
                    <li>
                        <a href='#github' target="_blank" rel='noreferrer'>
                            <FaGithub color='#fff' />
                        </a>
                    </li>
                    <li>
                        <a href='#linkedin' target="_blank" rel='noreferrer'>
                            <FaLinkedin color='#fff' />
                        </a>
                    </li>
                    <li>
                        <a href='#gmail' target="_blank" rel='noreferrer'>
                            <SiGmail color='#fff' />
                        </a>
                    </li>
                    <li>
                        <a href='#whats' target="_blank" rel='noreferrer'>
                            <FaWhatsapp color='#fff' />
                        </a>
                    </li>
                </ul> */}
            </div>
        </>
    )
};

export default Sidebar;
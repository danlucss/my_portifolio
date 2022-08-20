import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

import { FaExternalLinkAlt, FaGithub, FaJs, FaPython, FaReact, FaTypo3 } from 'react-icons/fa';

import './index.scss';

import ravenImg from '../../assets/images/shine.png';
import { SiTypescript } from 'react-icons/si';


const Portifolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');



    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container portifolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Portifolio'.split('')}
                            idx={12}
                        />
                    </h1>
                    <div className='btn__container'>

                        <button className="btn__action">
                            <FaReact className="icon" />
                        </button>
                        <button className="btn__action">
                            <FaPython className="icon" />
                        </button>
                        <button className="btn__action">
                            <FaJs className="icon" />
                        </button>
                        <button className="btn__action">
                            <SiTypescript className="icon" />
                        </button>

                    </div>

                </div>
                <div className="projects-zone">
                    <div className="project-card">
                        <div className="card__img">
                            <img src={ravenImg} alt="" />
                        </div>

                        <div className='card__info'>

                            <a href="#" >
                                <FaExternalLinkAlt />

                            </a>
                            <p className='text'>Text goes heres</p>
                            <a href="#" >
                                <FaGithub />
                            </a>

                        </div>

                    </div>
                    <div className="project-card">
                        <div className="card__img">
                            <img src={ravenImg} alt="ok" />
                        </div>
                        <div className='card__info'>

                            <a href="#" >
                                <FaExternalLinkAlt />

                            </a>
                            <p className='text'>Text goes heres</p>
                            <a href="#" >
                                <FaGithub />
                            </a>

                        </div>


                    </div>
                    <div className="project-card">
                        <div className="card__img">
                            <img src={ravenImg} alt="ok" />
                        </div>
                        <div className='card__info'>

                            <a href="#" >
                                <FaExternalLinkAlt />

                            </a>
                            <p className='text'>Text goes heres</p>
                            <a href="#" >
                                <FaGithub />
                            </a>

                        </div>


                    </div>
                    <div className="project-card">
                        <div className="card__img">
                            <img src={ravenImg} alt="ok" />
                        </div>
                        <div className='card__info'>

                            <a href="#" >
                                <FaExternalLinkAlt />

                            </a>
                            <p className='text'>Text goes heres</p>
                            <a href="#" >
                                <FaGithub />
                            </a>

                        </div>


                    </div>
                </div>
            </div>

            <Loader type="ball-clip-rotate-multiple" active={true} />
        </>
    )
}

export default Portifolio;
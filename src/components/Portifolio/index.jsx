import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { collection } from 'firebase/fireStore';

import { FaExternalLinkAlt, FaGithub, FaJs, FaPython, FaReact, } from 'react-icons/fa';

import './index.scss';

import portifoliaImg from '../../assets/images/portfolia.png';
import { SiTypescript } from 'react-icons/si';


const Portifolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);



    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const getPortifolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portifolio'));
        console.log(querySnapshot)
        // setPortfolio(querySnapshot.docs.map((doc) => doc.data()));

    }

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
                    {/* <div className='btn__container'>

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

                    </div> */}

                </div>
                <div className="projects-zone">
                    <div className="project-card">
                        <div className="card__img">
                            <img src={portifoliaImg} alt="" />
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
                            <img src={portifoliaImg} alt="ok" />
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
                            <img src={portifoliaImg} alt="ok" />
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
                            <img src={portifoliaImg} alt="ok" />
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
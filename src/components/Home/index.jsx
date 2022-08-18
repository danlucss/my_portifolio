import './index.scss';
import { useState, useEffect } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import AnimatedLetters from "../AnimatedLetters"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const introduction = 'Hello,';

    const nameArray = "I am Daniel Lucas"
    const jobArray = 'a Web Developer'

    const strArray = [
        " A Front-End Web Developer ",
        " A Designer Enthusiast",
        " A Back-End Creator",
        " Number 1 Daddy",

    ]


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (<>
        <div className="container home-page">
            <div className='text-area'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={introduction.split('')}
                        idx={12}
                    />
                </h1>

                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray.split('')}
                        idx={19}
                    />
                </h1>


                {/* <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray.split('')}
                    idx={23}
                /> */}

                <h3>
                    <Typed

                        strings={strArray}
                        typeSpeed={50}
                        backSpeed={1}


                        loop
                        // showCursor
                        cursorChar="|"
                    />
                </h3>


                <Link to="/contact" className='btn contact'>Contact Me <FontAwesomeIcon icon={faEnvelope} /></Link>


                <a
                    href="https://drive.google.com/file/d/1D9gNKvKYot0254DoCNkMSCH27p7DuaAy/view?usp=sharing"
                    target="_blank"
                    className='btn resume'
                    download>
                    Resume <span><FontAwesomeIcon icon={faDownload} /></span>
                </a>

            </div>

        </div>

        <Loader type='ball-clip-rotate-multiple' />
    </>)

}

export default Home;
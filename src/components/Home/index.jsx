import './index.scss';
import { useState, useEffect } from 'react';
import ReactTyped from 'react-typed';
import AnimatedLetters from "../AnimatedLetters"
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const introduction = 'Hello,';

    const nameArray = "I am Daniel Lucas"
    const jobArray = 'a Web Developer'

    const strArray = [
        " A Front-End Web Developer ",
        " A Back-End Web in Construction",
        " A Designer Enthusiast",

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
                        idx={0}
                    />
                </h1>

                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray.split('')}
                        idx={12}
                    />
                </h1>


                {/* <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray.split('')}
                    idx={23}
                /> */}

                <h3>
                    <ReactTyped
                        strings={strArray}
                        typeSpeed={20}
                        backSpeed={50}
                        backDelay={1000}
                        loop
                        showCursor
                        cursorChar="|"
                    />
                </h3>
                <br />

                <Link to="/contact" className='contact__btn'>Contact Me</Link>
                <br />
                <a
                    href="https://drive.google.com/file/d/1D9gNKvKYot0254DoCNkMSCH27p7DuaAy/view?usp=sharing"
                    target="_blank"
                    className='resume__btn'
                    download>
                    Resume
                </a>

            </div>

        </div>
    </>)

}

export default Home;
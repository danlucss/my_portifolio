import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

//database imports
import { collection, getDocs } from 'firebase/fireStore';
import { db } from '../../firebase';



import { FaExternalLinkAlt, FaGithub, FaJs, FaPython, FaReact, } from 'react-icons/fa';

import './index.scss';




const Portifolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);



    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        getPortifolio();
    }, []);


    const getPortifolio = async () => {

        const querySnapshot = await getDocs(collection(db, 'portfolio'));

        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    console.log(portfolio)


    const renderPortifolio = (Portifolio) => {
        return (

            <>
                {
                    portfolio.map((project, index) => {
                        return (

                            <div className="project-card" key={index}>
                                {/* <div> */}
                                <div className='image__box'>
                                    <img src={project.image}
                                        alt={project.name} id="box__image" width={400} height="400" />
                                </div>
                                <div className='card__info'>
                                    <p className='card__title'>
                                        {project.name}
                                    </p>
                                    <h4 className="card__description">{project.description}
                                    </h4>
                                    <button className="btn__action" onClick={() => window.open(project.url, '_blank')}>
                                        <FaExternalLinkAlt />
                                    </button>
                                    <button className="btn__action" onClick={() => window.open(project.url, '_blank')}>
                                        <FaGithub />
                                    </button>
                                    {/* </div> */}
                                </div>
                            </div>


                        )
                    })
                }
            </>



        )

    };
    return (
        <>
            <div className="container portifolio-page">

                <h1 className='page-tittle'>
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

                <div className="projects-zone">
                    {renderPortifolio(portfolio)}
                </div>
            </div>



        </>
    )

}


<Loader type="ball-clip-rotate-multiple" active={true} />




export default Portifolio;
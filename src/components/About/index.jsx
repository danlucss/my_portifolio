import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';

import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faNode, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const str = 'About Me';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);


  return (
    <>

      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={str.split('')}
              idx={12}
            />
          </h1>

          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cube-spinner'>

            <div className='face1'>
              <FontAwesomeIcon icon={faReact} />

            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} />

            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faPython} />

            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faNode} />

            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGit} />

            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faSass} />

            </div>

          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" active={true} />
    </>

  )


}

export default About;
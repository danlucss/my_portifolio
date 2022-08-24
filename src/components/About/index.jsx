import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';

import AnimatedLetters from '../AnimatedLetters';

import { FaGit, FaHtml5, FaPython, FaReact, FaSass, FaNode } from 'react-icons/fa';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const str = 'Sobre mim';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);


  return (
    <>

      <div className='container about-page '>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={str.split('')}
              idx={12}
            />
          </h1>

          <p>
            Eu sou um desenvolvedor web ambicioso e apaixonado por tecnologia!
            Que procura uma opotunidade para trabalhar com as tecnologias mais modernas e projetos diversificados.
          </p>
          <p align="LEFT">
            Sou muito curioso e gosto de aprender coisas novas desenvolvendo projetos que me ajudem a crescer.

          </p>
          Amante de livros e poesias, pai de duas crianças maravilhosas, apaixonado por artes marciais e esportes radicais, escritor, pai dedicado, <i>bon vivant</i>, fanático por tecnólogia e desenvolvimento de softwares.
          <p>

          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cube-spinner'>

            <div className='face1'>
              <FaReact />

            </div>
            <div className='face2'>
              <FaHtml5 />

            </div>
            <div className='face3'>
              <FaPython />

            </div>
            <div className='face4'>
              <FaNode />

            </div>
            <div className='face5'>
              <FaGit />

            </div>
            <div className='face6'>
              <FaSass />

            </div>

          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" active={true} />
    </>

  )


}

export default About;
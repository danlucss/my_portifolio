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
            Sou muito curioso, e gosto de aprender coisas novas e desenvolver projetos que me ajudem a crescer.

          </p>
          Se for preciso me deifinir com poucas palavras, eu sou pai de dois filhos maravilhosos, amo os livros e a poesia. As artes marciais são minha grande paixão. E, claro, sou obsecado por tecnologia!!!
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

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const strContact = 'Contate-me';

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Init EmailJs 
    const sendEmail = (e) => {
        e.preventDefault();
        const message_send = document.querySelector('#message_send');
        const formi = document.querySelector('#form');

        emailjs
            .sendForm('service_xczk3t9', "template_hxqrjrr", form.current, 'kIRbdoqhzQ-zJJufV')
            .then(
                () => {
                    // alert('SUCCESS!');

                    message_send.innerHTML = 'Mensagem enviada com sucesso!';
                    formi.reset();
                },
                (err) => {
                    alert('FAILED...', err);
                }
            )
    }




    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strContact.split('')}
                            idx={12}
                        />

                    </h1>
                    <p>
                        Estou interessado em entrar para o mercado - especialmente para trabalhar em grandes projetos ou em projetos que podem mudar a vida das pessoas!

                    </p>
                    <p>
                        Se você ficou com alguma duvida ou quer falar comigo, preecha o formulário abaixo e seremos conectados!
                    </p>


                    <div className='form-zone'>
                        <form ref={form} onSubmit={sendEmail} id="formi">
                            <ul>
                                <li className="half">
                                    <input type="text" name="to_name" id='to_name' placeholder="Nome"
                                        required />
                                </li>
                                <li className="half">
                                    <input type="email" name="reply_to" id='reply_to' placeholder="Email"
                                        required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Assunto" id='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Mensagem" id='message'
                                        required />
                                </li>
                                <li>
                                    <button className='btn btn__send' type="submit">Enviar</button>
                                </li>
                                <li>
                                    <p id='message_send'></p>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className='test-zone'>
                </div> */}
            </div>


            <Loader type="ball-clip-rotate-multiple" active={true} />
        </>
    )
}

export default Contact;
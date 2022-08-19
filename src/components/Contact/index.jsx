
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const strContact = 'Contact Me';

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xczk3t9', "template_hxqrjrr", form.current, 'kIRbdoqhzQ-zJJufV')
            .then(
                () => {
                    alert('SUCCESS!');
                    window.location.reload(false);
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
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>


                    <div className='form-zone'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name"
                                        required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email"
                                        required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message"
                                        required />
                                </li>
                                <li>
                                    <button className='btn btn__send' type="submit">Send</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>


            <Loader type="ball-clip-rotate-multiple" active={true} />
        </>
    )
}

export default Contact;
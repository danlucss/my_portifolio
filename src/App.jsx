
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./components/Home";

import './App.scss'
import About from "./components/About";
import Contact from "./components/Contact";
import Portifolio from "./components/Portifolio";
import Particle from './components/Particles';
import Dashboard from './components/Dashboard';



const App = () => {



    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portifolio" element={<Portifolio />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

            </Routes>



            <Particle />

        </>
    )
};

export default App;

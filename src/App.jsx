import Particle from "./components/Particle";
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";

import './App.scss'


const App = () => {



    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} />

            </Routes>



            <Particle />

        </>
    )
};

export default App;

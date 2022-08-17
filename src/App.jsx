import Particle from "./components/Particle";
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./components/Home";

import './App.scss'



const App = () => {



    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>

            </Routes>



            <Particle />

        </>
    )
};

export default App;

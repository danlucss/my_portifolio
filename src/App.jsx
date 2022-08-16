import Particle from "./components/Particle";
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";

import './App.scss'
import { Home } from "react-feather";


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

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../firebase.js"
import Home from './home';
import Login from '../Login';

import './index.scss';



const Dashboard = () => {

    const [user, setUser] = useState(null);
    // const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        }
        )
    }
        , []);


    return (
        <div>
            {user ? <Home /> : <Login />}
        </div>
    );
}


export default Dashboard;
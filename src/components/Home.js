import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const data = useContext(AuthContext)
    return (
        <div>
            <h1>Hello, This is Home Componnent </h1>
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Foter from './Foter';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Main;
import React from 'react';
import Carosel from './Carosel';
import JoinProgram from './JoinProgram';
import Particularly from './Particularly';
import Donation from './Donation';
import Comunity from './Comunity';
import NewSection from './NewSection';
import Charity from './Charity';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <JoinProgram></JoinProgram>
            <Particularly></Particularly>
            <Donation></Donation>
            <Comunity></Comunity>
            <NewSection></NewSection>
           <Charity></Charity>
            
        </div>
    );
};

export default Home;
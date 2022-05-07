import React from 'react';
import Banner from '../Banner/Banner';
import ConnectWithUs from '../ConnectWithUs/ConnectWithUs';
import Inventories from '../Inventories/Inventories';
import Trust from '../Trust/Trust';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ConnectWithUs></ConnectWithUs>
            <Trust></Trust>
        </div>
    );
};

export default Home;
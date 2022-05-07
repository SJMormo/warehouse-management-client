import React from 'react';
import Banner from '../Banner/Banner';
import ConnectWithUs from '../ConnectWithUs/ConnectWithUs';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ConnectWithUs></ConnectWithUs>
        </div>
    );
};

export default Home;
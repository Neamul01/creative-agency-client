import React from 'react';
import Banner from './Banner';
import Companys from './Companys';

const Home = () => {
    return (
        <div className=' absolute top-0 z-10 w-full'>
            <Banner />
            <Companys />
        </div>
    );
};

export default Home;
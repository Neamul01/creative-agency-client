import React from 'react';
import Banner from './Banner';
import Companys from './Companys';
import Services from './Services';

const Home = () => {
    return (
        <div className=' absolute top-0 z-10 w-full'>
            <Banner />
            <Companys />
            <Services />
        </div>
    );
};

export default Home;
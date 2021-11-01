import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import AddService from '../../AddService/AddService';
import Footer from '../../Footer/Footer';

import Banner from '../Banner/Banner';
import Expert from '../Expert/Expert';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <AddService></AddService>
            <Services></Services>
            <Experts></Experts>
            <AboutUs></AboutUs>
            <Footer></Footer>

            {/* <Expert></Expert> */}
        </div>
    );
};

export default Home;
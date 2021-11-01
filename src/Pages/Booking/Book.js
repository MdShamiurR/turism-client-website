import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Home/Banner/Banner';
import Booking from './Booking/Booking';

const Book = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Book;
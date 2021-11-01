import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './Booking.css'


const Booking = () => {
    const { id } = useParams();


    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://enigmatic-crag-45724.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    return (
        <div className="backGround img-fluid">
            <h1 className="text-warning">Click on <span className="text-primary fs-bold">Vote</span> for this tour : <strong>এখানে ভোট দেবার মাধ্যমে আপনি এই ভ্রমনে অংশগ্রহণ করতে পারবেন</strong>
                <br />
                {service.Name}

                {id}</h1>
            <button className="btn btn-warning fs-bold">Vote</button>
        </div>
    );
};

export default Booking;
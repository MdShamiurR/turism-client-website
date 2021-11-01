import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import e1 from '../../../images/mechanic/e1.jpg'
import e2 from '../../../images/mechanic/e2.jpg'
import e3 from '../../../images/mechanic/e3.jpg'
import e4 from '../../../images/mechanic/e4.jpg'

import Expert from '../Expert/Expert';
// import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: e1,
            name: 'Sajjad Hossain',
            expertize: 'Admin & CEO'

        },
        {
            img: e2,
            name: 'Samit-ur Rahman',
            expertize: 'Management'

        },
        {
            img: e3,
            name: 'Shaikat Khan',
            expertize: 'Plans & Events'

        },
        {
            img: e4,
            name: 'Adiba Newar',
            expertize: 'Customer Service'

        }
    ]



    return (
        <div id="experts" className="container">
            <h2 className="text-warning mt-5 fw-bold"> <Badge bg="secondary">Team Management</Badge></h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
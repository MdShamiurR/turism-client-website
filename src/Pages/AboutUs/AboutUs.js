import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import a1 from '../../images/services/a1.jpg'
import a2 from '../../images/services/a2.jpg'

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <Container>
                <Row>

                    <h2><Badge bg="success">আমাদেরকে নিয়ে কিছু কথা!</Badge></h2>

                    <Col>
                        <img src={a1} alt="" />
                    </Col>

                    <Col>

                        <img src={a2} alt="" />
                        <h3><Badge bg="warning" text="dark">
                            Contact Us:
                        </Badge>{' '}<Badge bg="secondary">01521433507</Badge></h3>
                        <h3><Badge bg="secondary">ghuraghuri2006@gmail.com</Badge></h3>

                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
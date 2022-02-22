import React from 'react'
import { Nav, Row, Container } from 'react-bootstrap'
import { IoLogoTwitter } from 'react-icons/io'
import { FaDiscord } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import './Banner2.css'
const Foooter = () => {
    return (
        <>
            <Container>

                <Row >
                    <center id="footerCenter">
                        <h1>get aped with us!</h1>
                        <p style={{ textDecoration: 'baseline' }}>Sign up for our newsletter</p>
                    </center>

                </Row>
                <Row className='bg-dark'>
                    <Nav className="nav justify-content-between text-white">
                        <Nav.Item>
                            <Nav.Link><small>BIllionaire<br />Club</small>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link> Terms of Service </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link> Privacy Policy</Nav.Link>
                        </Nav.Item>




                        <Nav>
                            <Nav.Item>
                                <Nav.Link><IoLogoTwitter /> </Nav.Link> </Nav.Item>
                            <Nav.Item>
                                <Nav.Link> <FaDiscord /></Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link><BsInstagram /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Nav>

                </Row>
            </Container>

        </>
    )
}

export default Foooter
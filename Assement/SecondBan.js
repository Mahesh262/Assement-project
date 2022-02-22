import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Imag from './Images/Ticket.png'
import './Foot.css'
const SecondBan = () => {
    return (
        <>

            <Container>
                <Row className="secondban pt-3 ">
                    <Col className='col-6' >
                        <h1 ><strong style={{ color: 'goldenrod' }}>The Golden Guests</strong></h1>
                        <p id="tickettext"> The Golden Guests edition by the Billionairw Club are the rest NFTS <br />They are all Hand drawn and have no element in common with<br /> the regular collection</p>
                        <button className='joinClub btn'> Join the us to registor or the presale</button>
                    </Col>
                    <Col className='col-6' id="ticket">
                        <img src={Imag} alt="..." width="300px" />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default SecondBan
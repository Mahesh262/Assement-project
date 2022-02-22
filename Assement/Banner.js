import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Imag from './Images/Monkey.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <>
            <Container fluid className='container-fluid bg-dark text-white'>
                <Row bg='dark'>
                    <Col className="col-sm-6 pt-5">
                        <img src={Imag} alt="...." width="300px" />

                    </Col>

                    <Col className="col-6">
                        <div>
                            <h1 className='sideh1'>Exclusive</h1>
                            <h3 className="sidetext">newest NFT release</h3>
                            <p className='pt-3'>The  <strong>BIllionaire Club </strong> is a private Collection of 10,000 billionaire<br />apes NFTs-unique digital collectibles.The apes are stored as <br />Erc-721 tokens on the Etherium blockChanin and hosted on IPFs<br /> <small className='extras'>Reveal october 20th</small> </p>

                        </div>


                        <form>
                            <input type="text"
                                placeholder='your@email.com|' /> &nbsp;
                            <Button id="register">Register</Button>
                        </form>

                    </Col>
                    <Container>
                        <Row>
                            <h1 id="lowertext">Collections</h1>
                            <small>
                                with more than 180+ hand drawn traits,each NFT is unique and comes with a memebership to an exclusive.<br />
                                group of SuccessFull investors. join an ambitious ever-growing community with multiple benfits and utilites
                            </small>

                        </Row>

                    </Container>

                </Row>
            </Container>

        </>

    )
}

export default Banner
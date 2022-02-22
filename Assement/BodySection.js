import React from 'react'
import { Row, Col, Card, Nav, Container } from 'react-bootstrap'
import './BodySection.css';
import { AiFillStar } from 'react-icons/ai'
import Imag from './Images/Monkey2.png'
import Mag from './Images/Monkey3.png'
import Monk from './Images/Monkey4.png'


const BodySection = () => {
    return (
        <>
            <Container className="Container-fluid sm">
                <Row className='row-sm pt-5'>
                    <Col>
                        <Card className='card'>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Imag} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5  justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* second card */}
                    <Col>
                        <Card>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Mag} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5 justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* third card */}
                    <Col>
                        <Card>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Monk} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5 justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='row  row-sm pt-5'>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Monk} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5 justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* second card */}
                    <Col>
                        <Card>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Imag} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5 justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* third card */}
                    <Col>
                        <Card>
                            <Card.Header>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='...' className="img" />
                                            &nbsp; <span style={{ color: "#3c3b3b" }}>@kinght</span>

                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav className='justify-content-between'>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <AiFillStar />
                                                <strong>244</strong>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={Mag} alt='...' className="card w-100" style={{ border: 'none' }} />
                                <Nav className='nav pt-5 justify-content-between color-white'>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Current bid</p>
                                        <h2>0.54 ETH</h2>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <p style={{ color: "#3c3b3b" }}>Ending in</p>
                                        <h2>12h 55m 2s</h2>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default BodySection
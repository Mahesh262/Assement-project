import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import './Headerfile.css'
import mysvg from './Images/Ccontent.svg'
const Headfile = () => {
    return (
        <>
            <Nav className="justify-content-between bg-dark" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href={mysvg}>BC BILLIONAIRE <br />CLUB</Nav.Link>
                </Nav.Item>
                <Nav className="justify-content-center bg-dark" activeKey="/home">

                    <Nav.Item>
                        <Nav.Link href="/home" className="caret">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Features</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Roadmap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Team
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button id="discord"> Join Our Discord</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Nav>

        </>
    )
}

export default Headfile
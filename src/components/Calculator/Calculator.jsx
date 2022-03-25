import React, { Component } from 'react';
import { Card, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import apple from '../../Img/apple.png'
// import apple from '../../Img/apple.png'
import cr from '../../Img/cr.png'
// import apple from '../../Img/apple.png'

class Calculator extends Component {
    state = {
        open: false
    }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        return (
            <div className="cardText">
                <Container>
                    <h1>$150</h1>
                </Container>
                 <Container>
                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={cr} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                    </Row>
                    <br></br>

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                    </Row>
                    <br></br>

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                    </Row>
                    <br></br>

                </Container>
            </div>
        )
    }
}

export default Calculator

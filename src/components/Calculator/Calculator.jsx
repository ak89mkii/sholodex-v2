import React, { Component } from 'react';
import { Card, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import apple from '../../Img/apple.png'
import amazon from '../../Img/amazon.png'
import cr from '../../Img/cr.png'
import disney from '../../Img/disney.png'
import hbo from '../../Img/hbo.png'
import hulu from '../../Img/hulu.png'
import netflix from '../../Img/netflix.png'
import paramount from '../../Img/paramount.png'
import peacock from '../../Img/peacock.png'
import funimation from '../../Img/funimation.png'

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
                <Container text>
                        <h1 className="total">$150</h1>
                </Container>
                 <Container>
                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={amazon} />
                        </Col>
                        <Col>
                            <Image className="icon" src={cr} />
                        </Col>
                        <Col>
                            <Image className="icon" src={disney} />
                        </Col>
                    </Row>
                    {/* <br></br> */}

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={funimation} />
                        </Col>
                        <Col>
                            <Image className="icon" src={hbo} />
                        </Col>
                        <Col>
                            <Image className="icon" src={hulu} />
                        </Col>
                        <Col>
                            <Image className="icon" src={netflix} />
                        </Col>
                    </Row>
                    {/* <br></br> */}

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={paramount} />
                        </Col>
                        <Col>
                            <Image className="icon" src={peacock} />
                        </Col>
                        {/* <Col>
                            <Image className="icon" src={apple} />
                        </Col>
                        <Col>
                            <Image className="icon" src={apple} />
                        </Col> */}
                    </Row>
                    <br></br>

                </Container>
            </div>
        )
    }
}

export default Calculator

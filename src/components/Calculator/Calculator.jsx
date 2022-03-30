import React, { Component } from 'react';
import { Card, Container, Row, Col, Image, Modal, FormControl, Button } from 'react-bootstrap';
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
import Popup from '../Popup/Popup'

class Calculator extends Component {
    state = {
        appleShow: false,
        appleIcon: undefined,
        amazonShow: false,
        amazonIcon: undefined,
        amount: 0
    }

    // Function Apple: 
    appleAddClick = () => this.setState((prevState) => ({ appleShow: !prevState.appleShow, }))
    appleAddClose = () => this.setState({ appleShow: false })
    appleAdd = () => {
        this.setState({
            amount: this.state.amount + 5,
            appleIcon: apple,
        })
    }
    
    // Function Amazon:
    amazonAddClick = () => this.setState((prevState) => ({ amazonShow: !prevState.amazonShow, }))
    amazonAddClose = () => this.setState({ amazonShow: false })
    amazonAdd = () => {
        this.setState({
            amount: this.state.amount + 9,
            amazonIcon: amazon,
        })
    }
    amazonAdd2 = () => {
        this.setState({
            amount: this.state.amount + 15,
            amazonIcon: amazon,
        })
    }

    render() {
        const { appleShow } = this.state
        const { amazonShow } = this.state
        return (
            <div className="cardText">
                <Popup 
                    appleShow={appleShow}
                    appleAddClose={this.appleAddClose}
                    appleAdd={this.appleAdd}

                    amazonShow={amazonShow}
                    amazonAddClose={this.amazonAddClose}
                    amazonAdd={this.amazonAdd}
                    amazonAdd2={this.amazonAdd2}
                />
                <Container text>
                    <div className="total">
                        <h1>Subscriptions Total</h1>
                        <h5>(Cost Rounded to Nearest Dollar)</h5>
                        <h1>${this.state.amount}</h1>
                        <img className="icon2" src={this.state.appleIcon}/>
                        <img className="icon2" src={this.state.amazonIcon}/>
                    </div>
                </Container>
                 <Container>
                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={apple} onClick={this.appleAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={amazon} onClick={this.amazonAddClick}/>
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

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
        amazonShow: false,
        selectedIcon: [],
        amount: 0
    }

    // Function Apple: 
    appleAddClick = () => this.setState((prevState) => ({ appleShow: !prevState.appleShow, }))
    appleAddClose = () => this.setState({ appleShow: false })
    appleAdd = () => {
        if (this.state.selectedIcon.indexOf(apple) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 5,
                selectedIcon: [...prevState.selectedIcon, apple]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    
    // Function Amazon:
    amazonAddClick = () => this.setState((prevState) => ({ amazonShow: !prevState.amazonShow, }))
    amazonAddClose = () => this.setState({ amazonShow: false })
    amazonAdd = () => {
        this.setState(prevState => ({
            amount: this.state.amount + 9,
            selectedIcon: [...prevState.selectedIcon, amazon]
        }))
    }
    amazonAdd2 = () => {
        this.setState(prevState => ({
            amount: this.state.amount + 15,
            selectedIcon: [...prevState.selectedIcon, amazon]
        }))
    }

    render() {
        return (
            <div className="cardText">
                <Popup 
                    // Modals: 1 to 4
                    appleShow={this.state.appleShow}
                    appleAddClose={this.appleAddClose}
                    appleAdd={this.appleAdd}

                    amazonShow={this.state.amazonShow}
                    amazonAddClose={this.amazonAddClose}
                    amazonAdd={this.amazonAdd}
                    amazonAdd2={this.amazonAdd2}

                    crShow={this.state.crShow}
                    crAddClose={this.crAddClose}
                    crAdd={this.crAdd}
                    crAdd2={this.crAdd2}

                    disneyShow={this.state.amazonShow}
                    disneyAddClose={this.disneyAddClose}
                    disneyAdd={this.disneyAdd}
                    disneyAdd2={this.disneyAdd2}

                    // Modals: 5 to 8
                    funimationShow={this.state.amazonShow}
                    funimationAddClose={this.amazonAddClose}
                    funimationAdd={this.amazonAdd}
                    funimationAdd2={this.amazonAdd2}

                    hboShow={this.state.amazonShow}
                    hboAddClose={this.amazonAddClose}
                    hboAdd={this.amazonAdd}
                    hboAdd2={this.amazonAdd2}

                    huluShow={this.state.amazonShow}
                    huluAddClose={this.amazonAddClose}
                    huluhuluAdd={this.amazonAdd}
                    huluAdd2={this.amazonAdd2}

                    netflixShow={this.state.amazonShow}
                    netflixAddClose={this.amazonAddClose}
                    netflixAdd={this.amazonAdd}
                    netflixAdd2={this.amazonAdd2}
                    
                    // Modals: 9 to 10
                    paramountShow={this.state.amazonShow}
                    paramountAddClose={this.amazonAddClose}
                    paramountAdd={this.amazonAdd}
                    paramountAdd2={this.amazonAdd2}

                    peacockShow={this.state.peacockShow}
                    peacockAddClose={this.peacockAddClose}
                    peacockAdd={this.peacockAdd}
                    peacockAdd2={this.peacockAdd2}
                />
                <Container text>
                    <div className="total">
                        <h1>Month Total</h1>
                        <h5>(Cost Rounded to Nearest Dollar)</h5>
                        <h1 className="number">${this.state.amount}</h1>
                        {this.state.selectedIcon.map((icon) => (
                            <img className="icon2" src={icon}/>
                        ))}
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

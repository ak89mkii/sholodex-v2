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
        crShow: false,
        disneyShow: false,
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
        if (this.state.selectedIcon.indexOf(amazon) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 9,
                selectedIcon: [...prevState.selectedIcon, amazon]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    amazonAdd2 = () => {
        if (this.state.selectedIcon.indexOf(amazon) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 15,
                selectedIcon: [...prevState.selectedIcon, amazon]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Crunchyroll:
    crAddClick = () => this.setState((prevState) => ({ crShow: !prevState.crShow, }))
    crAddClose = () => this.setState({ crShow: false })
    crAdd = () => {
        if (this.state.selectedIcon.indexOf(cr) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, cr]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    crAdd2 = () => {
        if (this.state.selectedIcon.indexOf(cr) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 10,
                selectedIcon: [...prevState.selectedIcon, cr]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    crAdd3 = () => {
        if (this.state.selectedIcon.indexOf(cr) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 15,
                selectedIcon: [...prevState.selectedIcon, cr]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Disney:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Funimation:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function HBO:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Hulu:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Netflix:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Paramount:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }

    // Function Peacock:
    disneyAddClick = () => this.setState((prevState) => ({ disneyShow: !prevState.disneyShow, }))
    disneyAddClose = () => this.setState({ disneyShow: false })
    disneyAdd = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 8,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
    }
    disneyAdd2 = () => {
        if (this.state.selectedIcon.indexOf(disney) == -1) {
            this.setState(prevState => ({
                amount: this.state.amount + 14,
                selectedIcon: [...prevState.selectedIcon, disney]
            }))
        } else {
            alert("You already selected a tier from this company.");
        }
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
                    crAdd3={this.crAdd3}

                    disneyShow={this.state.disneyShow}
                    disneyAddClose={this.disneyAddClose}
                    disneyAdd={this.disneyAdd}
                    disneyAdd2={this.disneyAdd2}

                    // Modals: 5 to 8
                    funimationShow={this.state.funimationShow}
                    funimationAddClose={this.funimationAddClose}
                    funimationAdd={this.funimationAdd}
                    funimationAdd2={this.funimationAdd2}

                    hboShow={this.state.hboShow}
                    hboAddClose={this.hboAddClose}
                    hboAdd={this.hboAdd}
                    hboAdd2={this.hboAdd2}

                    huluShow={this.state.huluShow}
                    huluAddClose={this.huluAddClose}
                    huluAdd={this.huluAdd}
                    huluAdd2={this.huluAdd2}

                    netflixShow={this.state.netflixShow}
                    netflixAddClose={this.netflixAddClose}
                    netflixAdd={this.netflixAdd}
                    netflixAdd2={this.netflixAdd2}
                    
                    // Modals: 9 to 10
                    paramountShow={this.state.paramountShow}
                    paramountAddClose={this.paramountAddClose}
                    paramountAdd={this.paramountAdd}
                    paramountAdd2={this.paramountAdd2}

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
                            <Image className="icon" src={cr} onClick={this.crAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={disney} onClick={this.disneyAddClick}/>
                        </Col>
                    </Row>
                    {/* <br></br> */}

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={funimation} onClick={this.funimationAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={hbo} onClick={this.hboAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={hulu} onClick={this.huluAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={netflix} onClick={this.netflixAddClick}/>
                        </Col>
                    </Row>
                    {/* <br></br> */}

                    <Row columns={1}>
                        <Col>
                            <Image className="icon" src={paramount} onClick={this.paramountAddClick}/>
                        </Col>
                        <Col>
                            <Image className="icon" src={peacock} onClick={this.peacockAddClick}/>
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

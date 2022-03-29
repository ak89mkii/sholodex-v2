import React, { Component, createRef } from 'react'
import '../../App.css'
import { Card, Container, Row, Col, Image, Modal, FormControl, Button } from 'react-bootstrap';
import logo from '../../Img/01.png';
import Toggle from '../Toggle/Toggle.jsx';

const Popup = (props) => {
    return (
        <div>
            {/* Apple TV+ */}
            <Modal show={props.appleShow} onHide={props.appleAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Apple TV+</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apple TV+ offers a 7 day free trial, then costs $4.99 per month. There is currently only one subscription tier.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.appleAdd}>
                        Apple TV+ $4.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Amazon Prime Video */}
            <Modal show={props.amazonShow} onHide={props.amazonAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Amazon Prime Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>Amazon Prime Video offers a 30 day free trial, then costs $8.99 per month (Prime Video Only) or $14.99 per month (Full Amazon Prime). You can also pay an upfront cost of $139 for a yearly membership, costing about $40  less than paying $14.99 per month for a year (Totaling $180). </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.amazonAdd}>
                        Prime Video Only $8.99
                    </Button>
                    <Button variant="warning" onClick={props.amazonAdd2}>
                        Full Prime $14.99
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Popup;
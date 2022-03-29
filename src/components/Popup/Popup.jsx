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
                <Modal.Body>Apple TV+ offers a 7 day free trial, then costs $4.99 per month.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.appleAdd}>
                        + Standard $4.99
                    </Button>
                    <Button variant="primary" onClick={props.appleAddClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Amazon Prime Video */}
            <Modal show={props.amazonShow} onHide={props.amazonAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Amazon Prime Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>Amazon Prime Video offers a 30 day free trial, then costs $8.99 per month.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.amazonAdd}>
                        + Standard $8.99
                    </Button>
                    <Button variant="primary" onClick={props.amazonAddClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Popup;
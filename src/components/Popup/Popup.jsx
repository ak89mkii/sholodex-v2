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
                <Modal.Body>Apple TV+ offers a (7) seven-day free trial, then costs $4.99 per month. There is currently only (1) one subscription tier.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.appleAdd}>
                        <b>Apple TV+</b> | $4.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Amazon Prime Video */}
            <Modal show={props.amazonShow} onHide={props.amazonAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Amazon Prime Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>Amazon Prime Video offers a (30) thirty-day free trial, then costs $8.99 per month for <b>Prime Video</b> only or $14.99 per month  for a <b>Full Amazon Prime</b> membership. You can also pay an upfront cost of $139 for a yearly membership, costing about $40 less than paying $14.99 per month for a year, which would total about $180. </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.amazonAdd}>
                        <b>Prime Video</b> | $8.99
                    </Button>
                    <Button variant="warning" onClick={props.amazonAdd2}>
                        <b>Full Amazon Prime</b> | $14.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Crunchyroll */}
            <Modal show={props.crShow} onHide={props.crAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crunchyroll</Modal.Title>
                </Modal.Header>
                <Modal.Body>Crunchyroll offers a free limited account with ads or a (14) fourteen-day free "Premium" trial. There are (3) three "Premium" tiers , <b>Fan</b> at $7.99, <b>Mega Fan</b> at $9.99, or <b>Ultimate Fan</b> at $14.99 per month. All 3 "Premium" tiers have no ads. <b>Mega Fan</b> and <b>Ultimate Fan</b> subscriptions allow for simultaneous streaming and access to certain Cruncyroll gifted merchandise and events.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.crAdd}>
                        <b>Fan</b> | $7.99
                    </Button>
                    <Button variant="warning" onClick={props.crAdd2}>
                        <b>Mega Fan</b> | $9.99
                    </Button>
                    <Button variant="warning" onClick={props.crAdd3}>
                        <b>Ultimate Fan</b> | $14.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Disney+ */}
            <Modal show={props.disneyShow} onHide={props.disneyAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Disney+</Modal.Title>
                </Modal.Header>
                <Modal.Body>Disney+ does not offer a free trial period. Tiers include a <b>Disney+</b> only level at $7.99 per month or a bundle of <b>Disney+, Hulu, and ESPN</b> at $13.99 per month. Users may also sign up for a yearly membership for an upfront cost of $80, costing about $16 less than paying monthly for a year.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.disneyAdd}>
                        <b>Disney+</b> | $7.99
                    </Button>
                    <Button variant="warning" onClick={props.disneyAdd2}>
                        <b>Disney+, Hulu, & ESPN</b> | $13.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Funimation */}
            <Modal show={props.funimationShow} onHide={props.funimationAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Funimation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Funimation . </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.funimationAdd}>
                        <b>Premium</b> $4.99
                    </Button>
                    <Button variant="warning" onClick={props.funimationAdd}>
                        <b>Premium Plus</b> $4.99
                    </Button>
                    <Button variant="warning" onClick={props.funimationAdd}>
                        <b>Premium</b> $4.99
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Popup;
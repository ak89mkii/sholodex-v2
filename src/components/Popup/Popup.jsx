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
                <Modal.Body>Amazon offers a (30) thirty-day free trial, then costs $8.99 per month for <b>Prime Video</b> only or $14.99 per month  for a <b>Full Amazon Prime</b> membership. You can also pay an upfront cost of $139 for a yearly membership, costing about $40 less than paying $14.99 per month for a year, which would total about $180. </Modal.Body>
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
                <Modal.Body>Crunchyroll offers a <b>Free</b> limited account with ads or a (14) fourteen-day free "Premium" trial. There are (3) three "Premium" tiers , <b>Fan</b> at $7.99, <b>Mega Fan</b> at $9.99, or <b>Ultimate Fan</b> at $14.99 per month. All (3) three "Premium" tiers have no ads. <b>Mega Fan</b> and <b>Ultimate Fan</b> subscriptions allow for simultaneous streaming and access to certain Crunchyroll gifted merchandise and events.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.crAdd4}>
                        <b>Free</b> | Free
                    </Button>
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
                <Modal.Body>Funimation is merging with Crunchyroll, which was aquired by Funimation's parent company Sony.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Check out Crunchyroll</h5>
                    </Container>
                </Modal.Footer>
            </Modal>

            {/* HBO */}
            <Modal show={props.hboShow} onHide={props.hboAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>HBO Max</Modal.Title>
                </Modal.Header>
                <Modal.Body>HBO Max does not offer a free trial period. Tiers include a <b>With Ads</b> level at $9.99 per month or an <b>Ad-Free</b> level at $14.99 per month. Users may also sign up for a yearly membership for an upfront cost of $99.99 <b>With Ads</b> or $149.99 <b>Ad-Free</b>. This costs about $20 less for the former and $30 less for the latter than paying monthly for a year.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.hboAdd}>
                        <b>With Ads</b> | $9.99
                    </Button>
                    <Button variant="warning" onClick={props.hboAdd2}>
                        <b>Ad-Free</b> | $14.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Hulu */}
            <Modal show={props.huluShow} onHide={props.huluAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Hulu</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hulu offers a (30) thirty-day free trial of either <b>Hulu</b> or <b>Hulu (No Ads)</b> tiers as well as (4) four  paid subscription tiers. Tiers include a <b>Hulu</b> level at $9.99 per month, a <b>Hulu (No Ads)</b> level at $14.99 per month, <b>Hulu, Live TV, Disney+, & ESPN+</b> at $69.99, or a $75.99 <b>Hulu (No Ads), Live TV, Disney+, & ESPN+</b> membership.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.huluAdd}>
                        <b>Hulu</b> | $6.99
                    </Button>
                    <Button variant="warning" onClick={props.huluAdd2}>
                        <b>Hulu (No Ads)</b> | $12.99
                    </Button>
                    <Button variant="warning" onClick={props.huluAdd3}>
                        <b>Hulu, Live TV, Disney+, & ESPN+</b> | $69.99
                    </Button>
                    <Button variant="warning" onClick={props.huluAdd4}>
                        <b>Hulu (No Ads), Live TV, Disney+, & ESPN+</b> | $75.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Netflix */}
            <Modal show={props.netflixShow} onHide={props.netflixAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Netflix</Modal.Title>
                </Modal.Header>
                <Modal.Body>Netflix does not offer a free trial period. Tiers include a <b>Basic</b> level at $9.99 per month, a <b>Standard</b> level at $15.49 per month, or a $19.99 <b>Premium</b> subscription.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.netflixAdd}>
                        <b>Basic</b> | $9.99
                    </Button>
                    <Button variant="warning" onClick={props.netflixAdd2}>
                        <b>Standard</b> | $15.49
                    </Button>
                    <Button variant="warning" onClick={props.netflixAdd3}>
                        <b>Premium</b> | $19.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Paramount */}
            <Modal show={props.paramountShow} onHide={props.paramountAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Paramount+</Modal.Title>
                </Modal.Header>
                <Modal.Body>Paramount+ offers a (30) thirty-day free trial then offers (2) two main subscription tiers, an <b>Essential</b> level at $4.99 per month or a <b>Premium</b> level at $9.99 per month. There are also Showtime bundles at a reduced total cost, <b>Essential Plan + SHOWTIME</b> at $11.99 per month or <b>Premium Plan + SHOWTIME</b> at $14.99 per month. Paramount+ offers annual subscriptions for both tiers and bundles, where you can save about $10, $20, $24, or $30 (from least expensive to most expensive subscriptions) in total versus paying monthly for a year.</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.paramountAdd2}>
                        <b>Essential</b> | $4.99
                    </Button>
                    <Button variant="warning" onClick={props.paramountAdd2}>
                        <b>Premium</b> | $9.99
                    </Button>
                    <Button variant="warning" onClick={props.paramountAdd3}>
                        <b>Essential Plan + SHOWTIME</b> | $11.99
                    </Button>
                    <Button variant="warning" onClick={props.paramountAdd4}>
                        <b>Premium Plan + SHOWTIME</b> | $14.99
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Peacock */}
            <Modal show={props.peacockShow} onHide={props.peacockAddClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Peacock</Modal.Title>
                </Modal.Header>
                <Modal.Body>Peacock offers a (7) seven-day free trial as well as a <b>Free</b> ad-supported limited tier. There are also (2) two paid tiers, <b>Peacock Premium</b>, with ads, for $4.99 or <b>Peacock Premium Plus</b>, without ads, for $9.99 per month. You can also pay an upfront cost of $49.99 for the former or $99.99 for the latter for about a $10 or $20 annual savings respectively.</Modal.Body>
                <Modal.Footer>
                <Container>
                        <h5 className='s1'>Select a Tier:</h5>
                    </Container>
                    <Button variant="warning" onClick={props.peacockAdd}>
                        <b>Free</b> | Free
                    </Button>
                    <Button variant="warning" onClick={props.peacockAdd2}>
                        <b>Peacock Premium</b> | $4.99
                    </Button>
                    <Button variant="warning" onClick={props.peacockAdd3}>
                        <b>Peacock Premium Plus</b> | $9.99
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Popup;
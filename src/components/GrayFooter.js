import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Button, Container, Navbar, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import './../css/Pricing.css';


library.add(fab, faEnvelope);

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    minWidth:'100%',
    width: '100%',
    backgroundColor: '#B0B4C3',
    zIndex:0

  };

  const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
};

export class GrayFooter extends React.Component {
    render() {
        return(
            <Container style={{border: 'black solid'}, {backgroundColor: '#EEF1F5'}, {fontFamily: 'Jost'}}>
                <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer} sticky='bottom'/>
                    <Row style={{paddingTop:'5%'}}>
                        <Col lg={2} md={2} xs={1}>
                        <Row>
                            <Col>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'black'}}  href="/features"> features </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'black'}}  href="/pricing"> pricing </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '10px'}, {color: 'black'}}  href="/about"> about </a>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'black'}}  href="/contact"> contact </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'black'}}  href="/signin"> login </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '10px'}, {color: 'black'}}  href="/signup"> signup </a>
                                </Row>
                            </Col>
                        </Row>
                        </Col>
                        <Col style={{float:'right'}, {textAlign: 'right'}, {alignContent: 'right'}, {paddingLeft: '23%'}}>
                            <Row>
                                <a className='logo' style={{marginTop: '7px'}}  href="/">o</a>
                                <a className='logoTitle' style={{fontSize: '40px'}, {color: 'black'}}  href="/">circal</a>
                            </Row>
                                                            

                        </Col>
                        
                        <Col style={{alignContent: 'right'}, {float: 'right'}, {textAlign: 'right'}, {marginLeft: '10%'}, {marginTop: '15px'}}>
                            <Row style={{marginBottom: '10px'}}>
                                <Col lg={3} style={{padding:'3px'}}>
                                    
                                </Col>
                                <Col style={{padding:'3px'}, {alignContent: 'center'}, {float: 'center'}, {textAlign: 'center'}}>
                                    <a href ="https://www.linkedin.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                                    </a>
                                    <a href = "https://instagram.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faFacebookSquare} size='2x'/>
                                    </a>
                                    <a href = "https://facebook.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faTwitterSquare} size='2x'/>
                                    </a>
                                    <a href = "https://twitter.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faInstagram} size='2x'/>
                                    </a>
                                </Col>
                            </Row>
                            <Row style={{float: 'right'}, {textAlign: 'right'}, {alignContent: 'right'}}>
                                <Col lg={4} md={2} xs={1}>
                                    
                                </Col>
                                <a style={{fontSize: '15px'}, {textAlign: 'right'}, {padding:'5px'}, {color: 'black'}}  href="/"> copyright </a>
                                <p style={{fontSize: '15px'}, {textAlign: 'right'}, {padding:'5px'}, {color: 'black'}}  href="/"> - </p>
                                <a style={{fontSize: '15px'}, {textAlign: 'right'}, {padding:'5px'}, {color: 'black'}}  href="/"> security </a>
                                <p style={{fontSize: '15px'}, {textAlign: 'right'}, {padding:'5px'}, {color: 'black'}}  href="/"> - </p>
                                <a style={{fontSize: '15px'}, {textAlign: 'right'}, {padding:'5px'}, {color: 'black'}}  href="/"> terms </a>
                                     
                            </Row>
                        </Col>
                        
                    </Row>
                        
            </Container>
        );
    }
}

export default GrayFooter;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import {Row, Col, Button, Card} from 'react-bootstrap'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Skills_Endorsements.css'
class Skills_Endorsements extends Component {
    render() {
        return (<>
         
          
            <Row style={{marginBottom: "30px"}}>
            <Col sm={8}>
              <div id="accordion" className="shadow">
                <div class="card">
                    <div class="card-body">
                       <h4>Skills&Endorsements</h4>
                       <Button id="quiz">Take Skill quiz</Button>   
                       <h6 className="mt-4"><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link>Full-Stack Development</h6>
                       <hr></hr>
                       <h6><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Back-End Development</h6>
                       <hr></hr>
                       <h6><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                      
                       
                    
                    </div>
                    
                    <Accordion defaultActiveKey="0" >
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                            See more <FaChevronDown />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h4>Tools & Technologies</h4>
                                        <hr></hr>
                                <Row className="text-left">
                                
                                    <Col md={6}>
                                        
                                <ul > 
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Java Script</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> React JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Node JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> HTML</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> CSS</li>
                                    
                                </ul>
                                </Col>
                                <Col md={6} >
                                <ul > 
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Java Script</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> React JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> Node JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> HTML</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  color={'#1a75ff'} style={{marginRight: "10px"}}/></Link> CSS</li>
                                    
                                </ul>
                                </Col>
                                </Row>
                                <h4>Languages</h4>
                                        <hr></hr>
                                <Row>
                                     <Col md={12}>
                                        <ul > 
                                          <li><FaPlusCircle size="20px" /> English</li>
                                           
                                        </ul>
                                      </Col>
                                 </Row>
                                 <h4>Other Skills</h4>
                                        <hr></hr>
                                <Row>
                                <Col md={6}>
                                        <ul > 
                                            <li><FaPlusCircle size="20px" /> Gulp</li>
                                            <li><FaPlusCircle size="20px" /> Animation.css</li>
                                           
                                        </ul>
                                        </Col>
                                        <Col md={6} >
                                        <ul > 
                                            <li><FaPlusCircle size="20px" /> Modernizer.js</li>
                                            
                                        </ul>
                                        </Col>
                                 </Row>
                                
                             </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                   
                
                    </div>
                    </div>
                
            </Col>
                    <Col sm={4}>
                    </Col>
            </Row>
           


  </>
        );
    }
}

export default Skills_Endorsements;
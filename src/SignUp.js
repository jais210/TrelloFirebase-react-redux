import React,{component} from 'react';
import {NavLink} from 'react-router-dom';
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';
import './SignUp.css';


const SignUp = ()=> {
    return(
      <div className = "singUp">
      <Form horizontal >
              
        <FormGroup controlId="formHorizontalEmail">
         <Col className = "logo" componentClass={ControlLabel} sm={2}>
          </Col>
  
          <Col sm={10}>
          <FormControl  id="formControlsText" label="Text" className = "input" type="text" placeholder="First name" />
          </Col>
  
        <Col sm={10}>
         <FormControl className = "input" type="text" placeholder="Last name" />
       </Col>
  
    <Col sm={10}>
      <FormControl className = "input" type="email" placeholder="Email" />
    </Col>
  </FormGroup>
  
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>          
    </Col>
    <Col sm={10}>
      <FormControl className = "input" type="password" placeholder="Password"/>
    </Col>
    <Col sm={10}>
      <FormControl className = "input" type="password" placeholder="Confirm password"/>
    </Col>
  </FormGroup>
  
  <FormGroup>
    <Col smOffset={2} sm={10}>
    <NavLink to={"/signin"}><Button className= "btn" type="submit">
        Sign in
      </Button></NavLink>
    </Col>
    <Col smOffset={2} sm={10}>
    <a className = "a" href="/sign_up" data-reactid=".0.0.0.2">Create new account</a>
    </Col> 
           
  </FormGroup>
  </Form>
  
  </div>      
  )
   
}
    
export default SignUp;
import React,{component} from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './actions'
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';
import './SignUp.css';

// Utilizar Redirect 10:30 am Revisión. 
const SignUp = (success)=> {
    return(
      <div className = "singUp">
        {
          success && <Redirect to = "/board"/>
        }
      <Form horizontal onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp (this.fullNameRef.value, this.emailRef.value, this.passwordRef.value, this.surveyRef.value, this.questionRef.value, this.optionsRef.value) 
               } }>
              
        <FormGroup controlId="formHorizontalEmail">
         <Col className = "logo" componentClass={ControlLabel} sm={2}>
          </Col>
  
          <Col sm={10}>
          <FormControl  id="formControlsText" label="Text" className = "input" type="text" placeholder="First name" ref = {e => this.fullNameRef = e}/>
          </Col>
  
        <Col sm={10}>
         <FormControl className = "input" type="text" placeholder="Last name" />
       </Col>
  
    <Col sm={10}>
      <FormControl className = "input" type="email" placeholder="Email" ref = {e => this.emailRef = e} />
    </Col>
  </FormGroup>
  
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>          
    </Col>
    <Col sm={10}>
      <FormControl className = "input" type="password" placeholder="Password" ref = {e => this.passwordRef = e}/>
    </Col>
    <Col sm={10}>
      <FormControl className = "input" type="password" placeholder="Confirm password"/>
    </Col>
  </FormGroup>
  
  <FormGroup>
    <Col smOffset={2} sm={10}>
    <Button className= "btn" type="submit">
        Sign in
      </Button>
    </Col>
    <Col smOffset={2} sm={10}>
    <a className = "a" href="/sign_up" data-reactid=".0.0.0.2">Create new account</a>
    </Col> 
           
  </FormGroup>
  </Form>
  
  </div>      
  )
   
}
const mapToProps = ({success})  => ({success}) 
export default connect(mapToProps)(signUp) ;
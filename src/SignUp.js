import React,{component} from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './actions'
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';
import './Signup.css';

// Utilizar Redirect 10:30 am Revisión. 
const Signup = (successLogin)=> {
    return(
      <div className = "singUp">
        {
          // successLogin && <Redirect to = "/board"/>
        }
      <Form horizontal onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp (this.firstNameRef.value, this.lastNameRef.value, this.emailRef.value, this.passwordRef.value) 
               } }>
              
        <FormGroup controlId="formHorizontalEmail">
         <Col className = "logo" componentClass={ControlLabel} sm={2}>
          </Col>
  
          <Col sm={10}>
          <FormControl  id="formControlsText" label="Text" className = "input" type="text" placeholder="First name" ref = {e => this.firstNameRef = e}/>
          </Col>
  
        <Col sm={10}>
         <FormControl className = "input" type="text" placeholder="Last name" ref = {e => this.lastNameRef = e}/>
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
    <NavLink className = "a" to='signin'>Sign In</NavLink>
    </Col> 
           
  </FormGroup>
  </Form>
  
  </div>      
  )
   
}
const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(Signup) ;
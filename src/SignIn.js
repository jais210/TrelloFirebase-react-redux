import React from 'react';
import './SignIn.css';
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SignIn = () => {

  return (
    <header>
          <div className="singIn">
      <Form horizontal >
        <FormGroup controlId="formHorizontalEmail">
          <Col className="logo" componentClass={ControlLabel} sm={2}>

          </Col>
          <Col sm={10}>
            <FormControl className="input" type="email" placeholder="quinsal@trello.com" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
          </Col>
          <Col sm={10}>
            <FormControl className="input" type="password" placeholder="add your password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
          <NavLink to="/boards/"><Button className="button" type="submit">
              Sign in
            </Button></NavLink>
          </Col>
          </FormGroup>

            <FormGroup>
            {/* <NavLink to="/signup"><a className="a" href="/sign_up" data-reactid=".0.0.0.2">Create new account</a></NavLink> */}
            </FormGroup>
 </Form>        
 </div>
    </header>
    
  )
}

export default SignIn;


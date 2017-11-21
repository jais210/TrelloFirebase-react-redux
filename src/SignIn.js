import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signIn, signOut, signUp } from './actions';
import './SignIn.css';

const SignIn = ({ success }) => {

  return (
    <header>
      <div className="singIn">
        {
          success && <Redirect to="/board" />
        }
        <Form horizontal onSubmit={
          e => {
            e.preventDefault();
            signIn(this.emailInputRef.value, this.passwordInputRef.value)
          }
        } >
          <FormGroup controlId="formHorizontalEmail">
            <Col className="logo" componentClass={ControlLabel} sm={2}>

            </Col>
            <Col sm={10}>
              <FormControl className="input" type="email" placeholder="quinsal@trello.com" ref={e => this.emailInputRef = e} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl className="input" type="password" placeholder="add your password" ref={e => this.passwordInputRef = e} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button className="button" type="submit">
                Sign in
            </Button>
            </Col>
          </FormGroup>

          <FormGroup>

            <NavLink className="a" to='/signup' >Create new account</NavLink>
          </FormGroup>
        </Form>
      </div>
    </header>

  )
}

const mapToProps = ({ success }) => ({ success })
export default connect(mapToProps)(SignIn);


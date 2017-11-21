import React from 'react';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import { Boards, BoardDetail } from './Boards';
import Header from './Header';
import { connect } from 'redux-zero/react';
import './Trello.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


const Trello = ({ login, boards, user }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signin' render={() => <SignIn user={user} login={login} />} />
          <Route path='/signup' render={() => <SignUp user={user} />} />
          <Route exact path="/boards" render={() => (
            <div>
              <Header user={user} />
              <Boards array={boards} />
            </div>
          )} />
          {
            boards && boards.map((item, index) => {
              const path = "/boards/" + (index + 1) + '-' + item.name;
              return <Route path={path} render={() => (
                <div>
                  <Header user={user} />
                  <BoardDetail board={boards[index]} />
                </div>
              )}
              />
            })
          }
          <Route render={() => <Redirect to={user ? "/boards" : "/signin"} />} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

const mapToProps = ({ login, boards, user }) => ({ login, boards, user });
export default connect(mapToProps)(Trello);
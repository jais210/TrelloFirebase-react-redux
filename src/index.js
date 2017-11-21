// import React from 'react';
// import ReactDOM from 'react-dom';
// import Trello from './Trello';
// import registerServiceWorker from './registerServiceWorker';
// import { Provider } from "redux-zero/react";
// import store from "./store";
// import {probando} from './actions';

// const Index = () => (
// 	<Provider store={store}>
// 		<Trello />
// 	</Provider>
// );

// ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Board from './Board';
import UserBoards from './UserBoards';

import {Provider} from 'redux-zero/react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';


const Index = () =>  (
   <Provider store={store}> 
      <HashRouter>
         <Switch>
            <Route name="signin" exact path = "/signin" component = {SignIn}/>
            <Route name="signup"  exact path = "/signup" component = {SignUp}/>     
            <Route name="board"  exact path = "/board" component = {Board}/>
            <Route name="userboards"  exact path = "/userboards" component = {UserBoards}/>
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();


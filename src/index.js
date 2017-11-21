import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin';
import Signup from './Signup';
import Board from './Board';
import Userboards from './Userboards';

import {Provider} from 'redux-zero/react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';


const Index = () =>  (
   <Provider store={store}> 
      <HashRouter>
         <Switch>
            <Route name="signin" exact path = "/signin" component = {Signin}/>
            <Route name="signup"  exact path = "/signup" component = {Signup}/>     
            <Route name="board"  exact path = "/board" compupent = {Board}/>
            <Route name="userboards"  exact path = "/userboards" component = {Userboards}/>
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();


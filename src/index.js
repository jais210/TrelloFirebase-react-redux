import React from 'react';
import ReactDOM from 'react-dom';
import Trello from './Trello';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from "./store";
import {probando} from './actions';

const Index = () => (
	<Provider store={store}>
		<Trello />
	</Provider>
);

// probando();
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
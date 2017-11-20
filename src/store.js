import createStore from 'redux-zero'

const initialState = {
    user:'',
    boards:[],
    login: false
}

const store = createStore(initialState);
export default store; 



import createStore from 'redux-zero'
// identifico los datos a inicializar en mi store
const initialState = {
   successLogin : false,
  
   user : {
      id : null,
      email :  null,
      firstName :  null,
      lastName :  null,
               
   },
   boards : null,
   stages : null,
   tasks : null   
}

const store = createStore (initialState);

console.log(store);
export default store


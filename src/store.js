
import createStore from 'redux-zero'
// identifico los datos a inicializar en mi store
const initialState = {
   successLogin : false,

   user : {
      id : null,
      email :  null,
      fullname :  null,
      survey :  null,
      question :  null,
      options :  null            
   },
   boards : null,
   stages : null,
   tasks : null   
}

const store = createStore (initialState);
export default store


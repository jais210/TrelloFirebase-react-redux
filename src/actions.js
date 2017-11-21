import store from './store';
import {auth, database} from './firebase';

export function signIn (user, password) {
    auth.signInWithEmailAndPassword(user, password).then (userObj => {
 
       database.ref ('users/' + userObj.uid).once ('value').then ( res => {
          const fullUserInformation = res.val(); 
 
          console.log ('full Information ', fullUserInformation);
          store.setState ( {
             user: {
                id : userObj.uid,
                email :  fullUserInformation.email,
                firstName :  fullUserInformation.firstName,
                lastName :  fullUserInformation.lastName                 
             }
          })
       })
    })
 }

export function signUp (firstName, lastName, email, password) 
{
   console.log ('signUp' + firstName + lastName + email + password);

   auth.createUserWithEmailAndPassword (email, password).then ( user => {
      let newUser = {
         firstName, lastName, email
      }
      database.ref ('users/' + user.uid).set (newUser);  
         
      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInformation = res.val(); 

         console.log ('full Information ', fullUserInformation);
         store.setState ( {
            user: {
               id : user.uid,
               email :  fullUserInformation.email,
               firstName :  fullUserInformation.firstName,
               lastName :  fullUserInformation.lastName           
            }
         })
      })

   })
   
}

export function signOut () {
   auth.signOut();
   store.setState ( {
      successLogin : false,
      user: {
         id :'',
         email :  ''
      }
   })
}

export function addNewBoard (title, userId) {

   database.ref ('boards/').push ({
      title: title,
      user_id: userId
   }).then ( res => {
      console.log ('board id: ', res.key)
   });   

}



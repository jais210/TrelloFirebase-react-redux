import store from './store';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2QTBGifnDuVlIPhTD8uhoI2cqtWrcm4Q",
    authDomain: "trello-88f82.firebaseapp.com",
    databaseURL: "https://trello-88f82.firebaseio.com",
    projectId: "trello-88f82",
    storageBucket: "trello-88f82.appspot.com",
    messagingSenderId: "242725123531"
  };
  firebase.initializeApp(config);

export function readBoard(user) {
    firebase.database().ref(user + '/boards').on('value', res => {
        let stages = [];
        res.forEach(snap => {
            const stage = snap.val();
            stages.push(stage);
        })
        console.log(stages);
        store.setState({
            boards: stages
        })
    });
}
export const addBoard = (value) => {
    let user = store.getState().user;
    let boards = [...store.getState().boards];
    console.log(value);
    let newBoard = {
        name: value,
        id: boards.length + '-' + value
    }
    firebase.database().ref(user.id + '/boards/' + newBoard.id).set(newBoard).then(() => console.log('nooo'));
}
export const addList = (value, board) => {
    let user = store.getState().user;
    let list = board.list ? board.list : [];
    list.push({ name: value });
    firebase.database().ref(user.id + '/boards/' + board.id + '/list').set(list).then(() => console.log('lol'));

}
export const addCard = (value, board, list) => {
    let user = store.getState().user;
    let newList = board.list.map(b => {
        if (b.name === list) {
            if (b.cards) {
                b.cards.push(value);
            } else {
                b.cards = [value];
            }
        }
        return b;
    });

    firebase.database().ref(user.id + '/boards/' + board.id + '/list').set(newList).then(() => console.log('sip'));

}
export function signUp(firstName, lastName, email, pass) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        let newuser = {
            firstName, lastName, email
        }
        firebase.database().ref('users/' + user.uid).set(newuser);

    }).catch(e => {
        console.log(e)
    })

}

export function signOut() {
    firebase.auth().signOut();
    store.setState({
        user: ''
    })
}
export function signIn(user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(e => {
        console.log(e.message)
        store.setState({
            login: true
        })
    })
}
// estoy cambiando algo
// export const probando = () => {
//     firebase.auth().onAuthStateChanged(usuario => {
//         if (usuario) {
//             console.log('si');
//             firebase.database().ref('users/' + usuario.uid).once('value').then(res => {
//                 const fullUserInfo = res.val();
//                 store.setState({
//                     user: {
//                         id: 'users/' + usuario.uid,
//                         name: fullUserInfo.firstName,
//                         lastName: fullUserInfo.lastName
//                     }
//                 })
//                 console.log('full info ', fullUserInfo);

//             })
//             readBoard('users/' + usuario.uid);
//         } else {
//             console.log('no')
//         }
//     });

// }  
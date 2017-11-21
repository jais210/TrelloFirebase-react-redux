import store from './store';
import {auth, database} from './firebase';

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

export function signOut() {
    firebase.auth().signOut();
    store.setState({
        user: ''
    })
}

import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp, addNewBoard} from './actions'; 

const Board = ({successLogin, user, boards, stages, tasks}) => {

   let list =  null;
   if (boards)
      list = boards.map ( board => {
         return  <div key = {board.id} 
                        title = {board.title}
                        boardId = {board.id}
                        stages={stages == null ? null :  
                                    stages.filter (e => e.board_id == board.id )}  
                        tasks = {tasks}></div>
      }) 
   return (
      <div>
           <form onSubmit = { e => {
              e.preventDefault();
              addNewBoard (this.boardInputRef.value, user.id)
           }}>
           <input  placeholder="Board Name" ref= {e => this.boardInputRef = e}/>
              <button type="submit">
                  Push a new Board
               </button> 
            </form>
            <ul>
               {list}
            </ul>

         {
            !successLogin  && <Redirect to = "/signin" />
         }

         <button onClick = {signOut}>
            SignOut
         </button>   
            <div>
                 {user.email} - {user.fistName} - {user.lastName} 
            </div>

      </div>
   )
}

const mapToProps = ({successLogin, user, boards, stages, tasks})  => ({successLogin, user, boards, stages, tasks})
export default connect(mapToProps)(Board) 
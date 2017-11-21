import React from 'react'
import {addStage} from './actions'
import Stages from './Stages';

class UserBoards extends React.Component {
   render () {
      const {title, boardId, stages, tasks} = this.props;
      
      let list = null;
      if (stages)
         list =  stages.map ( stage => {
         return <Stages  key={stage.id} title={stage.title} stageId = {stage.id}
            tasks = { tasks == null ? null : tasks.filter ( task => task.stageId === stage.id )}
         />
      });
      return (
         <div className = "Board-container">
            <h3> {title} </h3>
            <div className = "Board-column">
               {list}
            </div>
            <div className = "Board-column">
               <form onSubmit = { (e) => {
                  e.preventDefault();
                  addStage (this.stageInputRef.value, boardId);
               }}>
                  <input type="text" ref = {e => this.stageInputRef = e}/>
                  <button type="submit">
                     save list
                  </button>
                  </form>
               </div>
         </div>
      ); 
   }
}

export default UserBoards;
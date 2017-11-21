import React from 'react'
import Task from './Task'
import {addTask} from './actions'

class Stages  extends React.Component{
   render () {
      let list = null ;
      if (this.props.tasks)
         list = this.props.tasks.map ( task => {
               return <Task  key = {task.id} title = {task.title}/>
            })
      return  (
         <div>
               <h3> {this.props.title}</h3>

               {list}

            <form onSubmit = { (e) => {
               e.preventDefault();
               console.log ('this.taskInputRef.value', this.taskInputReference.value)
               addTask (this.props.stageId, this.taskInputReference.value);
            }}>
               <input type="text" ref = {e => this.taskInputReference = e}/>
               <button type="submit">
                  save card
               </button>
            </form>

         </div>
      )
   }
}
export default Stages
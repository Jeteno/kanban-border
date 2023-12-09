import React from "react";
import { LIST_TYPES, LIST_COPY } from '../../config.js'
import { v4 as uuidv4 } from 'uuid';
import List from '../components/list.jsx'

const Board = (props) => {
   const { task, setTask } = props
   const addNewTask = (title, description) => {
      const newTask = {
         id: uuidv4(),
         title: title,
         description: description,
         status: LIST_TYPES.BACKLOG
      }
      setTask([...task, newTask])
   }
   
   return (
      <section className="board__page page">
         <div className="board__container container">
            <div className="boarder__body body">
               {Object.values(LIST_TYPES).map((type) => {
                  const listTask = Array.isArray(task) ? task.filter(t => t.status === type) : [];
                  return (
                     <List key={type} type={type} title={LIST_COPY[type]} listTask={listTask} tasks={task} addNewTask={addNewTask} setTask={setTask}/>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default Board;
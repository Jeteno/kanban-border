import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LIST_TYPES } from '../../config.js'
import FormNewVisible from '../components/forms.jsx'
import TaskSelect from '../components/select.jsx'

const List = (props) => {
   const { title, type, tasks, addNewTask, setTask, listTask } = props;
   const [isFormVisible, setFormVisible] = useState(false);

   const handleClick = () => {
      setFormVisible(!isFormVisible)
   }

   return (
      <div className="boarder__card">
         <div className="card__content-title">
            <h2 className="card__title">
               {title}
            </h2>
         </div>
         <ul className="card__list">
            {listTask.map(task => {
               return (
                  <li className="card__paragraph" key={task.id}>
                  <Link to={`/task/${task.id}`} className="taskLink" key={task.id}>
                     {task.title}
                  </Link>
                  </li>
               )
            })}
         </ul>
         {type === LIST_TYPES.BACKLOG && isFormVisible && (
            <FormNewVisible addNewTask={addNewTask} setFormVisible={setFormVisible}/>
         )}
         {type !== LIST_TYPES.BACKLOG && isFormVisible && (
            <TaskSelect tasks={tasks} type={type} setTask={setTask} setFormVisible={setFormVisible} isFormVisible={isFormVisible}/>
         )}
         {!isFormVisible ? (
            <button className="card__button" onClick={handleClick}>
               <img src="../img/card/add-card.svg" alt="Plus" className="card__button-img" />
               Add card
            </button>
         ): null}
      </div>
   )
}

export default List;
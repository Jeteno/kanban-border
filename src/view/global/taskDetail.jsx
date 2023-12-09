import React, { useState } from "react";
import {  useParams, useNavigate } from 'react-router-dom';

const TaskDetail = (props) => {
   const {task, setTask} = props
   const {taskId} = useParams()
   const navigate = useNavigate()
   const [descriptionEditInput, setDescriptionEditInput] = useState(false)

	const tasks = task.find(tasks => tasks.id === taskId)

   const toggleDescriptionEditInput = () => {
      setDescriptionEditInput(!descriptionEditInput)
   }

   const handleChange = (event) => {
      const updateTasks = task.map(tasks => {
         if(tasks.id === taskId) {
            return {...tasks, description: event.target.value}
         }
         return tasks
      })
      setTask(updateTasks)
   }

   return (
      <section className="page-task__page page">
         <div className="page-task__container container">
            {tasks ? (
               <div className="page-task__body body">
                  <span className="page-task__clouse" onClick={() => navigate('/board')}></span>
                  <div className="page-task__title">
                     <h2 className="page-task__title-h">
                        {tasks.title}
                     </h2>
                  </div>
                  {!descriptionEditInput ? (
                     <div className="page-task__content">
                        <p className="page-task__contant-p">
                           {tasks.description || 'This task has no description'}
                        </p>
                     </div>
                  ) : 
                  (
                     <form action="task" className="form__group">
                        <textarea type="text" className="input__edit" rows={4} value={tasks.description} onChange={handleChange}/>
                     </form>
                  )}
                  <div className="page-task__button">
                     <button className="page-task__btn" onClick={toggleDescriptionEditInput}> {!descriptionEditInput ? ("Редактировать") : ("Сохранить")} </button>
                  </div>
               </div>
            ) : (
               <div className="page-task__body body">
                  <span className="page-task__clouse" onClick={() => navigate('/board')}></span>
                  <div className="page-task__title">
                     <h2 className="page-task__title-h">
                        Задачи не сущесвтует
                     </h2>
                  </div>
               </div>
            )}
         </div>
      </section>
   )
}

export default TaskDetail;
import React from 'react';
import Select from 'react-select'
import { LIST_TYPES } from '../../config.js'

const TaskSelect = (props) => {
   const { tasks, type, setTask, setFormVisible, isFormVisible } = props;

   const getPreviousTasks = (currentStatus) => {
      const statuses = Object.values(LIST_TYPES);
      const currentIndex = statuses.indexOf(currentStatus);
      if (currentIndex > 0) {
        const previousStatus = statuses[currentIndex - 1];
        return tasks.filter((item) => item.status === previousStatus);
      }
      return [];
   };

   const previousTasks = getPreviousTasks(type);

   const options = previousTasks.map(task => ({
      value: task.id,
      label: task.title
    }));

   const handleSelectChange = (selectedOption) => {
      const selectedTaskId = selectedOption.value

      const updatedTasks = tasks.map(task => {
         if(task.id === selectedTaskId) {
            return {...task, status: type}
         }
         return task
      }) 
      setTask(updatedTasks)
      setFormVisible(!isFormVisible)
   };

   return (
      <form action="" className="card__form-group">
         <Select
            options={options}
            onChange={handleSelectChange}
            placeholder="Выберите задачу"
            classNamePrefix="my-select"
         />
      </form>
   )
}

export default TaskSelect;
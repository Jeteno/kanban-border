import React, { useState } from "react";

const Form = (props) => {
   const { addNewTask, setFormVisible } = props;
   const [ values, setValues ] = useState(
      {
         title: '',
         description: ''
      }
   );

   const handleSubmit = (event) => {
      event.preventDefault();
      if(values.title) {
         addNewTask(values.title, values.description);
      }
      setFormVisible(false)
   }

   const handleChange = (event) => {
      const fieldName = event.target.name
      setValues({...values, [fieldName]: event.target.value})
   }

   return (
      <form action="task" className="form__group" onSubmit={handleSubmit}>
         <div className="card__form-input card__paragraph">
            <input 
               type="text" 
               id='taskTitle'
               name='title'
               value={values.title}
               placeholder='Введите название задачи'
               className="card__input"
               onChange={handleChange}
            />
         </div>
         <div className="card__form-input card__paragraph">
            <textarea 
               type="text" 
               id='taskDescription'
               name='description'
               value={values.description}
               placeholder='Введите описание задачи'
               className="card__textarea card__input"
               onChange={handleChange}
            />
         </div>
         <button className={values.title ? 'card__button-form-active' : 'card__button-form'} type="submit">
            Submit
         </button>
      </form>
   )
}

export default Form;
import React from 'react';
import { LIST_TYPES } from '../../config.js'

const Footer = (props) => {
   const {task} = props;

   const backlogTasks = task.filter(task => task.status === LIST_TYPES.BACKLOG);
   const countBacklog = backlogTasks.length;

   const finishedTasks = task.filter(task => task.status === LIST_TYPES.FINISHED);
   const countFinished = finishedTasks.length;

   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();

   return (
      <footer className="footer__page page">
         <div className="footer__container container">
            <div className="footer__body body">
               <div className="footer__title-task">
                  <div className="footer__title">
                     <h2 className="footer__title-h">
                        {!countBacklog ? ('No active tasks') : (`Active tasks: ${countBacklog}`)}
                     </h2>
                  </div>
                  <div className="footer__title">
                     <h2 className="footer__title-h">
                        {!countFinished ? ('No completed tasks') : (`Finished tasks: ${countFinished}`)}
                     </h2>
                  </div>
               </div>
               <div className="footer__title">
                  <h2 className="footer__title-h">
                     Kanban board by Maxim, {currentYear}
                  </h2>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
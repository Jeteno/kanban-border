import React from 'react';
import Board from './board.jsx';
import {Routes, Route} from 'react-router-dom';
import TaskDetail from './taskDetail.jsx';

const Main = (props) => {
   return (
      <main className='main'>
        <Routes>
            <Route path={'/task/:taskId'} element={<TaskDetail {...props}/>}/>
            <Route exact path={'*'} element={<Board {...props}/>}/>
        </Routes>
      </main>
   )
}

export default Main;
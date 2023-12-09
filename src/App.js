import React, { useState, useEffect } from 'react';
import Header from './view/global/header.jsx';
import Main from './view/global/main.jsx';
import Footer from './view/global/footer.jsx';

function App() {
  const storedTask = JSON.parse(window.localStorage.getItem('task'));
  const initialState = Array.isArray(storedTask) ? storedTask : [];
  const [task, setTask] = useState(initialState);
  
  useEffect(() => {
    window.localStorage.setItem('task', JSON.stringify(task));
  }, [task]);
  
  return (
    <div className="wrapper">
      <Header/>
      <Main task={task} setTask={setTask}/>
      <Footer task={task}/>
    </div>
  );
}

export default App;

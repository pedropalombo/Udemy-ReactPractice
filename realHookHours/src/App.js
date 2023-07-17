import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  //already on the 'useHttp()' Custom Hook
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push(
          { 
            id: taskKey, 
            text: tasksObj[taskKey].text 
          }
        );
      }

      setTasks(loadedTasks);
  }, []);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  /*const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://sw-http-9e1fb-default-rtdb.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };*/

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];
  
        for (const taskKey in tasksObj) {
          loadedTasks.push(
            { 
              id: taskKey, 
              text: tasksObj[taskKey].text 
            }
          );
        }
  
        setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: 'https://sw-http-9e1fb-default-rtdb.firebaseio.com/tasks.json'
      },
      transformTasks
    );

  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

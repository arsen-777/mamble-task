import React from 'react';
import TasksForm from './components/TasksForm';
import Container from './components/Container';
import TasksList from './components/TasksList/TasksList';
import HideComp from './components/HideCompleted';
import { selectTasks } from './features/tasks/tasksSlice';
import { useSelector } from 'react-redux';
import EmptyTask from './components/EmptyTask/EmptyTask';

function App() {
  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      {tasks?.length ? <HideComp /> : <></>}
      <TasksForm />
      {tasks?.length ? <TasksList /> : <EmptyTask />}
    </Container>
  );
}

export default App;

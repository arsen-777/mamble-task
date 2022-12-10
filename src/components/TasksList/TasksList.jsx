import React, { useEffect } from 'react';
import styles from './TasksList.module.scss';
import { selectTasks } from '../../features/tasks/tasksSlice';
import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import Modal from '../Modal/Modal';

const TasksList = () => {
  const { tasks, isOpenModal } = useSelector(selectTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.tasksContainer}>
      {tasks && tasks.map((task) => <TaskItem key={task.id} {...task} />)}
      {isOpenModal && <Modal />}
    </div>
  );
};

export default TasksList;

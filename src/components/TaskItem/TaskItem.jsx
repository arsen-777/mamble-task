import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Delete } from '../../images/delete.svg';
import { selectTasks } from '../../features/tasks/tasksSlice';
import {
  toggleStatus,
  toggleModal,
  handleId,
} from '../../features/tasks/tasksSlice';
import styles from './TaskItem.module.scss';

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const { isHidden } = useSelector(selectTasks);

  const handleStatus = (id) => {
    if (isHidden) dispatch(toggleStatus(id));
  };

  const handelModal = (id) => {
    dispatch(toggleModal());
    dispatch(handleId(id));
  };

  return (
    <>
      {(!completed || isHidden) && (
        <div className={styles.itemContainer}>
          <div className={styles.inp}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleStatus(id)}
              id={id}
            />
            <label htmlFor={id}></label>
          </div>
          <div className={styles.title}>
            <p className={!completed ? styles.paragraph : styles.checked}>
              {title}
            </p>
          </div>
          <div className={styles.delete}>
            <Delete onClick={() => handelModal(id)} />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;

import React from 'react';
import styles from './HideComp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../features/tasks/tasksSlice';
import { toggleIsHidden } from '../../features/tasks/tasksSlice';

const HideComp = () => {
  const { isHidden } = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(toggleIsHidden());
  };
  return (
    <div className={styles.hideComp}>
      <div className={styles.checkboxBlock}>
        <input
          type="checkbox"
          checked={!isHidden}
          onChange={handleCompleted}
          id="check"
        />
        <label htmlFor="check">Hide Completed</label>
      </div>
    </div>
  );
};

export default HideComp;

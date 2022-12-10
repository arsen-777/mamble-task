import React from 'react';
import styles from './EmptyTask.module.scss';
const EmptyTask = () => {
  return (
    <div className={styles.info}>
      <p>your life is a blank page. You write on it.</p>
      <h2>So start by adding your tasks here.</h2>
    </div>
  );
};

export default EmptyTask;

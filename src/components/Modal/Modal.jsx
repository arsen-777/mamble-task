import React, { useRef } from 'react';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../features/tasks/tasksSlice';
import {
  toggleModal,
  clearId,
  deleteTask,
} from '../../features/tasks/tasksSlice';
import useClickOutside from '../../hooks/useClickOutside';

const Modal = () => {
  const dispatch = useDispatch();
  const { deletedTaskId } = useSelector(selectTasks);
  const modalRef = useRef();

  const handelModal = () => {
    dispatch(toggleModal());
    dispatch(clearId());
  };

  const removeTask = () => {
    dispatch(deleteTask(deletedTaskId));
    dispatch(toggleModal());
  };

  useClickOutside(modalRef, () => dispatch(toggleModal()));

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal} ref={modalRef}>
        <p>Are you sure you want to delete?</p>
        <div className={styles.buttons}>
          <p onClick={removeTask}>Yes</p>
          <p onClick={handelModal}>No</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import styles from './TasksForm.module.scss';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../features/tasks/tasksSlice';

const TasksForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    let newData = {
      id: uuidv4(),
      completed: false,
      ...data,
    };
    dispatch(addNewTodo(newData));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inpBlock}>
        <label>Task</label>
        <div className={styles.inpBtn}>
          <input
            {...register('title', {
              required: 'Fields are required to be completed',
              minLength: {
                value: 5,
                message: 'Task content can contain max 5 characters.',
              },
              maxLength: {
                value: 54,
                message: 'Task content can contain max 54 characters.',
              },
            })}
            placeholder="Write here"
          />
          <button type="submit">Add</button>
        </div>

        {errors?.title && (
          <p className={styles.errors}>{errors?.title?.message}</p>
        )}
      </div>
    </form>
  );
};

export default TasksForm;

import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../helpers/getLocalStorage';

const initialState = {
  tasks: getLocalStorage(),
  status: 'idle',
  isOpenModal: false,
  deletedTaskId: null,
  isHidden: true,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.tasks.push(action.payload);
    },
    toggleStatus(state, action) {
      const todoCompleted = state.tasks.find((todo) => {
        return todo.id === action.payload;
      });
      todoCompleted.completed = !todoCompleted.completed;
    },
    deleteTodo(state, action) {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload.id);
    },
    toggleModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    handleId(state, action) {
      state.deletedTaskId = action.payload;
    },
    clearId(state) {
      state.deletedTaskId = null;
    },
    toggleIsHidden(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

export const {
  addNewTodo,
  toggleStatus,
  deleteTodo,
  toggleModal,
  deleteTask,
  handleId,
  clearId,
  toggleIsHidden,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;

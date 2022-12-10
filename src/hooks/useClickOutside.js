import { useEffect } from 'react';
import { clearId } from '../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

export default function useClickOutside(ref, handler) {
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
      dispatch(clearId());
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, dispatch]);
}

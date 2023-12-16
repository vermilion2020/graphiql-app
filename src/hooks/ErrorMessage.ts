import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux';
import { setError } from '../redux/features/appSlice';
import { HIDE_MODAL_TIMEOUT } from '../utils/errorMessage';

export function useErrorMessage() {
  const { error } = useAppSelector(
    (state) => state.appState
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {dispatch(setError(null))}, HIDE_MODAL_TIMEOUT);
      return () => {
        clearTimeout(timeoutId);
      };
  }
  }, [dispatch, error]);

  return {};
}
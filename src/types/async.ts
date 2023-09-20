export interface initialState<T> {
  data: T | null;
  isLoading: boolean;
  status: 'success' | 'error' | 'loading';
  error: null | Error;
}
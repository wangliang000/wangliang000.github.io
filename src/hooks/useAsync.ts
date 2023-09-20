import { useCallback, useState } from "react";
import type { initialState as State } from '@/types/async';
const initialState: State<null> = {
  data: null,
  isLoading: true,
  status: 'loading',
  error: null
}
export default function useAsync<T>(userState?: State<T>) {
  const [state, setState] = useState<State<T>>({ ...initialState, ...userState });
  const setData = (data: T) => {
    setState({ data, status: 'success', isLoading: false, error: null })
  }
  const setError = (error: Error) => {
    setState({ data: null, status: 'error', isLoading: false, error })
  }

  const setHttp = useCallback((http: Promise<T>) => {
    if (!http || !http.then) {
      throw new Error('sendHttp param must be a Promise Instance');
    }
    http.then((data: T) => {
      setData(data)
      return data;
    }).catch((error) => {
      setError(error)
    });
  }, [state])
  return [state, setError]
}
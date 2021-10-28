export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetching = () => ({
  type: FETCHING,
});

export const fetch_error = (code, message) => ({
  type: FETCH_ERROR,
  code,
  message,
});

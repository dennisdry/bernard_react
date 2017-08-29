import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES'

const API_CATEGORY = 'message';
const messageBy = 'findall';

const ROOT_URL = `https://bernard-api.herokuapp.com/${API_CATEGORY}/${messageBy}`;

export function fetchMessages() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

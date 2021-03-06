import axios from 'axios';

export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function axiosFetch(type, url) {
    return dispatch => {
    // Reducers may handle this to set a flag like isFetching
    dispatch({ type: type + REQUEST, payload: url, isFetching: true })

    // Perform the actual API call
    return axios.get(url).then(
      response => {
        if (response.data.Response == 'Error') {
          dispatch({ type: type + FAILURE,  error: response.data.Message, isFetching: false })
          throw response.data.Message
        }
        else {
          // Reducers may handle this to show the data and reset isFetching
          dispatch({ type: type + SUCCESS,  payload: response, isFetching: false })
        }
      },
      error => {
        // Reducers may handle this to reset isFetching
        dispatch({ type: type + FAILURE,  error: response.error, isFetching: false })
        // Rethrow so returned Promise is rejected
        throw error
      }
    )
  }
}

import callApi from '../../util/apiCaller';

// Export Constants
export const GOT_LOANS = 'GOT_LOANS';

// Export Actions
export function gotData(data) {
  return {
    type: GOT_LOANS,
    data,
  };
}

export function fetchData() {
  return (dispatch) => {
    return callApi('/loans').then(res => dispatch(gotData(res)));
  };
}

export function filterLoans(filter) {
  return (dispatch) => {
    const stringFilter = JSON.stringify(filter);
    return callApi(`/loans/${stringFilter}`).then(res => dispatch(gotData(res)));
  };
}

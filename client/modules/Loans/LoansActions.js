import callApi from '../../util/apiCaller';

// Export Constants
export const GOT_LOANS = 'GOT_LOANS';
export const GOT_INDUSTRIES = 'GOT_INDUSTRIES';

// Export Actions
export function gotData(data) {
  return {
    type: GOT_LOANS,
    data,
  };
}

export function gotIndustries(industries) {
  return {
    type: GOT_INDUSTRIES,
    industries,
  };
}

export function fetchData(page) {
  return (dispatch) => {
    return callApi(`/loans/${page}`).then(res => dispatch(gotData(res)));
  };
}

export function fetchIndustries() {
  return (dispatch) => {
    return callApi('/industries').then(res => dispatch(gotIndustries(res)));
  };
}

export function filterLoans(filter, page) {
  return (dispatch) => {
    const stringFilter = JSON.stringify(filter);
    return callApi(`/loans/${stringFilter}/${page}`).then(res => dispatch(gotData(res)));
  };
}

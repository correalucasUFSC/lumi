import { GOT_LOANS, GOT_INDUSTRIES } from './LoansActions';

// Initial State
const initialState = {
  data: [],
  page: 1,
  industries: [],
  pages: 0,
};

const LoansReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_LOANS:
      const { loans, pages, page } = action.data;
      return {
        ...state,
        data: loans,
        pages: pages,
        page: page,
      };
    case GOT_INDUSTRIES:
      return {
        ...state,
        industries: action.industries,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all loans
export const getLoans = state => state.loans.data;

// Get all industry names
export const getIndustries = state => state.loans.industries;

// Get current page
export const getPage = state => state.loans.page;

// Get pages count
export const getPagesCount = state => state.loans.pages;

// Export Reducer
export default LoansReducer;

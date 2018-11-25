import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// Import Actions
import { fetchData, filterLoans, fetchIndustries } from './LoansActions';
import Gauge from 'react-svg-gauge';
import styles from './Loans.css';
import FilterForm from '../../components/FilterForm';
import BasePagination from '../../components/BasePagination';

// Import Selectors
import { getLoans, getIndustries, getPage, getPagesCount } from './LoansReducer';

class LoansPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData(this.props.page));
    this.props.dispatch(fetchIndustries());
    this.formState = null;
  }

  getColor(val) {
    if (val > 80) return 'green';
    if (val > 50) return 'gold';
    return 'red';
  }

  handleSubmit = formState => {
    this.formState = formState;
    this.props.dispatch(filterLoans(formState, 1));
  };

  handleIncrement = () => {
    const pageNumber = Number(...this.props.page);
    if (this.formState === null) {
      this.props.dispatch(fetchData(pageNumber + 1));
    } else {
      this.props.dispatch(filterLoans(this.formState, pageNumber + 1));
    }
  };

  handleDecrement = () => {
    const pageNumber = Number(...this.props.page);
    if (this.formState === null) {
      this.props.dispatch(fetchData(pageNumber - 1));
    } else {
      this.props.dispatch(filterLoans(this.formState, pageNumber - 1));
    }
  };

  render() {
    const { loans, industries, page, pages } = this.props;
    let list;
    if (loans && loans.length) {
      list = loans.map((loan, i) => {
        return (
          <div key={i} className={styles.loan}>
            <div className={styles.info}>
              <h2>{loan.name}</h2>
              <p>
                <b>Current Health:</b>
                <b style={{ color: this.getColor(loan.health) }}>
                  &nbsp; {loan.health}
                </b>
              </p>
              <p>
                <b>Industry:</b>
                &nbsp; {loan.industry}
              </p>
            </div>
            <div className={styles.graph}>
              <Gauge
                value={loan.health}
                color={this.getColor(loan.health)}
                width={150}
                height={150}
                label=""
              />
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <div className={styles.marginTop}>
          {industries && <FilterForm industries={industries} onsubmit={this.handleSubmit} />}
        </div>
        {list}
        <div className={styles.marginTop}>
          <BasePagination onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} pages={pages} page={page} />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
LoansPage.need = [() => { return fetchData(); }];
LoansPage.need = [() => { return fetchIndustries(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    loans: getLoans(state),
    industries: getIndustries(state),
    page: getPage(state),
    pages: getPagesCount(state),
  };
}

LoansPage.propTypes = {
  loans: PropTypes.array.isRequired,
  industries: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

LoansPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LoansPage);

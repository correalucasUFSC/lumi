import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// Import Actions
import { fetchData, filterLoans } from './LoansActions';
import Gauge from 'react-svg-gauge';
import styles from './Loans.css';
import FilterForm from '../../components/FilterForm';
import BasePagination from '../../components/BasePagination';

// Import Selectors
import { getLoans } from './LoansReducer';

class LoansPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  getColor(val) {
    if (val > 80) return 'green';
    if (val > 50) return 'gold';
    return 'red';
  }

  handleSubmit = formState => {
    this.props.dispatch(filterLoans(formState));
  };

  render() {
    const { loans } = this.props;
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
          <FilterForm onsubmit={this.handleSubmit} />
        </div>
        {list}
        <div className={styles.marginTop}>
          <BasePagination />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
LoansPage.need = [() => { return fetchData(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    loans: getLoans(state),
  };
}

LoansPage.propTypes = {
  loans: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

LoansPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LoansPage);

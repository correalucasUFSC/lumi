import React, { PropTypes, Component } from 'react';
import styles from './BasePagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasePagination extends Component {


  handleIncrement = () => {
    this.props.onIncrement();
  };

  handleDecrement = () => {
    this.props.onDecrement();
  };

  render() {
    return (
      <div className={styles.paginationContainer}>
        {  Number(this.props.page) - 1 < 0 ? null : <FontAwesomeIcon
          onClick={this.handleDecrement}
          className={styles.marginRight}
          icon="minus"
        />}
        <span className={`${styles.fontSizeRegular} ${styles.marginRight}`}>{this.props.page} of {this.props.pages}</span>
        { Number(this.props.page) + 1 > Number(this.props.pages) ? null : <FontAwesomeIcon
          onClick={this.handleIncrement}
          icon="plus"
        />}
      </div>
    );
  }
}

BasePagination.propTypes = {
  selectedValue: PropTypes.number,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default BasePagination;

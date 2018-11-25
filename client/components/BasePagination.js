import React, { Component } from 'react';
import styles from './BasePagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasePagination extends Component {
  render() {
    return (
      <div className={styles.paginationContainer}>
        <FontAwesomeIcon
          className={styles.marginRight}
          icon="minus"
        />
        <span className={`${styles.fontSizeRegular} ${styles.marginRight}`}>1</span>
        <FontAwesomeIcon
          icon="plus"
        />
      </div>
    );
  }
}


export default BasePagination;

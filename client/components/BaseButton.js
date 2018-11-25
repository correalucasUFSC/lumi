import React, { PropTypes, Component } from 'react';
import styles from './BaseButton.css';


class BaseButton extends Component {
  render() {
    const { name } = this.props;
    return (
      <button className={`${styles.size} ${styles.color} ${styles.rounded}`}>{name}</button>
    );
  }
}

BaseButton.propTypes = {
  name: PropTypes.string.isRequired,
};


export default BaseButton;

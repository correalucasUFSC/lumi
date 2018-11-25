import React, { PropTypes, Component } from 'react';
import styles from './BaseSelect.css';


class BaseSelect extends Component {

  render() {
    const { options, selectedValue } = this.props;
    let list;

    if (options && options.length) {
      list = options.map((option, i) => {
        return (
          <option value={option} key={i}>{option}</option>
        );
      });
    }
    return (
      <div className={styles.select}>
        <select onChange={this.props.onChange} value={selectedValue}>{list}</select>
      </div>
    );
  }
}

BaseSelect.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BaseSelect;

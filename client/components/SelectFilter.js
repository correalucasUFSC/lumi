import React, { PropTypes, Component } from 'react';
import styles from './SelectFilter.css';
import BaseSelect from './BaseSelect';


class SelectFilter extends Component {
  render() {
    const { label, selectedValue, options } = this.props;
    return (
      <div>
        <div className={styles.filterContainer}>
          <h3 className={styles.label}>{label}</h3>
          <BaseSelect onChange={this.props.onChange} selectedValue={selectedValue} options={options} />
        </div>
      </div>
    );
  }
}

SelectFilter.propTypes = {
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFilter;

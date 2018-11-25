import React, { PropTypes, Component } from 'react';
import styles from './FilterForm.css';
import BaseButton from './BaseButton';
import SelectFilter from './SelectFilter';
const healthConstants = require('../../constants.json').HEALTH;


class FilterForm extends Component{
  constructor(props) {
    super(props);
    //const industries = this.props.industries.map(element => element.industry);
    this.state = {
      industrySelectValue: this.props.industries[0],
      healthSelectValue: this.healthFilter().slice(0, 1)[0],
    };

    this.healthFilter = this.healthFilter.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
  }

  handleIndustryChange = event => {
    this.setState({
      ...this.state,
      industrySelectValue: event.target.value,
    });
  };

  handleHealthChange = event => {
    this.setState({
      ...this.state,
      healthSelectValue: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onsubmit(this.state);
  };

  healthFilter = () => {
    return [healthConstants.HIGH, healthConstants.MEDIUM, healthConstants.LOW];
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.marginRight}>
            <SelectFilter
              value={this.state.industrySelectValue}
              onChange={this.handleIndustryChange}
              className={styles.buttonContainer}
              selectedValue={this.state.industrySelectValue}
              options={this.props.industries}
              label="Industry"
            />
          </div>
          <div className={styles.marginRight}>
            <SelectFilter
              value={this.state.healthSelectValue}
              onChange={this.handleHealthChange}
              className={styles.buttonContainer}
              selectedValue={this.state.healthSelectValue}
              options={this.healthFilter()}
              label="Health"
            />
          </div>
          <BaseButton type="submit" className={styles.buttonContainer} name="Filter" />
        </form>
      </div>
    );
  }
}

FilterForm.propTypes = {
  onsubmit: PropTypes.func.isRequired,
  industries: PropTypes.array,
};


export default FilterForm;

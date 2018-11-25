import React, { PropTypes, Component } from 'react';
import styles from './FilterForm.css';
import BaseButton from './BaseButton';
import SelectFilter from './SelectFilter';


class FilterForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      industrySelectValue: this.industryFilter().slice(0, 1)[0],
      healthSelectValue: this.healthFilter().slice(0, 1)[0],
    };

    this.industryFilter = this.industryFilter.bind(this);
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


  industryFilter = () => {
    return ['Hospitality', 'Retail', 'Accomodation', 'Agriculture'];
    //TODO: get this from db
  };

  healthFilter = () => {
    return ['High', 'Medium', 'Low'];
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
              options={this.industryFilter()}
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
};


export default FilterForm;

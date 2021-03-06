import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default class RadioGroup extends PureComponent {
  render () {
    const { value, onChange, options, disabled, className, spacedEvenly } = this.props;
    const dataField = this.props['data-field'];
    const relativeSize = spacedEvenly ? Math.floor(12 / options.length) : 'auto';
    return <Row className={`RadioGroup${className ? ` ${className}` : ''}`}>
      {options.map((option) =>
        <Col xs={relativeSize} key={`radioGroup-${option.optionId}`}>
          <label>
            <input type='radio' name={dataField} data-field={dataField}
              checked={option.optionId === value} onChange={(evt) => onChange(evt, option.optionId)}
              disabled={disabled || option.disabled}
            />
            <span className='radio' />
            <span>{option.label}</span>
          </label>
        </Col>
      )}
    </Row>;
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  'data-field': PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    optionId: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
  })),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  spacedEvenly: PropTypes.bool
};

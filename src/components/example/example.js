import React from 'react';
import PropTypes from 'prop-types';

/** Shows some text in upper case */
class Example extends React.Component {
  getUpperCaseText(str) {
    return str.toUpperCase();
  }

  render() {
    const {text} = this.props;
    return (
      <div>{this.getUpperCaseText(text)}</div>
    );
  }
}

Example.propTypes = {
  /** Text to be shown in upper case */
  text: PropTypes.string,
};

Example.defaultProps = {
  text: 'Default text',
};

export default Example;

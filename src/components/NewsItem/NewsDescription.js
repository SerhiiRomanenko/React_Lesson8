import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsDescription extends Component {
  render() {
    const { description, descriptionRef } = this.props;
    return (
      <p ref={descriptionRef} className="newsPage__description">
        <b>Description: </b>
        {description}
      </p>
    );
  }
}

NewsDescription.propTypes = {
  description: PropTypes.string,
  descriptionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
NewsDescription.defaultProps = {};

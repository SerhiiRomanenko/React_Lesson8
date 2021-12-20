import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

export class NewsTitle extends Component {
  titleEl = createRef();
  render() {
    const { title, titleRef } = this.props;
    return (
      <h3 ref={titleRef} className="newsPage__title" style={{ color: "red" }}>
        {title.toUpperCase()}
      </h3>
    );
  }
}

NewsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
NewsTitle.defaultProps = {};

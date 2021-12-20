import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsText extends Component {
  render() {
    const { text, textRef } = this.props;
    return (
      <p
        ref={textRef}
        className="newsPage__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
}

NewsText.propsTypes = {
  content: PropTypes.string.isRequired,
  textRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

NewsText.defaultProps = {};

import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsAuthor extends Component {
  render() {
    const { author, authorRef } = this.props;
    return (
      <p ref={authorRef} className="newsPage__author">
        <b>Author: </b>
        {author}
      </p>
    );
  }
}

NewsAuthor.propTypes = {
  author: PropTypes.string,
  authorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

NewsAuthor.defaultProps = {
  author: "not specified",
};

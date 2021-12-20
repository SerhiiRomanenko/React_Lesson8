import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsDelete extends Component {
  render() {
    const { delNews, id, deleteButtonRef } = this.props;
    return (
      <button ref={deleteButtonRef} onClick={() => delNews(id)}>
        Delete news
      </button>
    );
  }
}

NewsDelete.propTypes = {
  delNews: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  deleteButtonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
NewsDelete.defaultProps = {};

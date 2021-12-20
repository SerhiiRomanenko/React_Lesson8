import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsPhoto extends Component {
  render() {
    const { el, photoRef } = this.props;
    return (
      <>
        {el.photo && (
          <img
            ref={photoRef}
            className="newsPage__photo"
            src={el.photo}
            alt="pic"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
            }}
          />
        )}
      </>
    );
  }
}

NewsPhoto.propTypes = {
  el: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  photoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

NewsPhoto.defaultProps = {};

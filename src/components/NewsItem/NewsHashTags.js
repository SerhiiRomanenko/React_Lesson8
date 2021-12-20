import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsHashTags extends Component {
  render() {
    const { hashTags, hashTagsRef } = this.props;
    return (
      <>
        {hashTags.length !== 0 && (
          <p ref={hashTagsRef} className="newsPage__categories">
            <b>Hash Tags: </b>
            {hashTags.map((i) => {
              return (
                <span key={i} className="newsPage__catogorieItem">
                  {i}
                </span>
              );
            })}
          </p>
        )}
      </>
    );
  }
}

NewsHashTags.propTypes = {
  hashTags: PropTypes.array,
  hashTagsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

NewsHashTags.defaultProps = {
  hashTags: [],
};

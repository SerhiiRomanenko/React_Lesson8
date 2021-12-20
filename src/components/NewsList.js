import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import PropTypes from "prop-types";

export class NewsList extends Component {
  render() {
    const { newsToRender, delNews } = this.props;
    return (
      <div className="newsPage__list">
        {newsToRender.map((el) => {
          return <NewsItem key={el.id} el={el} delNews={delNews} />;
        })}
      </div>
    );
  }
}

NewsList.propTypes = {
  newsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      description: PropTypes.string,
      hashTags: PropTypes.array,
      photo: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

NewsList.defaultProps = {
  hashTags: [],
};

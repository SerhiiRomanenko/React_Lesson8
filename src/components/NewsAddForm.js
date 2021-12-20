import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { TAGS } from "../data/myData";

export class NewsAddForm extends Component {
  titleEl = createRef();
  textEl = createRef();
  descriptionEl = createRef();
  photoEl = createRef();
  authorEl = createRef();
  hashTagsElements = [];

  handleFormSubmit = (e) => {
    e.preventDefault();

    const id = nanoid(15);
    const hashTagsChooses = this.hashTagsElements.filter((el) => {
      return el.checked;
    });

    let createdNews = {
      id,
      title: this.titleEl.current.value,
      description: this.descriptionEl.current.value,
      text: this.textEl.current.value,
      photo: this.photoEl.current.files[0] || null,
      hashTags: hashTagsChooses.map((item) => item.name),
    };

    console.log(createdNews);
  };

  render() {
    const { photo } = this.props;

    return (
      <div className="addNews">
        <h2>Add some news: </h2>
        <form className="addNews__form" onSubmit={this.handleFormSubmit}>
          <div className="addNews__title">
            <label htmlFor="addTitle">News title: </label>
            <input
              ref={this.titleEl}
              className="addTitle"
              required="required"
              id="addTitle"
              name="title"
              placeholder="Enter news name"
            />
          </div>

          <div className="addNews__description">
            <label htmlFor="addTitle">News description: </label>
            <input
              ref={this.descriptionEl}
              className="addDescription"
              required="required"
              id="addDescription"
              name="description"
              placeholder="Enter news description"
            />
          </div>

          <div className="addNews__text">
            <label htmlFor="addText">News text: </label>
            <textarea
              ref={this.textEl}
              name="text"
              required="required"
              className="addText"
              id="addText"
              placeholder="Enter news text"
            />
          </div>

          <div className="addNews__photo">
            <label htmlFor="addPhoto">News photo: </label>
            <input
              type="file"
              className="addPhoto"
              id="addPhoto"
              ref={this.photoEl}
              accept="image/*"
            />

            {photo && (
              <img
                className="newsPage__photo"
                src={photo}
                alt="pic"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          <div className="newsPage__addTags">
            <span>
              <b>Tags: </b>
            </span>
            {TAGS.map((tagEl) => {
              return (
                <label key={tagEl.label}>
                  <span>{tagEl.name}</span>
                  <input
                    type="checkbox"
                    name={tagEl.name}
                    ref={(node) => {
                      this.hashTagsElements.push(node);
                    }}
                  />
                </label>
              );
            })}
          </div>

          <button
            className="addNews__submit"
            type="submit"
            style={{ display: "block", margin: "auto" }}
          >
            Add news
          </button>
        </form>
      </div>
    );
  }
}

NewsAddForm.propTypes = {
  photo: PropTypes.string,
};

NewsAddForm.defaultProps = {
  hashTags: [],
  photo: null,
};

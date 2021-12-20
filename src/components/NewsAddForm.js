import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { TAGS } from "../data/myData";
import { AUTHORS } from "../data/myData";

export class NewsAddForm extends Component {
  state = {
    title: "",
    text: "",
    description: "",
    photo: null,
    author: AUTHORS[0].name,
    hashTags: [],
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const id = nanoid(15);
    let createdNews = { id, ...this.state };
    this.props.addNews(createdNews);
  };

  handleChangeText = (e) => {
    let { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        photo: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  handleChangeAuthor = (e) => {
    this.setState({
      author: e.currentTarget.value,
    });
  };

  handleChangeTag = (e) => {
    if (this.state.hashTags.indexOf(e.currentTarget.value) === -1) {
      this.setState({
        hashTags: [...this.state.hashTags, e.currentTarget.value],
      });
    } else {
      this.setState({
        hashTags: this.state.hashTags.filter((el) => {
          return el !== e.currentTarget.value;
        }),
      });
    }
  };

  render() {
    const { title, text, description, photo, hashTags } = this.state;
    return (
      <div className="addNews">
        <h2>Add some news: </h2>
        <form className="addNews__form" onSubmit={this.handleFormSubmit}>
          <div className="addNews__title">
            <label htmlFor="addTitle">News title: </label>
            <input
              onChange={this.handleChangeText}
              className="addTitle"
              required="required"
              id="addTitle"
              value={title}
              name="title"
              placeholder="Enter news name"
            />
          </div>

          <div className="addNews__description">
            <label htmlFor="addTitle">News description: </label>
            <input
              onChange={this.handleChangeText}
              className="addDescription"
              required="required"
              id="addDescription"
              value={description}
              name="description"
              placeholder="Enter news description"
            />
          </div>

          <div className="addNews__text">
            <label htmlFor="addText">News text: </label>
            <textarea
              onChange={this.handleChangeText}
              name="text"
              value={text}
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
              onChange={this.handleChangePhoto}
              className="addPhoto"
              id="addPhoto"
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

          <div className="newsPage__addAuthors">
            <span>
              <b>Authors: </b>
            </span>
            {AUTHORS.map((person) => {
              return (
                <label key={person.name} style={{ marginRight: "10px" }}>
                  <span>{person.name}</span>
                  <input
                    onChange={this.handleChangeAuthor}
                    type="radio"
                    value={person.name}
                    checked={this.state.author === person.name}
                  ></input>
                </label>
              );
            })}
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
                    value={tagEl.name}
                    checked={hashTags.indexOf(tagEl.name) !== -1}
                    onChange={this.handleChangeTag}
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
  author: PropTypes.string,
  hashTags: PropTypes.arrayOf(PropTypes.string),
};

NewsAddForm.defaultProps = {
  hashTags: [],
};

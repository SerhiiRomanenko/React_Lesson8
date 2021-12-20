import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { NewsTitle } from "./NewsItem/NewsTitle";
import { NewsDescription } from "./NewsItem/NewsDescription";
import { NewsText } from "./NewsItem/NewsText";
import { NewsHashTags } from "./NewsItem/NewsHashTags";
import { NewsPhoto } from "./NewsItem/NewsPhoto";
import { NewsAuthor } from "./NewsItem/NewsAuthor";
import { NewsDelete } from "./NewsItem/NewsDelete";
import gsap from "gsap";

export class NewsItem extends Component {
  titleEl = createRef();
  descriptionEl = createRef();
  textEl = createRef();
  hashTagsEl = createRef();
  photoEl = null;
  authorEl = null;
  deleteButtonEl = null;
  render() {
    let { el, delNews } = this.props;
    return (
      <div
        key={el.id}
        className="newsPage__item"
        style={{ border: "1px solid blue", borderCollapse: "collapse" }}
      >
        <NewsTitle titleRef={this.titleEl} title={el.title} />
        <NewsDescription
          descriptionRef={this.descriptionEl}
          description={el.description}
        />
        <NewsText textRef={this.textEl} text={el.text} />
        <NewsHashTags hashTagsRef={this.hashTagsEl} hashTags={el.hashTags} />
        <NewsPhoto photoRef={(node) => (this.photoEl = node)} el={el} />
        <NewsAuthor
          authorRef={(node) => (this.authorEl = node)}
          author={el.author}
        />
        <NewsDelete
          deleteButtonRef={(node) => (this.deleteButtonEl = node)}
          delNews={delNews}
          id={el.id}
        />
      </div>
    );
  }
  componentDidMount() {
    var tl = gsap.timeline();
    const titleTransition = gsap.fromTo(
      this.titleEl.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );

    tl.add(titleTransition, "-=0.5");

    const descriptionTransition = gsap.fromTo(
      this.descriptionEl.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(descriptionTransition, "-=0.5");

    const textTransition = gsap.fromTo(
      this.textEl.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(textTransition, "-=0.5");

    const hashTagsTransition = gsap.fromTo(
      this.hashTagsEl.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(hashTagsTransition, "-=0.5");

    const photoTransition = gsap.fromTo(
      this.photoEl,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(photoTransition, "-=0.5");

    const authorTransition = gsap.fromTo(
      this.authorEl,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(authorTransition, "-=0.5");

    const deleteButtonTransition = gsap.fromTo(
      this.deleteButtonEl,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
      }
    );
    tl.add(deleteButtonTransition, "-=0.5");
  }
}

NewsItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
    hashTags: PropTypes.array,
    photo: PropTypes.string,
    author: PropTypes.string,
  }),
};

NewsItem.defaultProps = {
  el: [],
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewsFilters } from "./NewsFilters";
import { NewsList } from "./NewsList";
import { NewsAddForm } from "./NewsAddForm";
import { makeNews } from "../data/myData";

export class NewsPage extends Component {
  state = {
    items: makeNews(),
    hasPhoto: false,
    searchText: "",
    isOpenAddForm: false,
  };

  delNews = (idToDel) => {
    this.setState({
      items: this.state.items.filter((el) => el.id !== idToDel),
    });
  };

  addNews = (createdNews) => {
    this.setState({
      items: [createdNews, ...this.state.items],
    });
  };

  handleChangeForPhoto = (newHasPhoto) => {
    this.setState({ hasPhoto: newHasPhoto });
  };

  handleChangeSearchText = (newSearchText) => {
    this.setState({ searchText: newSearchText });
  };

  render() {
    const { hasPhoto, searchText, isOpenAddForm } = this.state;

    const newsToRender = this.state.items.filter((el) => {
      if (hasPhoto === true && el.photo === null) return false;
      if (
        el.title.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
        el.description.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
        el.author.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
        el.text.toUpperCase().indexOf(searchText.toUpperCase())
      )
        return false;

      return true;
    });
    return (
      <div className="newsPage" style={{ textAlign: "center" }}>
        <header>
          <NewsFilters
            hasPhoto={hasPhoto}
            searchText={searchText}
            handleChangeForPhoto={this.handleChangeForPhoto}
            handleChangeSearchText={this.handleChangeSearchText}
            handleChangeForLink={this.handleChangeForLink}
          />
        </header>
        <section className="newsPage__section">
          <button
            onClick={() => {
              this.setState({ isOpenAddForm: !isOpenAddForm });
            }}
          >
            {isOpenAddForm ? "Close add Form ➖" : "Open add Form ➕"}
          </button>
          {isOpenAddForm ? (
            <NewsAddForm addNews={this.addNews} onSubmit={console.log} />
          ) : (
            <></>
          )}
          <NewsList newsToRender={newsToRender} delNews={this.delNews} />
        </section>
      </div>
    );
  }
}

NewsPage.propTypes = {
  hasPhoto: PropTypes.bool,
  searchText: PropTypes.string,
  isOpenAddForm: PropTypes.bool,
};

NewsPage.defaultProps = {
  hasPhoto: false,
  searchText: "",
};

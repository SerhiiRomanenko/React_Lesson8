import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsFilters extends Component {
  render() {
    let { hasPhoto, searchText, handleChangeForPhoto, handleChangeSearchText } =
      this.props;

    return (
      <div className="newsPage__filters filter">
        <label>
          <span>Filter by photo</span>
          <input
            className="filter__byPhoto"
            type="checkbox"
            onChange={() => handleChangeForPhoto(!hasPhoto)}
          />
        </label>

        <input
          className="filter__byText"
          type="text"
          placeholder="Введите текст для поиска"
          value={searchText}
          onChange={(e) => handleChangeSearchText(e.target.value)}
        />
      </div>
    );
  }
}

NewsFilters.propTypes = {
  hasPhoto: PropTypes.bool,
  searchText: PropTypes.string.isRequired,
  handleChangeSearchText: PropTypes.func.isRequired,
  uniqueCategories: PropTypes.array,
};

NewsFilters.defaultProps = {
  hasPhoto: false,
  searchText: "",
  uniqueCategories: [],
};

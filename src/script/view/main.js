import DataSource from "../data/data-source.js";
import "../components/search-bar.js";
import "../components/character-list.js";

const main = () => {
  const characterListElement = document.querySelector("character-list");
  const searchElement = document.querySelector("search-bar");

  const onButtonSearchClicked = () => {
    DataSource.searchCharacter(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    characterListElement.characters = results;
  };

  const fallbackResult = (message) => {
    characterListElement.renderError(message);
  };

  const showCharacters = () => {
    DataSource.dataCharacter().then(renderResult).catch(fallbackResult);
  };

  showCharacters();
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

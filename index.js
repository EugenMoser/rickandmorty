import {createCharacterCard} from './components/card/card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

//

const url = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status + 'Is not Ok.');
    }
    const data = await response.json();
    console.log(data.results[0].name);

    data.results.forEach(character => {
      const characterName = character.name;
      const characterStatus = character.status;
      const characterType = character.type;
      const characterOcc = character.episode.length;
      const characterImage = character.image;

      createCharacterCard(
        characterName,
        characterImage,
        characterStatus,
        characterOcc,
        characterType,
      );

      console.log(
        characterName,
        characterImage,
        characterStatus,
        characterType,
        characterOcc,
      );
    });
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();

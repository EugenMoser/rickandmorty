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

nextButton.addEventListener('click', () => {
  cardContainer.innerHTML = '';
  page++;
  fetchCharacters();
});

prevButton.addEventListener('click', () => {
  cardContainer.innerHTML = '';
  if (page > 1) {
    page--;
    //prevButton.disabled = false;
  } /*else if (page === 1) {
    prevButton.disabled = true;
  }*/
  fetchCharacters();
});

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
    );
    if (!response.ok) {
      throw new Error(response.status + 'Is not Ok.');
    }
    const data = await response.json();
    //console.log(data.results[0].name);

    pagination.textContent = `${page} / ${data.info.pages}`;

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
    });
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();

//searchBar

searchBar.addEventListener('submit', event => {
  event.preventDefault();

  // const searchBarInput = document.getElementsByClassName('search-bar__input');
  // const searchQuery = searchBarInput[0].value;
  // console.log(searchQuery);
  // console.log(searchBarInput);

  const searchBarInput = document.querySelector(
    '[data-js="search-bar__input"]',
  );
  const searchQuery = searchBarInput.value;
  console.log(searchQuery);
  fetchCharacters();
});

export function createCharacterCard() {
  // const article = document.createElement('article');
  // const image = document.createElement('img');
  // const name = document.createElement('h2');
  // const status = document.createElement('p');
  // const type = document.createElement('p');
  // const
  const ul = document.querySelector('[data-js="card-container"]');
  console.log('hallo');

  //!!!!!!!!!!!!!!!!!!!!!!!
  // const name = (src = '#');
  // const image = (src = '#');
  // const status = (src = '#');
  // const type = (src = '#');
  // const occurrences = (src = '#');≈

  ul.innerHTML += `
  <li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="${image}"
        alt="Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${occurrences}</dd>
      </dl>
    </div>
  </li>`;
}

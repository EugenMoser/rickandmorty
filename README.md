# Recap 3: Rick and Morty App

In this recap project you are going to work in a group to create a single page app for browsing all
the characters of the famous tv show "Rick and Morty".

## API

We are going to fetch all necessary information about the characters from a REST Api specifically
designed for Rick and Morty. Check out the [API](https://rickandmortyapi.com/). You find all the
information you need in the docs.

> ❗️ This API has pagination, that means that you can fetch only 20 characters at a time.

## Starter Code

Create only one
repository per group from this template, but each member of the group clones the repository to their local machine.

> 💡 Don't forget to work on feature branches, otherwise you might run into merge conflicts!

## Tasks

### Character Card Component

For now you have only one hard coded character card for Rick Sanchez in your HTML. We want to create
them dynamically in our JavaScript.

- write a function `createCharacterCard` inside the `card.js` file and export it.
- You can use `innerHTML` to generate the HTML of the card. Cut the relevant html code of the card
  from the index.html and use it in your function
- The following elements of the card need to be dynamic and change for each character:
  - the `src` of the image
  - the name of the character
  - the status, type and occurrences values
- HINT: go to the docs and look where you can find all the information in the character objects you
  will receive from the API.
- Think about which input parameters this function will need.
- The function finally returns the created `li` HTML element.

### Fetch the Data

Now we can fetch the character data from the API and generate our cards with it.

- inside the `index.js` create a function called `fetchCharacters`.
- use your knowledge about fetching to get the first 20 characters from the API. You can find the
  correct API endpoint inside the docs.
- import the `createCharacterCard` function.
- after successfully fetching the character data, use array methods to create an HTML card for each
  character and append it to the `cardContainer`.
- make sure that the `cardContainer` is emptied every time new characters are fetched (HINT: you can
  use `innerHTML = ''` for that).
- call the function inside index.js. You should now see 20 cards in your app.

### Pagination

Great Job! But we want to see not just 20 characters, we want all of them! So lets implement the
pagination.

- by adding the string `?page=<pageIndex>` to the end of the fetch URL, you can receive the
  respective page of characters
- use the state variable `page` here to keep track of the current page index
- inside the `info` part of the received data you can find the max page count
- add an event listener on each of the next and prev buttons which do the following
  - it is prevented that the page index could go higher than the max page index or below 1
  - the page index is increased / decreased
  - the `fetchCharacters` function is called
- update the pagination display each time characters are fetched to show the current page index and
  the current max page index.

### The Search Bar

Now we want to add even more functionality to our app. We want to find individual characters by typing
their name into the search bar.

- create a 'submit' event listener on the search bar
- update the state variable `searchQuery` with the current text inside the search bar every time
  this event is triggered
- modify the fetch URL another time by adding another url encoded attribute `name`: append
  `&name=<searchQuery>` to the url. If the search query is an empty string, it will be ignored by
  the API, so don't worry about that.
- now trigger the function `fetchCharacters` whenever a submit event happens

> 💡 You might run into some bugs at this point. Think about how the page and max page index might
> have to change when you start searching for only subsets of all characters.

### Extra: Refactoring your Code

You've done it, your app is working as expected. But we want to tidy up our code such that not
everything is written in one javascript file.

- generate the next and prev button as well as the pagination and the search bar inside your
  javascript code. Use the respective javascript component files for that. Remove the respective
  html code from the index.html.
- the component functions should be called `createButton`, `createPagination` or `createSearchBar`
  and should return the created elements.
- HINT: It is challenging to get the event listener functions right for these components. Use an
  extra input parameter `onClick` or `onSubmit` in your component's create functions.
- Use the create functions inside your index.js to generate the UI components. You need to specify
  the event listener callback functions here either as anonymous functions or as named
  functions. Use them as the argument for `onClick` or `onSubmit`.
- append the created components at the right places in your html. All container elements are already
  available in the index.js

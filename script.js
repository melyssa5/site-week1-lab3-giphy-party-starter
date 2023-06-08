// Global Constants
const apiKey = "65yLpjQXIk19oK97k8WWAt0pdJh2zfcM";
const limit = 9;
const rating = "g";
const gifContainer = document.querySelector(".gif-container")
const hiddenButton = document.querySelector(".hidden");
const form = document.getElementById("form");

let pageNumber = 0;


/**
 * Update the DOM to display results from the Giphy API query.
 *
 * @param {Object} results - An array of results containing each item
 *                           returned by the response from the Giphy API.
 *
 */
function displayResults(results) {
  results.forEach(result => {
    let gif = generateGIF(result);
    gifContainer.appendChild(gif);
  })
}

function generateGIF(gifInfo) {
  // create a img element with the gif link
  let gifEl = document.createElement('img');
  gifEl.classList.add('gif-visual');
  gifEl.src = 'https://giphy.com/gifs/cat-shoe-3GRwYzxwdceaI';
  return gifEl
}

/**
 * Make the actual `fetch` request to the Giphy API
 * and appropriately handle the response.
 *
 * @param {String} searchTerm - The user input text used as the search query
 *
 */
async function getGiphyApiResults(searchTerm) {
  const response = await fetch('http://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + searchTerm + '&limit=9&rating=g');
  console.log(response)
  const jsonResponse = await response.json();
  console.log(jsonResponse.data)
  return jsonResponse.data;
}

/**
 * The function responsible for handling all form submission events.
 *
 * @param {SubmitEvent} event - The SubmitEvent triggered when submitting the form
 *
 */
async function handleFormSubmit(event) {
  event.preventDefault();


}

// searchForm.addEventListener("submit", handleFormSubmit)

/**
 * Handle fetching the next set of results from the Giphy API
 * using the same search term from the previous query.
 *
 * @param {MouseEvent} event - The 'click' MouseEvent triggered by clicking the 'Show more' button
 *
 */
async function handleShowMore(event) {
  // YOUR CODE HERE
}

window.onload = async function () {
  // YOUR CODE HERE
  // Add any event handlers here
  //displayResults(await getGiphyApiResults('kitten'));
  console.log(await getGiphyApiResults('kitten'))
 
}


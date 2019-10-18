// const API_LOCATION = 'Dublin';
const API_URL = 'http://api.openweathermap.org/data/2.5/group?id=2964574,2964180,2965140&cnt=16&units=metric&APPID=69022b8514da08aea2fdf64b94633d91';

function getWeather() {
// make request to API,
// use .then when the fetch is complete and return it as json
// when that is complete, we get access to the result which is an object
  return fetch(API_URL)
    .then(response => response.json());
}
// exporting the function to make it available in Home.vue
export default { getWeather };

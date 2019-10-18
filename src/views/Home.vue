<template>
  <div class="home">
    <div class="row">
        <div class="card">
          <div class="card-header">
             City: {{ weather.city.name }} <br>
          </div>
          <div class="card-body">
            Country: {{ weather.city.country }}<br>
            Timezone: {{ weather.city.timezone }}<br>
            Population: {{ weather.city.population }}<br>
            Description: {{ weather.list[0].weather[0].description }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// takes export from API.js and stores it in variable API
import API from '@/lib/API';

export default {
  name: 'home',
  // data is a function that returns an object
  data() {
    return {
      weather: {},
    };
  },
  // gets called when component is added to page and ready to go
  mounted() {
    // calls API function and get access to result
    API.getWeather().then((result) => {
      console.log(result);
      // weather here points up to weather in return statement
      this.weather = result;
    });
  },
};
</script>

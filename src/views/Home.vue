<template>
  <div class="home">
      <pre>{{ weather }}</pre>
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

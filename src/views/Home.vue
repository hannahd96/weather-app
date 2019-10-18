<template>
  <div class="home">
    <div class="row justify-content-center">
      <h2 style="color:white;">Forecast for Today</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h4 id="temp">{{ weather.list[0].name }}, Ireland</h4>
            <h3>{{ weather.list[0].main.temp}}°C</h3>
            <!-- <div id="icon">
              <img id="weather_icon" src="" alt="Weather Icon">
            </div> -->
          </div>
          <div class="card-body">
            <p>{{ weather.list[0].weather[0].main}}</p>
            <p>Min Temperature: {{ weather.list[0].main.temp_min}}°C</p>
            <p>Max Temperature: {{ weather.list[0].main.temp_max}}°C</p>
            <div class="dropdown">
              <span>More</span>
              <div class="dropdown-content">
              <p>Description: {{ weather.list[0].weather[0].description }} </p>
              <p>Humidity: {{ weather.list[0].main.humidity }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h4 id="temp">{{ weather.list[1].name }}, Ireland</h4>
            <h3>{{ weather.list[1].main.temp}}°C</h3>
          </div>
          <div class="card-body">
            <p>{{ weather.list[1].weather[0].main}} </p>
            <p>Min Temperature: {{ weather.list[1].main.temp_min}}°C</p>
            <p>Max Temperature: {{ weather.list[1].main.temp_max}}°C</p>
            <div class="dropdown">
              <span>More</span>
              <div class="dropdown-content">
              <p>Description: {{ weather.list[1].weather[0].description }} </p>
              <p>Humidity: {{ weather.list[1].main.humidity }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h4 id="temp">{{ weather.list[2].name }}, Ireland</h4>
            <h3>{{ weather.list[2].main.temp}}°C</h3>
          </div>
          <div class="card-body">
            <p>{{ weather.list[2].weather[0].main}} </p>
            <p>Min Temperature: {{ weather.list[2].main.temp_min}}°C</p>
            <p>Max Temperature: {{ weather.list[2].main.temp_max}}°C</p>
            <div class="dropdown">
              <span>More</span>
              <div class="dropdown-content">
              <p>Description: {{ weather.list[2].weather[0].description }} </p>
              <p>Humidity: {{ weather.list[2].main.humidity }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ideally would have used similar syntax to something below -->
      <!-- <ul>
        <li v-for="(weather, index) in weather" :key="weather.id">
          {{index}}.{{weather.list[0].name}}
        </li>
      </ul> -->
  </div>
</template>

<style>
  #weather_item{
    margin-top:20px;
  }
  .row {
    margin-top:50px;
  }
  #temp{
    font-weight: 100;
  }

  .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
  </style>

<script>
// takes export from API.js and stores it in variable API
import API from '@/lib/API';

// const iconcode = weather.list[0].weather[0].icon;
// const iconurl = `http://openweathermap.org/img/w/ ${iconcode} .png`;
// $('#weather_icon').attr('src', iconurl);

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

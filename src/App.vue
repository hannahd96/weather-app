<template>
  <!-- app is main component -->
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-light bg-default">
      <span class="navbar-brand mb-0 h1" style="margin-left:30px;">Vue Weather Application
        <i class="fas fa-cloud"></i></span>
          <li class="nav-item" style="list-style-type:none;margin-right:20px;">
        <a class="nav-link" style="color:black;" href="https://openweathermap.org/">API</a>
      </li>
    </nav>
    <!-- container -->
    <div class="container" style="margin-top:30px;">
   <!-- load all of the routes into the main area of the app -->
    <router-view/>
   </div>
  </div>
</template>

<style>
  body {
    background-image: url('assets/images/gradient_blue.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card{
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
  }
</style>

<template>
  <!-- app is main component -->
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-light bg-info">
      <span class="navbar-brand mb-0 h1">Vue Weather Application <i class="fas fa-cloud"></i></span>
    </nav>
    <!-- container -->
    <div class="container" style="margin-top:20px;">
   <!-- load all of the routes into the main area of the app -->
    <router-view/>
   </div>
  </div>
</template>

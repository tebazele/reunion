<script setup>
import Form from '../components/Form.vue';
</script>

<template>
  <header class="pos-rel">
    <div>
      <img alt="black and gold balloons" class="banner" src="@/assets/header.png"/>
    </div>
    <div class="pos-abs-2">
      <h1 class="great-vibes-regular">Monarch High School Class of '04</h1> 
      <h2 class="bebas-neue-regular ps-2">20-Year Reunion</h2>
    </div>
    <div class="pos-abs">
      <img alt="coyote" class="logo" src="@/assets/coyote.png
    " width="80" height="80" />
    </div>

   
  </header>
<main>
  <div class="main-area p-4 justify-around">
    <div class="event p-4"> 
      <h3>EVENT INFORMATION</h3>
      <h1 class="playfair-display date pb-2">Saturday June 8th, 2024</h1>
      <h5 class="top-heading-5">Daytime Event for Families:</h5>
      <p class="playfair-display">10:00 - 2:00 PM</p>
      <p class="playfair-display"><a href="https://maps.app.goo.gl/1eS45JrWqS3KLGqj6" target="_blank">Community Park</a></p>
      <p class="playfair-display">955 Bella Vista Dr, Louisville, Co 80027</p>
      <p class="playfair-display cost">Cost: Free</p>
      
      <h5 class="top-heading-5">Tour of Monarch High School:</h5>
      <p class="playfair-display">3:30 PM</p>
      <p class="playfair-display">Monarch High School</p>
      <p class="playfair-display">329 Campus Drive Louisville, CO 80027</p>
      <p class="playfair-display">Thanks goes to Autumn Francis for making this possible</p>
      <p class="playfair-display cost">Cost: Free</p>
      
      <h5 class="top-heading-5">Evening Event, Adults Only:</h5>
      <p class="playfair-display">7:00 - 9:00 PM</p>
      <p class="playfair-display"><a href="https://www.somethingbrewery.com/" target="_blank">Something Brewery</a></p>
      <p class="playfair-display">117 N Main st. Unit A, Brighton CO, 80601</p>
      <p class="playfair-display">Thanks goes to David Allegrezza for the venue</p>
      <p class="playfair-display cost">Cost: $25</p>
    </div>
    <div class="payment p-3"> 
      <h3>GET TICKETS FOR THE EVENING EVENT</h3>
      <h1 class="pt-2 date">$25</h1>
      <!-- PUT FORM HERE -->
      <Form />
      
<ul>
  <li ><p class="my-1 playfair-display">Tickets will also be available at the door.</p></li>
  <li><p class="my-1 playfair-display">Each ticket includes a drink and appetizers/snacks as well as entry into the raffle.</p></li>
  <li><p class="my-1 playfair-display"><a href="https://www.simplypizzatruck.com/" target="_blank">Simply Pizza Truck</a> will be there selling pizza.</p>
      <p></p></li>
      <li><p class="my-1 playfair-display">Come celebrate 20 years! We can't wait to see you all!</p></li>
      <li><p class="my-1 playfair-display">Email us at <a>monarchhighclassof04@gmail.com</a> if you have any questions!</p></li>
</ul>
    </div>

  </div>
</main>
<footer >
  <h6 class="sig">Website made by Jeanne 'Fischer' Allen</h6>
</footer>
</template>

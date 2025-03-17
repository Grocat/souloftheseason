$('.floorplan-slider').owlCarousel({
   loop: true,
   smartSpeed: 1500,
   margin: 30,
   nav: true,
   navText: ['<img src="image/color-left-arrow.svg.png" alt="">', '<img src="image/color-right-arrow.svg.png" alt="">'],
   responsive: {
     0: {
       items: 1
     },
     600: {
       items: 2
     },
     1000: {
       items: 3,
       stagePadding: 80,
     }
   }
 });
 
 document.addEventListener("DOMContentLoaded", function () {
   const tabs = document.querySelectorAll(".location-tab p");
   const locations = document.querySelectorAll(".locations");
   const images = document.querySelectorAll(".location-seo-img");
 
   tabs.forEach(tab => {
     tab.addEventListener("click", function () {
       const locationClass = this.getAttribute("data-location");
 
       // Remove active class from all tabs
       tabs.forEach(t => t.classList.remove("active"));
 
       // Add active class to clicked tab
       this.classList.add("active");
 
       // Hide all locations and images
       locations.forEach(loc => loc.classList.remove("active"));
       images.forEach(img => img.classList.remove("active"));
 
       // Show the selected location details and image
       document.querySelector(locationClass).classList.add("active");
       document.querySelector(`.location-seo-img${locationClass}`).classList.add("active");
     });
   });
 });
 $(document).ready(function () {
   $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown(); //Remove this line if you dont want the first item to be opened automatically.	
   $(".faq-question").on("click", function () {
     if ($(this).parent().hasClass("active")) {
       $(this).next().slideUp();
       $(this).parent().removeClass("active");
     } else {
       $(".faq-answer").slideUp();
       $(".faq-singular").removeClass("active");
       $(this).parent().addClass("active");
       $(this).next().slideDown();
     }
   });
 });
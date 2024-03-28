// Add an event listener to the card element that toggles the "active" class for the detail element when the card is clicked
$(".card").on("click", function() {
    $(".detail").addClass("active");
  });
  
  // Add an event listener to the close-detail button and the overlay element that toggles the "active" class for the detail element when either one is clicked
  $(".close-detail, .detail-overlay").on("click", function() {
    $(".detail").removeClass("active");
  });
  
  // Add an event listener to the menu-bar button that toggles the "active" class for the sidebar element when the button is clicked
  $(".menu-bar").on("click", function() {
    $(".sidebar").addClass("active");
  });
  
  // Add an event listener to the logo element that toggles the "active" class for the sidebar and navbar elements when the logo is clicked
  $(".logo").on("click", function() {
    $(".sidebar, .navbar").removeClass("active");
  });

  document.getElementById('job-app-btn').addEventListener('click', () => {
    window.open('job-application-form.html', '_blank');
  });

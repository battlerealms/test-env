document.addEventListener("DOMContentLoaded", function() {

  // Add event listeners to all tab button
  var tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(function(tab) {
    tab.addEventListener('click', function() {
    
      // Remove glow effect from all tab buttons
      tabButtons.forEach(function(tab) {
        tab.classList.remove('active-glow');
      });

      // Add glow effect to the clicked tab button
      this.classList.add('active-glow');
    });
  });

  // Add active class to the default active tab button
  document.querySelector('.tab:first-child').classList.add('active');

  // Add glow effect to default active tab button
  document.querySelector('.tab.active').classList.add('active-glow');
});

function showContent(topic) {
  var contentDivs = document.querySelectorAll('.widget .content > div');
  var tabButtons = document.querySelectorAll('.widget .tab');

  // Remove active class from all content divs
  contentDivs.forEach(function(div) {
    div.classList.remove('active');
  });

  // Remove glow effect from all tab buttons
  tabButtons.forEach(function(tab) {
    tab.classList.remove('active-glow');
  });

  // Add active class to the clicked content div
  document.getElementById(topic).classList.add('active');

  // Add glow effect to the clicked tab button
  var clickedTab = document.querySelector('.tab[data-topic="' + topic + '"]');
  if (clickedTab) {
    clickedTab.classList.add('active-glow');
  }
}

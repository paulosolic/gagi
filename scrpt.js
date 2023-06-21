// Add this code to your script.js file

window.addEventListener('DOMContentLoaded', function() {
    var envelope = document.querySelector('.envelope');
    envelope.addEventListener('click', function() {
      envelope.classList.add('opened');
    });
  });
  
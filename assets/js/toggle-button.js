// Toggle button function
function toggleButton() {
  var html = document.querySelector('html');
  var toggleButton = document.querySelector('.toggle-button');

  if (html.classList.contains('dark_mode')) {
    toggleButton.setAttribute('aria-pressed', 'true');
    toggleButton.innerHTML = '<i class="material-icons toggle-button__icon toggle-button__icon--sun">wb_sunny</i><i class="material-icons toggle-button__icon toggle-button__icon--moon">brightness_2</i>';
  } else {
    toggleButton.setAttribute('aria-pressed', 'false');
    toggleButton.innerHTML = '<i class="material-icons toggle-button__icon toggle-button__icon--sun">wb_sunny</i><i class="material-icons toggle-button__icon toggle-button__icon--moon">brightness_2</i>';
  }

  toggleButton.classList.add('toggle-button--hidden');
}

// Add event listener to toggle button
var toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', function() {
  var html = document.querySelector('html');
  var darkModeToggle = document.querySelector('#dark-mode-toggle');
  var lightModeToggle = document.querySelector('#light-mode-toggle');

  html.classList.toggle('dark_mode');

  if (darkModeToggle.classList.contains('toggle-button--hidden')) {
    darkModeToggle.classList.remove('toggle-button--hidden');
    lightModeToggle.classList.add('toggle-button--hidden');
  } else {
    darkModeToggle.classList.add('toggle-button--hidden');
    lightModeToggle.classList.remove('toggle-button--hidden');
  }
});
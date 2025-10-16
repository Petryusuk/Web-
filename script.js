// Знаходимо кнопку "Find" та саме вікно сповіщення
const findButton = document.getElementById("find-btn");
const alertBox = document.querySelector('.alert');
const alertText = alertBox.querySelector('span');
const closeAlertButton = document.querySelector('.close-alert');

// Натискання на "Find"
findButton.addEventListener("click", () => {
  // Текст сповіщення
  alertText.textContent = 'You do not have permission to access this page. Please log in.';
  
  // Робимо вікно сповіщення видимим
  alertBox.style.display = 'flex';
});

// Закриття вікна
closeAlertButton.addEventListener('click', () => {
  alertBox.style.display = 'none';
});
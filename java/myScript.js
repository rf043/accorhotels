const form = document.getElementById('suggestionForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const suggestion = document.getElementById('suggestion').value;

  console.log("User suggestion:", suggestion);
  // Process the user's input here

  // You might want to clear the form after submission:
  form.reset();
});
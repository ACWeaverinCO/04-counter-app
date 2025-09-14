// We use 'let' for count because its value will change
let count = 0;

// Get the count display element
const countDisplay = document.getElementById('count'); // 'const' because this reference won't change

// Get the Enter button
const enterButton = document.getElementById('increase'); // 'const' because this reference won't change

// Get the Exit button
const exitButton = document.getElementById('decrease'); // 'const' because this reference won't change

// Get the Reset button
const resetButton = document.getElementById('reset'); // 'const' because this reference won't change

// When the Enter button is clicked, increase the count and update the display
enterButton.addEventListener('click', function() {
	count++; // Increase count by 1
	countDisplay.textContent = count; // Update the display
});

// When the Exit button is clicked, decrease the count and update the display
exitButton.addEventListener('click', function() {
	if (count > 0) {
		count--; // Decrease count by 1
	}
	countDisplay.textContent = count; // Update the display
});

// When the Reset button is clicked, set the count to zero and update the display
resetButton.addEventListener('click', function() {
  count = 0;
  countDisplay.textContent = count;
});

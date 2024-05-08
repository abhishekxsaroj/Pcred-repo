// Function to animate count-up numbers
function countUp(elementId, targetNumber) {
  let count = 0;
  const duration = 2000; // Adjust duration in milliseconds
  const framesPerSecond = 60;
  const increment = targetNumber / (duration / 1000 * framesPerSecond);
  let currentNumber = 0;

  const timer = setInterval(() => {
      currentNumber += increment;
      count++;
      document.getElementById(elementId).innerText = Math.round(currentNumber);

      if (count >= duration / 1000 * framesPerSecond) {
          clearInterval(timer);
          document.getElementById(elementId).innerText = targetNumber;
      }
  }, 1000 / framesPerSecond); // Adjust interval for smoother animation
}

// Call countUp function for each element
countUp('happyClientsCount', 999);
countUp('completedProjectsCount', 499);
countUp('teamMembersCount', 149);

const app = function () {
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');

  let currentX = canvas.width / 2;
  let currentY = canvas.height / 2;

  const backgroundColour = '#e2e2e2'

  context.fillStyle = backgroundColour;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(currentX, currentY);

  const checkKey = function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      leftArrow();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      upArrow();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      rightArrow();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      downArrow();
    } else if (event.key === 'Backspace') {
      clearAll();
    }
  }

  const leftArrow = function () {
    if (currentX !== 0) currentX -= 5;
    drawLine();
  }

  const rightArrow = function () {
    if (currentX !== canvas.width) currentX += 5;
    drawLine();
  }

  const upArrow = function () {
    if (currentY !== 0) currentY -= 5;
    drawLine();
  }

  const downArrow = function () {
    if (currentY !== canvas.height) currentY += 5;
    drawLine();
  }

  const drawLine = function () {
    context.lineTo(currentX, currentY);
    context.stroke();
  }

  const clearAll = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  document.addEventListener('keydown', checkKey);
  document.addEventListener('keypress', checkKey);

}

document.addEventListener('DOMContentLoaded', app);

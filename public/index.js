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
    const key = event.key;
    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        leftArrow();
        break;
      case 'ArrowUp':
        event.preventDefault();
        upArrow();
        break;
      case 'ArrowRight':
        event.preventDefault();
        rightArrow();
        break;
      case 'ArrowDown':
        event.preventDefault();
        downArrow();
        break;
      case 'Backspace':
        clearAll();
        break;
      case 'Delete':
        clearAll();
        break;
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
    const canvasDiv = document.getElementById('canvas-div');
    canvasDiv.className = 'shake';
    setTimeout(function () {
      canvasDiv.className = '';
    }, 1000)
  }

  document.addEventListener('keydown', checkKey);

}

document.addEventListener('DOMContentLoaded', app);

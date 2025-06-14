// Initialize the canvas and set the background to sky blue
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
});

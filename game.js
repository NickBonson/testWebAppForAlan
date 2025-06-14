// Initialize the canvas and set the background to sky blue
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Player represented by an emoji with position and velocity
  const player = {
    emoji: '🧍',
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 0,
    vy: 0,
  };

  const drawBackground = () => {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawPlayer = () => {
    const fontSize = 40;
    ctx.font = `${fontSize}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(player.emoji, player.x, player.y);
  };

  const update = () => {
    player.x += player.vx;
    player.y += player.vy;
  };

  const loop = () => {
    update();
    drawBackground();
    drawPlayer();
    requestAnimationFrame(loop);
  };

  drawBackground();
  drawPlayer();
  requestAnimationFrame(loop);
});

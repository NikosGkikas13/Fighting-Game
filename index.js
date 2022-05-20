const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, 150);
  }
}

const player1 = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
});
const player2 = new Sprite({
  position: { x: 500, y: 400 },
  velocity: { x: 0, y: 0 },
});

player1.draw();
player2.draw();

const animate = () => {
  window.requestAnimationFrame(animate);
  console.log("hi");
};
animate();

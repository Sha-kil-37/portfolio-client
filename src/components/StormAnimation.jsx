import { useEffect, useRef } from "react";

const StormAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const LEFT = "LEFT";
    const RIGHT = "RIGHT";

    const getDir = () => (Math.random() * 30 < 16 ? LEFT : RIGHT);

    class Cloud {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30;
        this.clr = "silver";
        this.dir = getDir();
        this.speed = Math.random() * 2 + 1;
      }
      moveLeft() {
        this.x -= this.speed;
      }
      moveRight() {
        this.x += this.speed;
      }
      update() {
        if (this.x <= 0) this.dir = RIGHT;
        else if (this.x >= canvas.width) this.dir = LEFT;
        this.dir === LEFT ? this.moveLeft() : this.moveRight();
      }
      drawLightning() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let sx = this.x,
          sy = this.y,
          ex = sx + Math.random() * 30 - 15,
          ey = sy + Math.random() * 30,
          i = 0,
          limit = Math.random() * 20 + 10;

        while (i < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "silver";
          ctx.lineWidth = 3;
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();
          sx = ex;
          sy = ey;
          ex = sx + Math.random() * 30 - 15;
          ey = sy + Math.random() * 30;
          i++;
        }
      }
      draw() {
        if (this.y < 50) return; // Prevents clouds from appearing at the top

        ctx.beginPath();
        ctx.fillStyle = this.clr;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        if (Math.random() * 100000 < 100) this.drawLightning();
      }
    }

    const clouds = [];
    for (let i = 0; i < canvas.width; i += Math.random() * 10 + 1) {
      clouds.push(new Cloud(i, Math.random() * canvas.height * 0.9 + 50)); // Prevents top clouds
    }

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowColor = "aliceblue";
      ctx.shadowBlur = 10;
      clouds.forEach((c) => {
        c.draw();
        c.update();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute w-full h-full bg-black" />;
};

export default StormAnimation;

import { useEffect, useRef } from "react";

const CloudLightningCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const LEFT = "LEFT";
    const RIGHT = "RIGHT";
    const getDir = () => (Math.random() * 30 < 16 ? LEFT : RIGHT);
    
    class Cloud {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.floor(Math.random() * 80);
        this.clr = "silver";
        this.dir = getDir();
        this.speed = Math.random() * 0.5 + 0.2; // Slower movement speed
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
      drawRoot(x, y) {
        let sx = x,
          sy = y,
          ex = sx + Math.floor(Math.random() * 50) - 15,
          ey = sy + Math.floor(Math.random() * 30);
        let i = 0,
          limit = Math.floor(Math.random() * 20);
        while (i < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "silver";
          ctx.lineWidth = 1;
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();
          sx = ex;
          sy = ey;
          ex = sx + Math.floor(Math.random() * 50) - 15;
          ey = sy + Math.floor(Math.random() * 30);
          i++;
        }
      }
      drawLightning() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)"; // Reduced opacity for slower effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let sx = this.x,
          sy = this.y,
          ex = sx + Math.floor(Math.random() * 30) - 15,
          ey = sy + Math.floor(Math.random() * 30);
        let i = 0,
          limit = Math.floor(Math.random() * 15) + 5; // Less intense lightning effect
        while (i < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "silver";
          ctx.lineWidth = 2;
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();
          sx = ex;
          sy = ey;
          ex = sx + Math.floor(Math.random() * 30) - 15;
          ey = sy + Math.floor(Math.random() * 30);
          if (Math.random() * 1000 < 25) this.drawRoot(sx, sy); // Less frequent root lightning
          i++;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.clr;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        if (Math.random() * 100000 < 50) this.drawLightning(); // Less frequent lightning
      }
    }

    const clouds = [];
    for (let i = 0; i < canvas.width; i += Math.floor(Math.random() * 20) + 5) {
      clouds.push(new Cloud(i, 0));
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="mt-30 w-full h-60" />;
};

export default CloudLightningCanvas;

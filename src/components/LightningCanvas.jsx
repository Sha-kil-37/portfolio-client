import { useEffect, useRef } from "react";
//
const LightningCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load PNG image
    const image = new Image();
    image.src = "/src/assets/shakil.png"; // Replace with your PNG image URL
    image.onload = () => {
      animate();
    };

    const LEFT = "LEFT";
    const RIGHT = "RIGHT";
    const getDir = () => (Math.random() * 30 < 16 ? LEFT : RIGHT);

    class Lightning {
      constructor(x) {
        this.x = x;
        this.y = Math.random() * (canvas.height * 0.2) + 50;
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
      draw() {
        if (Math.random() * 100000 < 50) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          let sx = this.x,
            sy = this.y,
            ex = sx + Math.floor(Math.random() * 30) - 15,
            ey = sy + Math.floor(Math.random() * 30);
          let i = 0,
            limit = Math.floor(Math.random() * 15) + 5;
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
            if (Math.random() * 1000 < 25) this.drawRoot(sx, sy);
            i++;
          }
        }
      }
    }

    const lightnings = [];
    for (let i = 0; i < canvas.width; i += Math.floor(Math.random() * 20) + 5) {
      lightnings.push(new Lightning(i));
    }

    const animate = () => {
      // Draw default background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#264e70"); // Dark blue
      gradient.addColorStop(1, "#16213e"); // Deep blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw PNG image with transparency
      if (image.complete) {
        ctx.drawImage(
          image,
          canvas.width / 4,
          canvas.height / 4,
          canvas.width / 2,
          canvas.height / 2
        );
      }

      ctx.shadowColor = "aliceblue";
      ctx.shadowBlur = 10;

      lightnings.forEach((l) => {
        l.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="mt-30 w-full h-160" />;
};

export default LightningCanvas;

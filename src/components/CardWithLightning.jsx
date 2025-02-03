import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/src/assets/one.png",
    "/src/assets/images/two.png",
    "/src/assets/images/three.png",
    "/src/assets/images/four.png"
  ];

const LightningCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#264e70");
      gradient.addColorStop(1, "#16213e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.shadowColor = "aliceblue";
      ctx.shadowBlur = 10;
      lightnings.forEach((l) => {
        l.draw();
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

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-50" />;
};

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 overflow-hidden rounded-xl shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover rounded-xl"
        />
      </AnimatePresence>
    </div>
  );
};

const CardWithLightning = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <LightningCanvas />
      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl flex items-center justify-center">
        <ImageSlider />
      </div>
    </div>
  );
};

export default CardWithLightning;
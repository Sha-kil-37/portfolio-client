import { useRef, useEffect } from "react";

const Test = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size for desktop
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Bounce on edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Test;

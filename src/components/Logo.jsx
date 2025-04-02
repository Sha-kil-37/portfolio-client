import { useEffect, useRef } from "react";

const Logo = () => {
  const canvasRef = useRef(null);
  //
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw your signature
    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.bezierCurveTo(20, 30, 40, 70, 50, 50);
    ctx.bezierCurveTo(60, 30, 80, 70, 90, 50);
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={200} height={100} />;
};

export default Logo;

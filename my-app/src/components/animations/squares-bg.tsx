"use client";

import { useRef, useEffect } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "down" | "left" | "right";
  speed?: number;
  squareSize?: number;
  borderColor?: string;
  hoverFillColor?: string;
}

interface GridOffset {
  x: number;
  y: number;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "diagonal",
  speed = 1,
  squareSize = 50,
  borderColor = "#fff",
  hoverFillColor = "#222",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (
        let x = -squareSize;
        x < canvas.width + squareSize;
        x += squareSize
      ) {
        for (
          let y = -squareSize;
          y < canvas.height + squareSize;
          y += squareSize
        ) {
          const posX = x - (gridOffset.current.x % squareSize);
          const posY = y - (gridOffset.current.y % squareSize);

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(posX, posY, squareSize, squareSize);
        }
      }
    };

    const animate = () => {
      switch (direction) {
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
          gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;
          break;
        case "right":
          gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x - speed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y - speed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, squareSize, borderColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10"
    />
  );
};

export default Squares;

import { use, useCallback, useEffect, useRef, useState } from 'react';

const STARS_COUNT = 200;

interface Star {
  x: number;
  y: number;
  size: number;
}

export const Stars = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [stars, setStars] = useState<Star[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const createStars = (
    count: number,
    sizeRange: { min: number; max: number },
    canvasSize: { width: number; height: number }
  ) => {
    const stars: Star[] = [];
    const { min, max } = sizeRange;
    const { width, height } = canvasSize;

    for (let i = 0; i < count; i++) {
      const star = {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (max - min) + min,
      };

      stars.push(star);
    }

    return stars;
  };

  const setScale = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    if (canvas && ctx) {
      for (const star of stars) {
        console.log('star:', star);
        ctx.fillStyle = 'rgb(256, 256, 256)';
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
    }

    window.requestAnimationFrame(draw);
  }, [stars]);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }

    if (mounted && canvasRef.current && stars.length === 0) {
      setStars(
        createStars(
          1000,
          { min: 2, max: 8 },
          { width: window.innerWidth, height: window.innerHeight }
        )
      );

      setScale();
      ctxRef.current = canvasRef.current.getContext('2d');
      draw();
    }
  }, [draw, mounted, setScale, stars.length]);

  useEffect(() => {
    window.addEventListener('resize', setScale);

    return () => {
      window.removeEventListener('resize', setScale);
    };
  }, [setScale]);

  return (
    <div
      id="stars-container"
      className="absolute top-0 left-0 h-screen w-screen"
    >
      <canvas
        ref={canvasRef}
        className="image-rendering-pixelated h-full w-full"
      ></canvas>
    </div>
  );
};

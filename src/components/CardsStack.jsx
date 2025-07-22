//

import { useState, useEffect, useRef } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;
//
export default function CardsStack({ cards }) {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const [current, setCurrent] = useState(cards.length - 1); // Start from the last card (top of stack)
  const intervalRef = useRef();

  // Auto-change card every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        // If we've reached the first card, start again from the top
        if (prev <= 0) return cards.length - 1;
        return prev - 1; // Move to the previous card (higher in the stack)
      });
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [cards.length]);

  // Flick out the current card when current changes
  useEffect(() => {
    if (cards.length === 0) return;
    gone.add(current);
    api.start((i) => {
      if (i !== current) return;
      const dir = 1; // Always to the right for auto
      const x = (200 + window.innerWidth) * dir;
      const rot = dir * 10;
      const scale = 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 150, tension: 150 },
      };
    });
    if (gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
        setCurrent(cards.length - 1); // Reset to top card
      }, 600);
    }
  }, [current, api, cards.length, gone]);

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: isGone ? 40 : down ? 800 : 500,
            tension: isGone ? 300 : down ? 800 : 500,
          },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  //
  return (
    <div className="relative min-h-80 min-w-50 max-h-100 max-w-70 ml-auto">
      {props.map(({ x, y, rot, scale, opacity }, i) => (
        <animated.div
          className="absolute right-0 h-full w-full will-change-transform"
          key={i}
          style={{ x, y }}
        >
          <animated.div
            {...bind(i)}
            className="bg-cover bg-center h-full w-full rounded-lg shadow-lg cursor-grab will-change-transform user-select-none transition-shadow duration-300 ease-in-out"
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              opacity,
              boxShadow: scale.to(
                (s) => `0 20px 40px rgba(0,0,0,${(s - 1) * 0.3})`
              ),
            }}
          />
        </animated.div>
      ))}
    </div>
  );
}
//

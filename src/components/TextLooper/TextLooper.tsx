import { useState, useEffect, useRef } from "react";

import clsx from "clsx";

import textLooperStyles from "./TextLooper.module.scss";

const words = [
  "Executive Staffing",
  "Building Growth Engine",
  "Business Consulting",
];
const FADE_DURATION = 500;
const DISPLAY_DURATION = 2500;

const TextLooper = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    timerRef.current = setTimeout(() => {
      setVisible(false);
      timerRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <span
      className={clsx(textLooperStyles.blinkingText, {
        [textLooperStyles.visible]: visible,
      })}
    >
      {words[index]}
    </span>
  );
};

export default TextLooper;

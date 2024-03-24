/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10); // Typing speed

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default Typewriter;

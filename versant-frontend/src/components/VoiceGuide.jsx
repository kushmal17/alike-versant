import { useEffect } from "react";

const VoiceGuide = ({ text, onStart, onEnd }) => {
  useEffect(() => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;

    utterance.onstart = () => {
      onStart && onStart();
    };

    utterance.onend = () => {
      onEnd && onEnd();
    };

    speechSynthesis.speak(utterance);

    return () => speechSynthesis.cancel();
  }, [text]);

  return null;
};

export default VoiceGuide;

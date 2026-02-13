import { useState, useEffect, useRef } from "react";
import Timer from "../components/Timer";

const PartA = () => {
  const recognitionRef = useRef(null);
  const question = "What color is the sky?";

  const [voiceDone, setVoiceDone] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {
    const speak = (text) =>
      new Promise((resolve) => {
        const u = new SpeechSynthesisUtterance(text);
        u.onend = resolve;
        window.speechSynthesis.speak(u);
      });

    const run = async () => {
      await speak("Listen to the question.");
      await speak(question);
      setVoiceDone(true);
    };

    run();
  }, []);

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => setTimerActive(true);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleTimeUp = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setTimeOver(true);
    setTimerActive(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center">

      <h2 className="mb-6">Part A</h2>

      <p className="text-xl mb-6">{question}</p>

      {timerActive && (
        <Timer duration={15} onTimeUp={handleTimeUp} />
      )}

      {voiceDone && !timerActive && !timeOver && (
        <button
          onClick={startRecording}
          className="bg-blue-600 px-8 py-3 rounded-full text-white"
        >
          Start Recording
        </button>
      )}

      {timeOver && (
        <button className="bg-green-600 px-8 py-3 rounded-full text-white">
          Next Part
        </button>
      )}

    </div>
  );
};

export default PartA;

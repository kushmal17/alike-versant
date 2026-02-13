import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";

const SampleTest = () => {
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  const question =
    "How do you like to spend your weekend time? Explain in detail.";

  const [readyToRecord, setReadyToRecord] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const speak = (text) =>
      new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = resolve;
        window.speechSynthesis.speak(utterance);
      });

    const run = async () => {
      await speak("Record a speech sample.");
      await speak("You have 30 seconds to answer.");
      await speak(question);
      setReadyToRecord(true);
    };

    run();
  }, []);

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsRecording(true);
      setTimerActive(true);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleTimeUp = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    navigate("/part-a-intro");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">

      <h2 className="text-xl mb-8">Record a Sample Speech</h2>

      <p className="text-2xl mb-6">{question}</p>

      {timerActive && (
        <Timer duration={30} onTimeUp={handleTimeUp} />
      )}

      {readyToRecord && (
        <button
          onClick={startRecording}
          disabled={isRecording}
          className="bg-blue-600 px-8 py-3 rounded-full"
        >
          {isRecording ? "Recording..." : "🎤 Start Recording"}
        </button>
      )}

    </div>
  );
};

export default SampleTest;

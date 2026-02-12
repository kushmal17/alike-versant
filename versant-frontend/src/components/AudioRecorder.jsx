import { useState, useRef } from "react";

const AudioRecorder = ({
  correctAnswer,
  onRecordingStart,
  onEvaluationComplete
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const calculateSimilarity = (user, correct) => {
    const userWords = user.split(" ");
    const correctWords = correct.split(" ");

    let matchCount = 0;

    userWords.forEach(word => {
      if (correctWords.includes(word)) {
        matchCount++;
      }
    });

    const percent = (matchCount / correctWords.length) * 100;

    if (percent >= 90) return 100;
    if (percent >= 70) return 80;
    if (percent >= 50) return 60;
    return 40;
  };

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
      onRecordingStart();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();

      const score = calculateSimilarity(
        transcript,
        correctAnswer.toLowerCase()
      );

      onEvaluationComplete(score);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  return (
    <button
      onClick={startRecording}
      disabled={isRecording}
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full"
    >
      {isRecording ? "Recording..." : "🎤 Start Recording"}
    </button>
  );
};

export default AudioRecorder;

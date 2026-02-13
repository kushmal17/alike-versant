import { useState } from "react";

const AudioRecorder = ({
  correctAnswer,
  onRecordingStart,
  onEvaluationComplete
}) => {
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setRecording(true);
      onRecordingStart();
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript.toLowerCase();

      let score = text.includes(correctAnswer.toLowerCase())
        ? 100
        : 60;

      onEvaluationComplete(score);
    };

    recognition.onend = () => setRecording(false);

    recognition.start();
  };

  return (
    <button
      onClick={startRecording}
      disabled={recording}
      className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full"
    >
      {recording ? "Recording..." : "🎤 Start Recording"}
    </button>
  );
};

export default AudioRecorder;

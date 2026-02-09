import { useState, useRef } from "react";

const AudioRecorder = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: "audio/webm" });
      audioChunks.current = [];
      onRecordingComplete(blob);
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!isRecording ? (
        <button
          onClick={startRecording}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition"
        >
          🎤 Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition"
        >
          ⏹ Stop Recording
        </button>
      )}
    </div>
  );
};

export default AudioRecorder;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import AudioRecorder from "../components/AudioRecorder";
import VoiceGuide from "../components/VoiceGuide";
import TestProgress from "../components/TestProgress";
import AISpeakingIndicator from "../components/AISpeakingIndicator";

const sections = [
  {
    id: "A",
    instruction: "Give a short answer to the question.",
    question: "What color is the sky?",
    correctAnswer: "blue",
    time: 30
  },
  {
    id: "B",
    instruction: "Repeat the sentence you hear.",
    question: "Technology improves communication.",
    correctAnswer: "Technology improves communication",
    time: 30
  },
  {
    id: "C",
    instruction: "Listen and answer the question.",
    audio: "/audio/11.1.mp3",
    question: "Why is the man late?",
    correctAnswer: "He missed the bus",
    time: 30
  }
];

const Test = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState(
    sections[0].audio ? "audio" : "instruction"
  );
  const [scores, setScores] = useState([]);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const currentSection = sections[currentIndex];

  // Move to next section
  const moveToNextSection = () => {
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setPhase(sections[nextIndex].audio ? "audio" : "instruction");
      setIsTimerActive(false);
    } else {
      const finalScore =
        scores.length > 0
          ? scores.reduce((a, b) => a + b, 0) / scores.length
          : 0;

      localStorage.setItem(
        "finalScore",
        finalScore.toFixed(0)
      );

      navigate("/result", { replace: true });
    }
  };

  const handleVoiceEnd = () => {
    setPhase("ready");
  };

  const handleRecordingStart = () => {
    setIsTimerActive(true);
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    moveToNextSection();
  };

  return (
    <div className="flex flex-col items-center gap-8 px-6">

      <TestProgress
        currentIndex={currentIndex}
        total={sections.length}
      />

      <AISpeakingIndicator isSpeaking={isAISpeaking} />

      {/* 🔊 AUDIO SECTION */}
      {phase === "audio" && currentSection.audio && (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 w-full max-w-md text-center">

          <h3 className="text-white text-lg mb-4">
            Listen Carefully
          </h3>

          <audio
            controls
            className="w-full mb-4"
            onEnded={() => setPhase("question")}
          >
            <source
              src={currentSection.audio}
              type="audio/mpeg"
            />
            Your browser does not support audio.
          </audio>

          <p className="text-zinc-400 text-sm">
            After the audio ends, the question will appear.
          </p>

        </div>
      )}

      {/* 🤖 AI INSTRUCTION */}
      {phase === "instruction" && (
        <VoiceGuide
          text={`Part ${currentSection.id}. ${currentSection.instruction}`}
          onStart={() => setIsAISpeaking(true)}
          onEnd={() => {
            setIsAISpeaking(false);
            setPhase("question");
          }}
        />
      )}

      {/* 🤖 AI QUESTION */}
      {phase === "question" && (
        <VoiceGuide
          text={currentSection.question}
          onStart={() => setIsAISpeaking(true)}
          onEnd={() => {
            setIsAISpeaking(false);
            handleVoiceEnd();
          }}
        />
      )}

      {/* Show Question */}
      {(phase === "question" || phase === "ready") && (
        <QuestionCard question={currentSection.question} />
      )}

      {/* 🎤 RECORDING SECTION */}
      {phase === "ready" && (
        <>
          {isTimerActive && (
            <Timer
              key={currentIndex}
              duration={30}
              onTimeUp={handleTimeUp}
            />
          )}

          <AudioRecorder
            key={currentIndex}
            correctAnswer={currentSection.correctAnswer}
            onRecordingStart={handleRecordingStart}
            onEvaluationComplete={(score) => {
              setScores(prev => [...prev, score]);
            }}
          />
        </>
      )}

    </div>
  );
};

export default Test;

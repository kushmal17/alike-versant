import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import AudioRecorder from "../components/AudioRecorder";
import VoiceGuide from "../components/VoiceGuide";
import TestProgress from "../components/TestProgress";
import AISpeakingIndicator from "../components/AISpeakingIndicator";
import { calculateFinalScore } from "../utils/helpers";

const sections = [
  { id: "A", instruction: "Give a short answer to the question.", question: "What color is the sky?", time: 10 },
  { id: "B", instruction: "Repeat the sentence you hear.", question: "Technology improves communication.", time: 10 },
  { id: "C", instruction: "Listen and answer the question.", question: "Why is the man late?", time: 15 },
  { id: "D", instruction: "Answer the question about the passage.", question: "What is the main idea?", time: 20 },
  { id: "E", instruction: "Retell the passage in your own words.", question: "The passage discusses the importance of exercise.", time: 30 },
  { id: "F", instruction: "Give your opinion on the topic.", question: "Do you think remote work is effective?", time: 30 },
];

const Test = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("instruction");
  const [recordings, setRecordings] = useState([]);
  const [isAISpeaking, setIsAISpeaking] = useState(false);

  const currentSection = sections[currentIndex];

  // Move between phases
  const handleVoiceEnd = () => {
    if (phase === "instruction") {
      setPhase("question");
    } else if (phase === "question") {
      setPhase("recording");
    }
  };

  // When timer ends
  const handleTimeUp = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setPhase("instruction");
    } else {
      const finalScore = calculateFinalScore(recordings);
      localStorage.setItem("finalScore", finalScore);
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-8 px-6">

      {/* Progress Bar */}
      <TestProgress currentIndex={currentIndex} total={sections.length} />

      {/* AI Speaking Animation */}
      <AISpeakingIndicator isSpeaking={isAISpeaking} />

      {/* Instruction Voice */}
      {phase === "instruction" && (
        <VoiceGuide
          text={`Part ${currentSection.id}. ${currentSection.instruction}`}
          onStart={() => setIsAISpeaking(true)}
          onEnd={() => {
            setIsAISpeaking(false);
            handleVoiceEnd();
          }}
        />
      )}

      {/* Question Voice */}
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

      {/* Question Display */}
      {(phase === "question" || phase === "recording") && (
        <QuestionCard question={currentSection.question} />
      )}

      {/* Recording Phase */}
      {phase === "recording" && (
        <>
          <Timer
            duration={currentSection.time}
            onTimeUp={handleTimeUp}
          />

          <AudioRecorder
            onRecordingComplete={(blob) =>
              setRecordings((prev) => [...prev, blob])
            }
          />
        </>
      )}

    </div>
  );
};

export default Test;

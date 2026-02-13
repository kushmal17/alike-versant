import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PartAIntro = () => {
  const navigate = useNavigate();
  const [voiceDone, setVoiceDone] = useState(false);

  useEffect(() => {
    const speak = (text) =>
      new Promise((resolve) => {
        const u = new SpeechSynthesisUtterance(text);
        u.onend = resolve;
        window.speechSynthesis.speak(u);
      });

    const run = async () => {
      await speak("Part A. Give a short answer to the question.");
      await speak("Listen to a question. Answer with one word.");
      await speak(
        "For example, what would a person use to open a locked door?"
      );
      await speak("You say: Key or A key.");
      setVoiceDone(true);
    };

    run();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">

      <h2 className="mb-6">Part A: Give a short answer</h2>

      {voiceDone && (
        <button
          onClick={() => navigate("/part-a")}
          className="bg-blue-600 px-8 py-3 rounded-full"
        >
          Start Part A
        </button>
      )}
    </div>
  );
};

export default PartAIntro;

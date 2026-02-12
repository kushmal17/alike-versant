import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VoiceGuide from "../components/VoiceGuide";

const SpeakingTips = () => {
  const navigate = useNavigate();
  const [voiceFinished, setVoiceFinished] = useState(false);

  const fullText = `
  It is important to speak naturally during the test.
  Here are some tips.
  Speak at a normal speed like you would during a conversation.
  Speak like you are talking to another person on the phone.
  There is no need to speak too slowly or carefully.
  Speak at a normal volume, not too loud or too soft.
  When you are ready, click next for your test.
  `;

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

      {/* AI Voice */}
      <VoiceGuide
        text={fullText}
        onEnd={() => setVoiceFinished(true)}
      />

      <div className="bg-zinc-900 text-white w-full max-w-xl rounded-3xl shadow-2xl p-10 border border-zinc-800">

        <h2 className="text-center text-2xl font-semibold mb-6">
          Speaking Tips
        </h2>

        <div className="text-zinc-300 space-y-4 leading-relaxed text-lg">

          <p>
            It is important to <span className="font-semibold text-white">speak naturally</span> during the test.
          </p>

          <p>Here are some tips:</p>

          <ul className="space-y-3 list-disc list-inside">
            <li>
              Speak at a <span className="font-semibold text-white">normal speed</span> like you would during a conversation.
            </li>
            <li>
              Speak like you are <span className="font-semibold text-white">talking to another person</span> on the phone.
              There is no need to speak too slowly or carefully.
            </li>
            <li>
              Speak at a <span className="font-semibold text-white">normal volume</span>, not too loud or too soft.
            </li>
          </ul>

          <p className="pt-4">
            When you are ready, click <span className="font-semibold text-white">Next</span>.
          </p>

        </div>

        <button
          disabled={!voiceFinished}
          onClick={() => navigate("/test")}
          className={`w-full mt-8 py-4 rounded-full text-lg font-medium transition ${
            voiceFinished
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-zinc-700 cursor-not-allowed"
          }`}
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default SpeakingTips;

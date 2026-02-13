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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6 text-white">

      <VoiceGuide
        text={fullText}
        onEnd={() => setVoiceFinished(true)}
      />

      <div className="bg-zinc-900 w-full max-w-xl rounded-3xl shadow-2xl p-10 border border-zinc-800">

        <h2 className="text-center text-2xl font-semibold mb-6">
          Speaking Tips
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          It is important to speak naturally during the test.
        </p><br></br>
        <p className="text-zinc-300 leading-relaxed">
          Here are some tips :
        </p>
        <p className="text-zinc-300 leading-relaxed">
          - Speak at a  <b>normal speed</b> like you would during a conversation
        </p><br></br>
        <p className="text-zinc-300 leading-relaxed">
          - Speak like you are <b>talking to another person</b> on the phone. 
          There is no need to speak too slowly or carefully.
        </p><br></br>
        <p className="text-zinc-300 leading-relaxed">
          - Speak at a <b>normal volume</b>, not too loud or too soft.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When you are ready, click 'Next'
        </p>

        <button
          disabled={!voiceFinished}
          onClick={() => navigate("/sample-test")}
          className={`w-full mt-8 py-4 rounded-full ${
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

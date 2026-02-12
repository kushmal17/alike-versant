import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    { id: "A:", title: "Give a short answer to the questions" },
    { id: "B:", title: "Repeat the sentence" },
    { id: "C:", title: "Answer a question about a conversation" },
    { id: "D:", title: "Answer questions about a passage" },
    { id: "E:", title: "Retell a passage" },
    { id: "F:", title: "Give your opinion" },
  ];

  return (
    <div className="w-full max-w-2xl">

      <div className="bg-zinc-900 text-white rounded-3xl shadow-2xl p-8 border border-zinc-800">

        <h2 className="text-center text-2xl font-semibold mb-4">
          Test Overview
        </h2>

        <p className="text-center text-zinc-400 mb-6 text-sm">
          AI English Speaking & Listening Assessment
        </p>

        <div className="space-y-3 mb-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-start gap-3 p-3 bg-white-800 rounded-xl border border-zinc-700"
            >
              <span className="text-blue-400 font-semibold">
                Part {section.id}
              </span>
              <span className="text-zinc-300 text-sm">
                {section.title}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center text-zinc-400 mb-5 text-sm">
          ⏱ The test has 6 Sections. It takes about 10 minutes.
        </div>

        <button
          onClick={() => navigate("/speaking-tips")}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full text-sm font-medium transition"
        >
          Start Test
        </button>

      </div>

    </div>
  );
};

export default Home;

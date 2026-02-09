import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    { id: "A", title: "Give a short answer to the question" },
    { id: "B", title: "Repeat the sentence" },
    { id: "C", title: "Answer a question about a conversation" },
    { id: "D", title: "Answer questions about a passage" },
    { id: "E", title: "Retell a passage" },
    { id: "F", title: "Give your opinion" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

      <div className="bg-zinc-900 text-white w-full max-w-xl rounded-3xl shadow-2xl p-10 border border-zinc-800">

        <h2 className="text-center text-3xl font-semibold mb-2">
          Test Overview
        </h2>

        <p className="text-center text-zinc-400 mb-8">
          AI English Speaking & Listening Test
        </p>

        <div className="space-y-4 mb-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-start gap-4 p-4 bg-zinc-800 rounded-xl border border-zinc-700"
            >
              <span className="text-blue-400 font-bold text-lg">
                Part {section.id}:
              </span>
              <span className="text-zinc-300">
                {section.title}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center text-zinc-400 mb-6">
          ⏱ The test has 6 sections. It takes about 10 minutes.
        </div>

        <button
          onClick={() => navigate("/speaking-tips")}

          className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-full text-lg font-medium transition shadow-lg"
        >
          ▶ Start Test
        </button>

      </div>

    </div>
  );
};

export default Home;

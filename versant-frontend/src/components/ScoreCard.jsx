const ScoreCard = ({ scores }) => {
  const { pronunciation, fluency, grammar, communication, total } = scores;

  const ScoreRow = ({ label, value }) => (
    <div className="flex justify-between py-2 border-b border-zinc-700">
      <span className="text-zinc-400">{label}</span>
      <span className="text-white font-semibold">{value}/20</span>
    </div>
  );

  return (
    <div className="bg-zinc-800 p-8 rounded-2xl shadow-xl max-w-md border border-zinc-700">
      <h2 className="text-white text-2xl mb-6 font-semibold text-center">
        Your Results
      </h2>

      <ScoreRow label="Pronunciation" value={pronunciation} />
      <ScoreRow label="Fluency" value={fluency} />
      <ScoreRow label="Grammar" value={grammar} />
      <ScoreRow label="Communication" value={communication} />

      <div className="flex justify-between mt-6 text-xl font-bold">
        <span className="text-blue-400">Total Score</span>
        <span className="text-white">{total}/100</span>
      </div>
    </div>
  );
};

export default ScoreCard;

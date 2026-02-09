const Result = () => {
  const finalScore = localStorage.getItem("finalScore");

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
      <div className="bg-zinc-900 p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl mb-6">Final Score</h2>
        <p className="text-5xl font-bold text-blue-500">{finalScore} / 120</p>
      </div>
    </div>
  );
};

export default Result;

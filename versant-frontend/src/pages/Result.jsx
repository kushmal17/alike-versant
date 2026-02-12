const Result = () => {
  const finalScore = localStorage.getItem("finalScore");

  return (
    <div className="flex justify-center items-center">

      <div className="bg-zinc-900 p-10 rounded-2xl text-center shadow-2xl border border-zinc-800">

        <h2 className="text-3xl font-semibold mb-6">
          Test Completed 🎉
        </h2>

        <p className="text-xl text-blue-400 font-bold">
          Your Final Score: {finalScore}%
        </p>

      </div>

    </div>
  );
};

export default Result;

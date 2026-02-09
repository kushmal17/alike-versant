const TestProgress = ({ currentIndex, total }) => {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl">
      <div className="flex justify-between text-sm text-zinc-400 mb-2">
        <span>Progress</span>
        <span>{currentIndex + 1} / {total}</span>
      </div>

      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-3 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default TestProgress;

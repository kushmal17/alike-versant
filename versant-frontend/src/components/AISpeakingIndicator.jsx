const AISpeakingIndicator = ({ isSpeaking }) => {
  if (!isSpeaking) return null;

  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="flex gap-1">
        <span className="w-2 h-6 bg-blue-500 animate-pulse rounded"></span>
        <span className="w-2 h-8 bg-blue-400 animate-pulse rounded delay-75"></span>
        <span className="w-2 h-6 bg-blue-500 animate-pulse rounded delay-150"></span>
      </div>
      <span className="text-blue-400 text-sm">AI Speaking...</span>
    </div>
  );
};

export default AISpeakingIndicator;

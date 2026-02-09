const QuestionCard = ({ question }) => {
  return (
    <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg max-w-2xl text-center border border-zinc-700">
      <h2 className="text-zinc-400 uppercase text-sm tracking-wider mb-3">
        Speaking Task
      </h2>
      <p className="text-2xl text-white font-medium leading-relaxed">
        {question}
      </p>
    </div>
  );
};

export default QuestionCard;

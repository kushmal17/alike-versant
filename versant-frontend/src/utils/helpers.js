export const calculateSectionScore = (blob, timeLimit) => {
  if (!blob) return 0;

  const randomFactor = Math.floor(Math.random() * 5); // simulate AI variance
  const baseScore = 15;

  return Math.min(20, baseScore + randomFactor);
};

export const calculateFinalScore = (recordings) => {
  let total = 0;

  recordings.forEach((rec) => {
    total += calculateSectionScore(rec);
  });

  return total;
};

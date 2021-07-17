const extractListScores = (data, currentRound) => {
  const scoringData = [...data];

  const getRoundScore = (waifuData, round) => {
    return [
      ...waifuData
        .map((item) => {
          return item.round >= round
            ? {
                ...item,
                score: (25 - (item.personalRank - 1)) * round,
              }
            : null;
        })
        .filter((item) => item),
    ];
  };

  let scoreArray = [];

  for (let round = 1; round <= currentRound; round++) {
    scoreArray = [...scoreArray, getRoundScore(scoringData, round)];
  }

  return scoreArray;
};

export default extractListScores;

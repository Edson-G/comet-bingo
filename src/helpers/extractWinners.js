const extractWinners = (data) => {
  return [].concat.apply(
    [],
    data.map((roundData) =>
      roundData.map((matchData) => {
        //Draw
        if (
          matchData.character1Votes === matchData.character2Votes &&
          matchData.character1Votes &&
          matchData.character2Votes
        )
          return parseInt(matchData.character1.seed) >=
            parseInt(matchData.character2.seed)
            ? [matchData.character1]
            : [matchData.character2];

        //Round didn't happen
        if (
          matchData.character1Votes === null &&
          matchData.character2Votes === null
        )
          return [matchData.character1, matchData.character2];

        //Regular round
        return parseInt(matchData.character1Votes) >=
          parseInt(matchData.character2Votes)
          ? [matchData.character1]
          : [matchData.character2];
      })
    )
  );
};

export default extractWinners;

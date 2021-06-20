const extractWinners = (data) => {
  return data.map((roundData) =>
    roundData.map((matchData) => {
      if (
        matchData.character1Votes === matchData.character2Votes &&
        matchData.character1Votes &&
        matchData.character2Votes
      )
        console.error(
          `A draw has happened on a match between ${matchData.character1.name} and ${matchData.character2.name}`
        );
      return parseInt(matchData.character1Votes) >
        parseInt(matchData.character2Votes) ||
        (matchData.character1Votes === null &&
          matchData.character2Votes === null)
        ? matchData.character1
        : matchData.character2;
    })
  );
};

export default extractWinners;

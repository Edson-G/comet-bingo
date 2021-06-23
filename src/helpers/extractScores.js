const extractScores = (data, currentRound) => {
  let scoringData = [...data];

  const getRow = (startIndex, endIndex, round, waifuTable) => {
    let acc = 5 * 2 ** (round - 1);
    for (let n = startIndex; n <= endIndex; n++) {
      if (waifuTable[n].round < round) {
        acc = 0;
        break;
      }
    }
    return acc;
  };

  const getColumn = (startIndex, endIndex, round, waifuTable) => {
    let acc = 5 * 2 ** (round - 1);
    for (let n = startIndex; n <= endIndex; n += 5) {
      if (waifuTable[n].round < round) {
        acc = 0;
        break;
      }
    }
    return acc;
  };

  const getDiagonals = (round, waifuTable) => {
    let accOne = 20 * 2 ** (round - 1);
    for (let k = 0; k <= 24; k += 6) {
      if (waifuTable[k].round < round) {
        accOne = 0;
        break;
      }
    }
    let accTwo = 20 * 2 ** (round - 1);
    for (let k = 4; k <= 20; k += 4) {
      if (waifuTable[k].round < round) {
        accTwo = 0;
        break;
      }
    }
    return accOne + accTwo;
  };
  const getIndividuals = (round, waifuData) => {
    const onePoint = [0, 4, 20, 24];
    const twoPoint = [1, 3, 5, 9, 15, 19, 21, 23];
    const threePoint = [2, 6, 8, 10, 14, 16, 18, 22];
    const fourPoint = [7, 11, 13, 17];
    const fivePoint = [12];

    const onePointScores = onePoint
      .map((item) => (waifuData[item].round >= round ? round : 0))
      .reduce((prev, next) => (prev += next));
    const twoPointScores = twoPoint
      .map((item) => (waifuData[item].round >= round ? 2 * round : 0))
      .reduce((prev, next) => (prev += next));
    const threePointScores = threePoint
      .map((item) => (waifuData[item].round >= round ? 3 * round : 0))
      .reduce((prev, next) => (prev += next));
    const fourPointScores = fourPoint
      .map((item) => (waifuData[item].round >= round ? 4 * round : 0))
      .reduce((prev, next) => (prev += next));
    const fivePointScores = fivePoint
      .map((item) => (waifuData[item].round >= round ? 5 * round : 0))
      .reduce((prev, next) => (prev += next));
    return (
      onePointScores +
      twoPointScores +
      threePointScores +
      fourPointScores +
      fivePointScores
    );
  };
  const getRoundScore = (waifuData, round) => {
    const indiv = getIndividuals(round, waifuData);
    let rowAcc = 0;
    let colAcc = 0;
    for (let j = 0; j < 5; j++) {
      rowAcc += getRow(5 * j, 5 * j + 4, round, waifuData);
      colAcc += getColumn(j, j + 20, round, waifuData);
    }
    const diag = getDiagonals(round, waifuData);

    return {
      individual: indiv,
      row: rowAcc,
      col: colAcc,
      diagonal: diag,
      total: rowAcc + colAcc + diag,
    };
  };

  let scoreArray = [];
  for (let round = 1; round <= currentRound; round++) {
    scoreArray = [...scoreArray, getRoundScore(scoringData, round)];
  }
  return scoreArray;
};

export default extractScores;

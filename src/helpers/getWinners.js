const getWinners = (data, currentRound) => {
  const getPosition = (itemIndex) => {
    const onePoint = [0, 4, 20, 24];
    const twoPoint = [1, 3, 5, 9, 15, 19, 21, 23];
    const threePoint = [2, 6, 8, 10, 14, 16, 18, 22];
    const fourPoint = [7, 11, 13, 17];
    const fivePoint = [12];
    let position = 0;
    if (onePoint.includes(itemIndex)) {
      position = 1;
    }
    if (twoPoint.includes(itemIndex)) {
      position = 2;
    }
    if (threePoint.includes(itemIndex)) {
      position = 3;
    }
    if (fourPoint.includes(itemIndex)) {
      position = 4;
    }
    if (fivePoint.includes(itemIndex)) {
      position = 5;
    }
    return position;
  };

  return [
    ...data
      .map((item, index) => {
        return {
          ...item,
          positionMultiplier: getPosition(index),
        };
      })
      .filter((item) => item.round === 9),
    ...data
      .map((item, index) => {
        return {
          ...item,
          positionMultiplier: getPosition(index),
        };
      })
      .filter((item) => item.round === 9 - 1),
  ];
};

export default getWinners;

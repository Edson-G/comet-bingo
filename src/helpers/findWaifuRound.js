const findWaifuRound = (id, winnersData) => {
  return winnersData
    .map((round) =>
      round.find((waifu) => waifu !== undefined && waifu.id === id)
    )
    .filter((item) => item !== undefined).length;
};

export default findWaifuRound;

const rate = (level, tax) => ({ level, tax });
const brackets = {
  firstTime: [
    rate(300000, 0),
    rate(925000, 0.05),
    rate(1500000, 0.1),
    rate(Infinity, 0.12),
  ],
};
const calculate = (level, tax) => {
  const firstTime = calculateDuty(level, brackets.firstTime);
  return firstTime;
}



module.exports = { rate };


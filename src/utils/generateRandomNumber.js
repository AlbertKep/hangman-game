export const generateRandomNumber = (range) => {
  const min = Math.ceil(1);
  const max = Math.floor(range);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

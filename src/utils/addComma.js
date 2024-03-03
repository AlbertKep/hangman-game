export const addComma = (wordsList) => {
  const newList = wordsList.map((word, index) => {
    if (wordsList.length - 1 === index) {
      return { ...word, name: word.name };
    } else {
      return { ...word, name: word.name + ", " };
    }
  });
  return newList;
};

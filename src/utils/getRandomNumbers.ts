const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomNumbers = (length: number) => {
  return Array.from({ length }).map(() => randomInt(1, length));
};

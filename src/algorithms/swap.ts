export const swap = (array: number[], x: number, y: number) => {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

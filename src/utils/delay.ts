export const delay = <T>(
  fn: (item: T, index: number) => void,
  delay: number
) => {
  return (x: T, i: number) => {
    setTimeout(() => {
      fn(x, i);
    }, i * delay);
  };
};

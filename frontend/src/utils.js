export const sortByYear = (a, b) => {
  if (a.year > b.year) {
    return -1;
  }
  if (a.year < b.year) {
    return 1;
  }
  return 0;
};

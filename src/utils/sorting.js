export const sortTours = (tours, sortBy) => {
  switch (sortBy) {
    case "recomended":
      return [...tours].sort((a, b) => b.rating - a.rating);
    case "htl":
      return [...tours].sort((a, b) => b.priceFrom - a.priceFrom);
    case "lth":
      return [...tours].sort((a, b) => a.priceFrom - b.priceFrom);
    default:
      return tours;
  }
};

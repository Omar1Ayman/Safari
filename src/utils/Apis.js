import { toursList } from "../data";
export const getTourByd = (id) => {
  const tour = toursList.find((t) => t.id === id);
  return tour;
};

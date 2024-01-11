export function pagination(length, currentPage) {
  const TOUR_PER_PAGE = 6;
  const pages = Math.ceil(length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const endIndex = currentPage * TOUR_PER_PAGE;

  return {
    pages,
    startIndex,
    endIndex,
  };
}

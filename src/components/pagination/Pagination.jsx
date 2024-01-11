import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  console.log(pages);
  const generatePages = [];
  for (let index = 1; index <= pages; index++) {
    generatePages.push(index);
  }
  console.log(generatePages);

  const prev = () => {
    if (currentPage > 1 && currentPage <= pages) {
      console.log("prev");
      setCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    if (currentPage < pages) {
      console.log("next");
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="pagination">
      <div className="container">
        <ul className="items">
          <button
            disabled={currentPage === 1 && true}
            className={`  prev`}
            onClick={prev}
          >
            Previous
          </button>
          {generatePages.map((p) => {
            return (
              <li
                key={p}
                onClick={() => setCurrentPage(p)}
                className={` item ${currentPage === p ? "active" : ""}`}
              >
                {p}
              </li>
            );
          })}
          <button
            disabled={currentPage === pages && true}
            className={`  next`}
            onClick={next}
          >
            Next
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;

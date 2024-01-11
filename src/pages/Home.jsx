import React, { useState } from "react";
import HeroHeader from "../components/hero-header/HeroHeader";
import Services from "../components/servicess/Services";
import Tours from "../components/tours/Tours";
import Pagination from "../components/pagination/Pagination";
import { toursList } from "../data";
import { pagination } from "../utils/pagination";
import Banner from "../components/banner/Banner";
import NewsLetter from "../components/news-letter/NewsLetter";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  //Pagnation
  const { pages, startIndex, endIndex } = pagination(
    toursList.length,
    currentPage
  );
  const tours = toursList.slice(startIndex, endIndex);

  return (
    <>
      <HeroHeader />
      <Services />
      <Tours tours={tours} lengthOfTours={toursList.length} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
      <div className=""></div>
    </>
  );
};

export default Home;

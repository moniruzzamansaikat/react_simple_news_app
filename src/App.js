import "./App.css";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import { getTopHeadLines } from "./adapter/news";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCardItem from "./components/NewsCardItem";
import NavigationBar from "./components/Navbar";
import MainLoader from "./components/MainLoader";
import Footer from "./components/Footer";
import Meta from "./components/Meta";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function App() {
  const [topHeadLines, setTopHeadlines] = useState([]);
  const [category, setCategory] = useState("technology");

  useEffect(() => {
    getTopHeadLines(category).then((news) => setTopHeadlines(news));
  }, [category]);

  return (
    <>
      <NavigationBar setCategory={setCategory} />
      <Meta title={category} />
      <div className="my-4 py-4"></div>
      <div className="my-4"></div>

      {/* show category */}

      <div className="custom_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Category</li>
            <li class="breadcrumb-item active" aria-current="page">
              {category}
            </li>
          </ol>
        </nav>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {topHeadLines?.length ? (
            topHeadLines.map((article, idx) => <NewsCardItem article={article} key={idx} />)
          ) : (
            <MainLoader />
          )}
        </Masonry>
      </div>

      <Footer />
    </>
  );
}

export default App;

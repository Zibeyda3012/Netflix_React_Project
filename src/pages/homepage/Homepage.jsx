import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState({
    title: t("home"),
    value: "home",
  });

  const [trendingMovies, setTrendingMovies] = useState([]);
  const[trendingShows,setTrendingShows]=useState([]);

  const tabltems = [
    { title: t("Home"), value: " home" },
    { title: t("Tv Shows"), value: "tv" },
    { title: t("Movies"), value: "movie" },
  ];

  const getMovies = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/movie/trending"
      );
      const data = await response.json();

      if (response.ok) {
        setTrendingMovies(data.content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //muellim deyesen api-da problem var shows fetch elemir
  const getShows = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/tv/trending"
      );
      const data = await response.json();

      if (response.ok) {
        setTrendingShows(data.content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getShows();
  }, []);


  const visibleTab = () => {
    switch (selectedTab.value) {
      case "movie":
        return <Movies trendingMovies={trendingMovies} />;
      case "tv":
        return <Shows trendingShows={trendingShows}/>;
      default:
        return <Home visibleMovie={trendingMovies[0]} />;
    }
  };


  return (
    <div className=" w-full h-screen relative flex flex-col bg-[#000000] ">
      <Navbar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabItems={tabltems}
      />
      {visibleTab()}{" "}
    </div>
  );
};

export default Homepage;

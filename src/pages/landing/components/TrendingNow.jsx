import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FilmCard from "./FilmCard";
import CustomSelect from "./CustomSelect";
import ScrollBtn from "../../../common/ScrollBtn";
import Modal from "./Modal"

const TrendingNow = ({ scrollY }) => {
  const { t } = useTranslation();
  // const [modalOpen, setModalOpen] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [selectedOption, setSelectedOption] = useState({
  //   title: "Movies",
  //   value: "movie",
  // });
  // const [selectedShow, setSelectedShow] = useState(null);
  // const options = [{ title: "Movies", value: "movie" }, { title: "TV Shows", value: "tv" }]

  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5001/api/v1/${selectedOption.value}/trending`
  //     );
  //     if (!response.ok) throw new Error("Fetch failed");
  //     const data = await response.json();
  //     setMovies(data.content);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  //   setSelectedShow(null);
  // };

  // useEffect(() => {
  //   getData();
  // }, selectedOption);

  // useEffect(() => {
  //   if (selectedShow) {
  //     setModalOpen(true);
  //   }
  // }, [selectedShow]);

  // useEffect(() => {
  //   document.body.style.overflow = modalOpen ? "hidden" : "scroll";
  // }, [modalOpen]);

  // return (
  //   <div className="w-full py-20 relative">
  //     <h3 className="text-white text-2xl font-semibold mb-4">{t("trendingNow")}</h3>
  //     <CustomSelect
  //       selectedOption={selectedOption}
  //       setSelectedOption={setSelectedOption}
  //       options={options}
  //     />

  //     <div className="relative">
  //       <ScrollBtn direction="left" />

  //       <div
  //         id="movie-card-container"
  //         className="w-full flex gap-12 overflow-scroll py-5 pl-7"
  //       >
  //         {movies.map((item, index) => (
  //           <FilmCard
  //             setSelectedItem={setSelectedShow}
  //             index={index}
  //             item={item}
  //           />
  //         ))}
  //       </div>

  //       <ScrollBtn direction="right" />
  //     </div>

  //     {modalOpen && (
  //       <Modal
  //         scrollY={scrollY}
  //         data={selectedShow}
  //         handleModalClose={handleModalClose}
  //       />
  //     )}
  //   </div>
  // );

  const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState({ title: "Movies", value: "movie" })
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const options = [{ title: "Movies", value: "movie" }, { title: "TV Shows", value: "tv" }]

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedOption.value}/trending`
      );
      if (!response.ok) throw new Error("Fetch failed");
      const data = await response.json();
      setData(data.content);
    } catch (error) {
      console.error(error.message);
    }
  };

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedItem(null)
    }

    useEffect(() => {
        getData()
    }, [selectedOption])

    useEffect(() => {
        if (selectedItem) {
            setModalOpen(true)
        }
    }, [selectedItem])

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : 'scroll'
    }, [modalOpen])


    return (
        <div className='w-full py-20 relative'>
            <h3 className='text-white text-2xl font-semibold mb-4'>{t("trendingNow")}</h3>
            <CustomSelect selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                options={options} />
                
            <div className='relative'>
                <ScrollBtn direction="left" />

                <div id='movie-card-container' className='w-full flex gap-12 overflow-scroll py-5 pl-7'>
                    {data.map((item, index) => <FilmCard setSelectedItem={setSelectedItem} item={item} index={index} />)}
                </div>

                <ScrollBtn direction="right" />
            </div>

            {
                modalOpen &&
                <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose} />
            }

        </div>
    )
};

export default TrendingNow;

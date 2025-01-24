import top10 from "../../../assets/icons/top10.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Similar from "../../details/components/Similar";

const Home = ({ visibleMovie }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    visibleMovie && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleMovie.backdrop_path})`,
          }}
          className="h-screen w-full flex items-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay mt-10"
        >
          <div className="max-w-[400px] ml-[90px]">
            <h2 className="text-7xl text-white font-bold">
              {visibleMovie.title}
            </h2>
            <div className="flex items-center gap-2 my-5">
              <img src={top10} alt="" />
              <h3 className="text-white text-2xl font-bold">
                {t("#1_in_tv_shows_today")}
              </h3>
            </div>
            <p className="text-white">
              {visibleMovie.overview.slice(0, 150)}...
            </p>
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => {
                  navigate("/details", {
                    state: {
                      id: visibleMovie.id,
                      type: visibleMovie.media_type,
                    },
                  });
                }}
                className="bg-[#D40000] text-black font-bold px-6 py-3 rounded-[4px] hover:bg-zinc-300 transition duration-200 ease-in"
              >
                {t("play")}
              </button>
              <button
                onClick={() => {
                  navigate("/details", {
                    state: {
                      id: visibleMovie.id,
                      type: visibleMovie.media_type,
                    },
                  });
                }}
                className="bg-[#515451] text-white font-bold px-6 py-3 rounded-[4px]  hover:bg-zinc-500 transition duration-200 ease-in"
              >
                {t("moreInfo")}
              </button>
            </div>

            <div className="sm:px-[90px]">
              <Similar type={visibleMovie.media_type} id={visibleMovie.id} />
            </div>

          </div>
        </div>
      </motion.div>
    )
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import GenreItems from "./GenreItems";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Modal = ({ data, handleModalClose, scrollY }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return createPortal(
    <div
      style={{ top: scrollY }}
      onClick={handleModalClose}
      className=" w-full h-screen absolute left-0 bg-black/50 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div className="size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-y-scroll relative">
          <button
            onClick={handleModalClose}
            className="z-10 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25 hover:cursor-pointer rounded-full p-2 flex items-center justify-center"
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>
          </button>

          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end">
              <h3 className="text-white text-5xl font-bold ml-8 mb-6">
                {data.media_type === "movie" ? data.title : data.name}
              </h3>
            </div>
            <img
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt=""
            />
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="px-8 pb-5"
          >
            <GenreItems item={data} />

            <p className="text-white">{data.overview}</p>

            <button
              onClick={() => {
                handleModalClose();
                navigate("/signup");
              }}
              className="flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white h-full px-4 py-3 pr-6 gap-4 rounded-[4px] mt-5"
            >
              {t("entryCTA")}
              <svg
                className="w-[12px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#ffffff"
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("landing")
  );
};

export default Modal;

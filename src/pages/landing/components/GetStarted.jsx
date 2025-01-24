import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1 justify-center items-center mt-[60px] mb-[35px]">
     <p className="text-white text-[16px] mt-[15px]">{t('entryReadyToWatch')}</p>
      <div className="flex items-center mx-auto w-[783px] h-[56px] gap-[8px] mt-[20px]">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={t("emailAddress")}
          className="p-[16px] w-[568px] border-[1px] border-[#cccdcf] rounded-[4px] bg-transparent min-w-[374px]"
        ></input>
        <button
          className="flex flex-shrink-0 items-center text-white text-[24px] font-bold bg-[#E50914] min-w-[210px] pt-[14px] pb-[14px] pl-[24px] pr-[24px] gap-[15px] rounded-[4px] h-full hover:bg-[#c71508] transition duration-100 ease-in"
          onClick={() => {
            navigate("/signup", { state: { email: email } });
          }}
        >
          {t("entryCTA")}{" "}
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
  );
};

export default GetStarted;

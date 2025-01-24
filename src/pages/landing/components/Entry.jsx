import React from "react";
import { useTranslation } from "react-i18next";
import InputUserEmail from "./InputUserEmail";
import Navbar from "./Navbar";


const Entry = () => {
  const {t} = useTranslation();

  return(
    <div className="h-screen w-full bg-no-repeat bg-cover lg:h-[760px] px-[9rem] bg-blend-overlay bg-black/70 bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')" }}>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-fit gap-[10px] ">
        <h1 className="text-white font-black text-[32px] tracking-tight lg:text-[56px] lg:leading-[70px] lg:w-[668px]  w-[323px] text-center leading-[40px">{t('entryTitle')}</h1>
        <p className="text-white text-[20px]">{t('entrySubtitle')}</p>
        <p className="text-white text-[16px] mt-[15px]">{t('entryReadyToWatch')}</p>
      </div>
      <InputUserEmail></InputUserEmail>
    </div>
  )
};

export default Entry;

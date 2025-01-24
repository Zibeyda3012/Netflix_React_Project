import React from "react";
import { useTranslation } from "react-i18next";
import ReasonCard from "./ReasonCard";
import download from "../../../assets/images/download.svg";
import profiles from "../../../assets/images/profiles.svg";
import television from "../../../assets/images/television.svg";
import watch from "../../../assets/images/watch.svg";

const ReasonsToJoin = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("enjoyOnYourTV"),
      desc: t("enjoyOnYourTVDescription"),
      img: television,
    },
    {
      title: t("downloadYourShowsToWatchOffline"),
      desc: t("downloadYourShowsToWatchOfflineDescription"),
      img: download,
    },
    {
      title: t("watchEverywhere"),
      desc: t("watchEverywhereDescription"),
      img: watch,
    },
    {
      title: t("createProfilesForKids"),
      desc: t("createProfilesForKidsDescription"),
      img: profiles,
    },
  ];

  return (
    <div>
      <h2 className="text-white font-medium text-[24px] mb-4">
        More Reasons to Join
      </h2>
      <div className="flex gap-4">
        {items.map((item) => (
          <ReasonCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;

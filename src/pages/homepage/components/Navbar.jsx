import netflix from "../../../assets/images/NetflixLogo.svg";

const Navbar = ({ selectedTab, setSelectedTab, tabItems }) => {
  return (
    <div className="absolute w-screen left-0 top-0 flex items-center gap-[67px] px-[90px] py-[30px]">
      <img src={netflix} alt="" />
      <div className="flex items-center gap-[28px]">
        {tabItems.map((item) => (
          <button
            className={`${
              selectedTab.value === item.value
                ? "font-bold text-white"
                : "text-zinc-300"
            } text-[22px]`}
            onClick={() => {
              setSelectedTab(item);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

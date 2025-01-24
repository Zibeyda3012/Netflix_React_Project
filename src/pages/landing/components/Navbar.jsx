import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import CustomSelect from "./CustomSelect"
import { useTranslation } from "react-i18next"

const Navbar = () => {   
 
    const[selectedLanguage, setSelectedLanguage] = useState({title:"English",value:"en"});
    const navigate = useNavigate();
    const{i18n} = useTranslation();
    const {t} = useTranslation();

    const languageList = [{title:"English",value:"en"},{title:"Russian",value:"ru"}];

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage.value)
    },[selectedLanguage]);

  return (
    <div className="flex justify-between items-center pt-[28px] pb-[180px]">
        <img className='w-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <div className="h-[38px] flex justify-between items-center gap-[12px]">
            <CustomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={languageList} logo={<svg xmlns="http://www.w3.org/2000/svg" className='text-white absolute top-2 left-3' fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>}></CustomSelect>
            <button className="bg-[#E50914] rounded-[4px] text-white font-semibold h-full px-4 hover:bg-[#c71508] transition duration-100 ease-in" onClick={() => {
              navigate("/login");
            }}>{t('signInBtn')}</button>
        </div>
    </div>
  )
}

export default Navbar
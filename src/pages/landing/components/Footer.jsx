import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomSelect from "./CustomSelect"
import{useState,useEffect} from "react"

const Footer = () => {
const{t} = useTranslation()
const[selectedLanguage, setSelectedLanguage] = useState({title:"English",value:"en"});
const languageList = [{title:"English",value:"en"},{title:"Russian",value:"ru"}];
const{i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage.value)
    },[selectedLanguage]);

  return (
        <footer className="bg-black text-white/70 py-10 min-h-[450px] flex flex-col">
          <div className="w-full mx-auto px-4">
            <p className="mb-10">
              <a href="https://help.netflix.com/en/contactus" className="underline">{t("questionsCall")}</a>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <ul>
                <li className="mb-2"><a href="https://help.netflix.com/support/412" className="underline">{t("faq")}</a></li>
                <li className="mb-2"><a href="http://ir.netflix.com/" className="underline">{t("investorRelations")}</a></li>
                <li className="mb-2"><a href="https://help.netflix.com/legal/privacy" className="underline">{t("privacy")}</a></li>
                <li className="mb-2"><a href="https://fast.com/" className="underline">{t("speedTest")}</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="https://help.netflix.com/" className="underline">{t("helpCenter")}</a></li>
                <li className="mb-2"><a href="https://jobs.netflix.com/jobs" className="underline">{t("jobs")}</a></li>
                <li className="mb-2"><a href="https://www.netflix.com/az/#" className="underline">{t( "cookiePrefernces")}</a></li>
                <li className="mb-2"><a href="https://help.netflix.com/legal/notices" className="underline">{t("legalNotices")}</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="https://www.netflix.com/youraccount" className="underline">{t("account")}</a></li>
                <li className="mb-2"><a href="https://www.netflix.com/watch" className="underline">{t("waysToWatch")}</a></li>
                <li className="mb-2"><a href="https://help.netflix.com/legal/corpinfo" className="underline">{t("corporateInformation")}</a></li>
                <li className="mb-2"><a href="https://www.netflix.com/az/browse/genre/839338" className="underline">{t("onlyOnNetflix")}</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="https://media.netflix.com/" className="underline">{t("mediaCenter")}</a></li>
                <li className="mb-2"><a href="https://help.netflix.com/legal/termsofuse" className="underline">{t("termsOfUse")}</a></li>
                <li className="mb-2"><a href="https://help.netflix.com/contactus" className="underline">{t("contactUs")}</a></li>
              </ul>
            </div>
            </div>
            <div className='h-[38px] text-gray-900 mt-10'>
            <CustomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={languageList} logo={<svg xmlns="http://www.w3.org/2000/svg" className='text-white absolute top-2 left-3' fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>}></CustomSelect>

            </div>
            <p className="text-sm text-white/70 mt-10">Netflix Azerbaijan</p>
            </footer>
  )
}

export default Footer
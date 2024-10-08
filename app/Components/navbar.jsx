"use client";

import Link from "next/link";
import Switchtheme from "./switchtheme";
import { MenuIcons } from "./icons";
import { IconButton } from "./button";

// custom hook
import { useNavtoggle } from "../hook/useNavtoggle";

export default function Navbar() {

  // use Navtoggle hook
  const [handleToggle , isLoading , isOpen] = useNavtoggle()

  const navLink = ["Home", "About", "Skills", "Portfolio", "Contack"];

  return (
    <nav className="px-5 md:px-[50px] xl:px-20 py-[10px] md:py-[22px] fixed w-full z-50 bg-surface-container_default dark:bg-surface-inverse_container_highest">
      <div className={``}>
        <div className="flex justify-between items-center h-9 md:h-12">
          <h5 className="text-h5 md:text-title lg:text-h3 xl:text-h2 text-surface-text_high dark:text-surface-inverse_text_high">
            <Link className="ease-linear delay-300 hover:text-primary-text_default dark:hover:text-primary-text_low" href='#Home'>
                Milkyway Design
            </Link>
          </h5>
          <div className="flex items-center gap-[19px] md:gap-[30px]">
            <div className="hidden md:hidden lg:flex lg:gap-[30px]">
              {navLink.map((value, key) => {
                return (
                  <Link 
                    key={key} 
                    href={`#${value}`} 
                    className={`ease-linear delay-300 xl:text-h5 text-surface-text_default hover:font-bold dark:text-surface-inverse_text_default`}>
                      {value}
                  </Link>
                );
              })}
            </div>
            <Switchtheme />
            <IconButton onClick={handleToggle} disabled={isLoading} pill={true} cssStyle="lg:hidden xl:hidden">
              <MenuIcons/>
            </IconButton>

          </div>
        </div>
        <div
          className={
            isOpen
              ? `mt-3 py-[14px] md:py-8 flex flex-col items-center justify-center h-[193px] md:h-[299px] gap-5 md:gap-[30px] ease-in duration-700 lg:hidden`
              : `py-0 md:py-0 flex flex-col items-center justify-center h-0 md:h-0 gap-0 md:gap-0 ease-in duration-700 delay-500 lg:hidden`
          }
        >
          {navLink.map((value, key) => {
            return (
              <Link key={key} href={`#${value}`} 
                className={
                  `hover:font-bold
                  ${isOpen
                    ? `scale-100 xl:text-h5 text-surface-text_default dark:text-surface-inverse_text_default ease-linear duration-700 delay-500`
                    : `scale-0 text-body_small md:text-body_large xl:text-h5 text-surface-text_default dark:text-surface-inverse_text_default ease-linear duration-700 `}`
                }>
                  
                
                  {value}
                
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

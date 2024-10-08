"use client";
// Icons component
import { LightIcons , NightIcons } from "./icons";

// custom hook
import { useSwitchtheme } from "../hook/useSwitchtheme";

export default function Switchtheme() {

// use Switchtheme hook
  const [handleSwitchTheme , mounted , resolvedTheme] = useSwitchtheme()

  if (!mounted) {
    return (
      <button
        type="button"
        onClick={handleSwitchTheme}
        aria-label="icon button"
        className={`w-[54px] md:w-[72px] xl:w-[90px] h-6 md:h-8 xl:h-10 border border-surface-border_high dark:border-surface-border_low rounded-full px-[2px] flex items-center dark:justify-end`}
      >
        <div className="w-5 md:w-7 xl:w-9 h-5 md:h-7 xl:h-9 bg-surface-inverse_container_high dark:bg-surface-container_high rounded-full flex items-center justify-center">
          <LightIcons/>
          <NightIcons/>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSwitchTheme}
      aria-label="icon button"
      className={`w-[54px] md:w-[72px] xl:w-[90px] h-6 md:h-8 xl:h-10 border border-surface-border_high dark:border-surface-border_low rounded-full px-[2px] flex items-center dark:justify-end`}
    >
      <div className="w-5 md:w-7 xl:w-9 h-5 md:h-7 xl:h-9 bg-surface-inverse_container_high dark:bg-surface-container_high rounded-full flex items-center justify-center">
        {resolvedTheme === "light" ? (
          <LightIcons/>
        ) : (
          <NightIcons/>
        )}
      </div>
    </button>
  );
}

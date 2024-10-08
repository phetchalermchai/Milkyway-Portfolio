import { Cat } from "./svg";

export default function Footer() {
  return (
    <div className="p-5 md:px-[50px] md:py-[30px] bg-surface-container_high dark:bg-surface-inverse_container_default flex justify-center items-center md:gap-[10px]">
      <p className="text-caption md:text-body_small lg:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">
        © 2024 Milkyway Design by Chalermchai Wauwai
      </p>
      <Cat/>
    </div>
  );
}

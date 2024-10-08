"use client";
import { ButtonSmall, ButtonMedium } from "./button";
import Image from "next/image";
import Link from "next/link";

export default function Card({ src, title, text, footer ,demo ,github}) {
  return (
    <div className="flex flex-col  w-[250px] md:w-[300px] xl:w-[400px] bg-surface-container_low dark:bg-surface-inverse_container_default  rounded-m shadow-low">

        {/* card content */}
      <div className="object-contain h-full flex flex-col pb-4 ">

        {/* card image */}
        <Image
          className="rounded-t-m object-cover"
          src={src}
          width={400}
          height={331}
          alt="cat"
        />

        {/* card title & card text */}
        <div className="px-4 xl:px-5 py-2 xl:py-4 flex flex-col gap-2 xl:gap-3">
          <div className="flex flex-col gap-3 xl:gap-[6px]">
            <h5 className="break-words text-body_regular xl:text-body_large font-bold xl:font-bold text-surface-text_high dark:text-surface-inverse_text_high">
              {title}
            </h5>
            <p className="break-words text-body_small xl:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">
              {text}
            </p>
          </div>   
        </div>

        {/* card action button */}
        <div className="mt-auto flex items-center justify-center gap-3 md:gap-4 xl:gap-5">
            <Link href={demo} target="_blank">
                <ButtonSmall cssStyle={`xl:hidden`} disabled={demo === "" ? true : false} pill={true}>
                    demo
                </ButtonSmall>
            </Link>
            <Link href={github} target="_blank">
                <ButtonSmall cssStyle={`xl:hidden`} disabled={github === "" ? true : false} pill={true}>
                    github
                </ButtonSmall>
            </Link>
            <Link href={demo} target="_blank">
                <ButtonMedium cssStyle={`hidden xl:block`} disabled={demo === "" ? true : false} pill={true}>
                    demo
                </ButtonMedium>
            </Link>
            <Link href={github} target="_blank">
                <ButtonMedium cssStyle={`hidden xl:block`} disabled={github === "" ? true : false} pill={true}>
                    github
                </ButtonMedium>
            </Link>
        </div>

      </div>

        {/* card footer */}
      <div className="px-[10px] md:px-4 xl:px-5 py-1 md:py-2 xl:py-3  rounded-b-m bg-surface-container_default dark:bg-surface-inverse_container_low border-t border-surface-border_default dark:border-surface-border_highest">
        <p className="break-words text-footnote md:text-small_text text-surface-text_high dark:text-surface-inverse_text_high">
          {footer}
        </p>
      </div>
    </div>
  );
}

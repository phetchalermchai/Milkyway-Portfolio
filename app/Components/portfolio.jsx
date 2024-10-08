"use client";

import { Button } from "./button";
import Card from "./card";
import { useCard } from "../hook/useCard";

export default function Portfolio() {

  // useCard Hook
  const { filterCards, filteredCards , activeFilter} = useCard();

  return (
    <section id="Portfolio" className="bg-surface-container_low dark:bg-surface-inverse_container_high">
      <div className="mx-5 md:mx-[50px] xl:mx-20 py-10 md:py-[70px] xl:py-20 flex flex-col gap-[10px]">

        {/* title */}
        <div className="py-5 md:py-[30px] text-center">
          <h3 className="text-title xl:text-h3 text-surface-text_high dark:text-surface-inverse_text_high">
            Portfolio
          </h3>
        </div>

        {/* content */}
        <div className="md:py-5 flex flex-col items-center gap-5 md:gap-[30px] xl:gap-10">

          {/* filter cards button */}
          <div className="flex gap-[10px] md:gap-4 xl:gap-5">
            <Button pill={true} variant={`${activeFilter === "All" ? "primary":"neutral"}`} onClick={() => filterCards("All")}>
              All
            </Button>
            <Button
              pill={true}
              variant={`${activeFilter === "Website" ? "primary":"neutral"}`}
              onClick={() => filterCards("Website")}
            >
              website
            </Button>
            <Button
              pill={true}
              variant={`${activeFilter === "UX/UI" ? "primary":"neutral"}`}
              onClick={() => filterCards("UX/UI")}
            >
              ux/ui
            </Button>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {filteredCards.map((card) => {
              return (
                <Card
                  key={card.id}
                  src={card.image}
                  title={card.title}
                  text={card.text}
                  footer={card.footer}
                  demo={card.demo}
                  github={card.github}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

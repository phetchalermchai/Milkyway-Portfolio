import { useState } from "react";
import cardData from "../data/card"

export function useCard() {

  const [filteredCards, setFilteredCards] = useState(cardData)
  const [activeFilter, setActiveFilter] = useState('All');


  const filterCards = (catagory) => {
    if (catagory === "All") {
      setFilteredCards(cardData)

    } else {
      setFilteredCards(cardData.filter((card) => card.category === catagory))
    }
    setActiveFilter(catagory);
  }

  return {
    filterCards,
    filteredCards,
    activeFilter
  }
}

import { useState, useEffect } from "react";

export function useNavtoggle() {

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    setIsLoading(true);
    setIsClicked(true);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      const newWidth = window.innerWidth;

      setWindowWidth(newWidth);

      if (newWidth > 1023) {
        setIsOpen(false);
      }
    };

    if (isClicked) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsClicked(false);
      }, 1500);

      return () => clearTimeout(timer);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isClicked]);

  return [handleToggle , isLoading , isOpen]
}

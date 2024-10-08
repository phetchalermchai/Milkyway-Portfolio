import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function useSwitchtheme() {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
  }, []);

  const handleSwitchTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return [handleSwitchTheme , mounted , resolvedTheme]
}

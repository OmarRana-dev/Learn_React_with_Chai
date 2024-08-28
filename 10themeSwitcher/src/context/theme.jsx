import { createContext, useState, useEffect } from "react";

// Create the ThemeContext with initial values
export const ThemeContext = createContext({
  themeMode: "light",
  changeTheme: () => {},
});

// Create a ThemeProvider component to provide theme context to the app
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  // Function to toggle the theme
  const changeTheme = () => {
    setThemeMode((prevMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  };

  // Apply the current theme to the HTML element
  useEffect(() => {
    const UItag = document.querySelector("html");
    UItag.classList.remove("dark", "light");
    UItag.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { useContext } from "react";
import { ThemeContext } from "../context/theme"; // Assuming your ThemeContext is in theme.js

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;

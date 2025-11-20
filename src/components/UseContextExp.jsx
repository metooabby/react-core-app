import { useState, createContext, useContext } from "react";
const ThemeContext = createContext;

function useContextExp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.provider value={{ theme, setTheme }}>
      <child></child>
    </ThemeContext.provider>
  );
}

function child() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </>
  );
}

export default useContextExp;

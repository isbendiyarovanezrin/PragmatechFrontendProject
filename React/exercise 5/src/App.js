import React, { useState, useEffect } from "react";
import Home from "./components/Home";

const themes = {
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },

  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

const ThemeContext = React.createContext(themes.light);

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tickTock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tickTock);
  });

  const changeTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
      // localStorage.setItem("light-theme", JSON.stringify(theme));
    } else {
      setTheme(themes.light);
      // localStorage.setItem("dark-theme", JSON.stringify(theme));
    }
  };

  // const dark = localStorage.getItem("dark-theme");
  // const light = localStorage.getItem("light-theme");
  // console.log(dark, light);

  return (
    <div className="container">
      <div className="title d-flex justify-content-between ">
        <button
          className="btn btn-dark mb-3 ms-4"
          onClick={changeTheme}
          style={{
            backgroundColor: theme === themes.dark ? "black" : "white",
            color: theme === themes.dark ? "white" : "black",
          }}
        >
          {theme === themes.dark ? "Light Theme" : "Dark Theme"}
        </button>
        <p className="me-4">{time.toLocaleTimeString()}</p>
      </div>

      <ThemeContext.Provider value={theme}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext };
export default App;

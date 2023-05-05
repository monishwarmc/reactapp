import { createContext, useContext, useState } from "react";


const ThemeC = createContext(undefined);

export const Provider  = ({children}) => {
    const [theme, setTheme] = useState("light");
    return(
        <ThemeC.Provider value={{theme, toggleTheme : () => setTheme(theme === "light" ? "dark" : "light")}}>
            {children}
        </ThemeC.Provider>
    );
}

export const useTheme = () => useContext(ThemeC);
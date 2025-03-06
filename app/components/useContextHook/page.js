"use client"
import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext("light");

const ThemeToggler = ()=>{
    const theme = useContext(ThemeContext);
    return<h1>Current theme: {theme}</h1>;
};

const App =()=>{
    const [theme,setTheme]= useState("light");

    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={()=> setTheme(theme==="light"?"dark":"light")}>
                Toggle theme
            </button>
            <ThemeToggler/>
        </ThemeContext.Provider>
    )
}

export default App;
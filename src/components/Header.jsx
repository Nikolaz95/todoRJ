import React, { useEffect, useState } from 'react'

//import picture
import Logo from "../assets/img/icons-task-list.png";

const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium")

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme)
    }, [theme])
    return (
        <div >
            <div className="header">
                <h1>Todo App</h1>
            </div>
            <div className="container">
                <div className="headcontent">
                    <h3><img src={Logo} alt="" /></h3>
                    <div className="themeSelector">
                        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                        <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                        <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
                        <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
                        <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

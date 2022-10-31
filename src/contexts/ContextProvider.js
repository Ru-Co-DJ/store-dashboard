import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    // this represent all the things we can open and close
    chat: false,
    cart: false,
    userProfile: false,
    notification: false

}
// contextProvider is a react arrow function component
// inside of it we can declare all kinds of states

export const ContextProvider = ({ children }) => {
    // inside the provider all of the states will be declared
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState("#03C9D7")
    const [currentMode, setCurrentMode] = useState("Light")
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem("themeMode", e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem("colorMode", color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    return (
        <StateContext.Provider
            //whatever value passed here  they will be passed through all of the components in our app
            value={{
                activeMenu, // it is in fact activeMenu:activeMenu
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentMode,
                currentColor,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor
            }}
        >
            {/* what ever u wrap ur context with: what ever inside of it will be displayed */}
            {/* the children here are the components tha will use need the state */}
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
// useStateContext is the hook that will allow us use the context
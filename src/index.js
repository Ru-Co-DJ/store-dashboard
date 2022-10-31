import react from "react"
import ReactDom from "react-dom"

import App from "./App"
import "./index.css"
import { ContextProvider } from "./contexts/ContextProvider"


// thanks to constext provider App will have the states it needs
ReactDom.render(
    <ContextProvider> <App /> </ContextProvider>, document.getElementById("root"))

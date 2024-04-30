import React from "react";
import "./App.css"
import Sidebar from "./side bar/Sidebar";
import MainContent from "./main content/MainContent";
function App() {
    return (
        <div id="app">
            <Sidebar/>
            <MainContent/>
        </div>
    )
}

export default App;

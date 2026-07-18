import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
    return (
        <div className="maincontainer">
            <div className="searchbar">
                <FaSearch />
                <input placeholder="Search..." />
            </div>
            <div className="quicklink"></div>
        </div>
    );
}

export default App;

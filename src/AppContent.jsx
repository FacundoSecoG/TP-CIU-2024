import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

import Home from "./Components/Home/Home";

const AppContent = () => {
    const { cafes } = useContext(AppContext);
    console.table(cafes);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppContent
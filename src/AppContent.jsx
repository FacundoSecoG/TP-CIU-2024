import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";

const AppContent = () => {
    const { loading } = useContext(AppContext);
    return (
        <BrowserRouter>
            {loading ? <Loading /> : (
                <>
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/inicio" element={<Home />} />
                    </Routes>
                </>
            )}
        </BrowserRouter>
    )
}

export default AppContent
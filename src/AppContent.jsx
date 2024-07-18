import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";

const AppContent = () => {
    const { loading } = useContext(AppContext);
    return (
        <BrowserRouter>
            {loading ? <Loading /> : (
                <>
                    <HeaderContainer />
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/inicio" element={<Home />} />
                    </Routes>
                    <FooterContainer />
                </>
            )}
        </BrowserRouter>
    )
}

export default AppContent
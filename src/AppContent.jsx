import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";

import Menu from "./Components/Menu/MenuContainer";
import ContactContainer from "./Components/Contact/ContactContainer";
import AboutContainer from "./Components/AboutUs/AboutContainer";
import GalleryContainer from "./Components/Gallery/GalleryContainer";

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

                        <Route path="/menu" element={<Menu />}/> 
                        <Route path="/contacto" element={<ContactContainer />}/>
                        <Route path="/sobrenosotros" element={<AboutContainer />}/>
                        <Route path="/galeria" element={<GalleryContainer />}/>
                    </Routes>
                    <FooterContainer />
                </>
            )}
        </BrowserRouter>
    )
}

export default AppContent
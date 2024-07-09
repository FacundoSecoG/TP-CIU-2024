import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cafes, setCafes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const conseguirProductos = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/coffee/hot');
                const data = await response.json();
                setCafes(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar los cafés:", error);
                setLoading(false);
            }
        };
        conseguirProductos();
    }, []);

    return (
        <AppContext.Provider value={{ 
                cafes, 
                loading
            }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
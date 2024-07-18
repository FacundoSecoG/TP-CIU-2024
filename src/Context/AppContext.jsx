import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cafes, setCafes] = useState([]);
    const [cafesImg, setCafesImg] = useState([]);
    const [loading, setLoading] = useState(true);

    const firebaseConfig = {
    apiKey: "AIzaSyAKMWOj_Iv3skdx7GOyyKerJ83dG17BK_g",
    authDomain: "carta-cafe.firebaseapp.com",
    projectId: "carta-cafe",
    storageBucket: "carta-cafe.appspot.com",
    messagingSenderId: "775685503416",
    appId: "1:775685503416:web:a11ae9aa6c528b8b8e374d"
    };

    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app)

    useEffect(() => {
        const conseguirProductos = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/coffee/hot');
                const data = await response.json();
                setCafesImg(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar los cafés:", error);
                setLoading(false);
            }
            const consultarCartaCafe = async () => {
                const querySnapshot = await getDocs(collection(database, "carta-cafe"));
                const listaCafes = [];
                querySnapshot.forEach((doc) => {
                    listaCafes.push({ id: doc.id, ...doc.data() });
                });
                setCafes(listaCafes);
            };
            consultarCartaCafe();
        };
        conseguirProductos();
    }, []);

    return (
        <AppContext.Provider value={{ 
                cafes,
                cafesImg, 
                loading
            }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
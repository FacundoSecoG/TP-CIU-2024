import React from "react";
import { AppProvider } from "./Context/AppContext"
import AppContent from './AppContent.jsx'

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App

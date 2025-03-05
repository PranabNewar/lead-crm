import { Outlet } from "react-router-dom";
import "./App.css";

import DrawerAppBar from "./layout/Navbar";
import { LeadsProvider } from "./context/useLeads";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <LeadsProvider>
        <Toaster />
        <DrawerAppBar />
        <Outlet />
      </LeadsProvider>
    </>
  );
}

export default App;

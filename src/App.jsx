import { Outlet } from "react-router-dom";
import "./App.css";

import DrawerAppBar from "./layout/Navbar";
import { LeadsProvider } from "./context/useLeads";

function App() {
  return (
    <>
      <LeadsProvider>
        <DrawerAppBar />
        <Outlet />
      </LeadsProvider>
    </>
  );
}

export default App;

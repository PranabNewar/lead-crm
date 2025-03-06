import { Outlet } from "react-router-dom";
import "./App.css";

import DrawerAppBar from "./layout/Navbar";
import { LeadsProvider } from "./context/useLeads";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <LeadsProvider>
        <Toaster />
        <DrawerAppBar />
        <Outlet />
      </LeadsProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

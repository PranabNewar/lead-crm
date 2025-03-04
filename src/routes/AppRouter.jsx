import { createBrowserRouter } from "react-router-dom";
import Leads from "../pages/Leads";
import App from "../App";
import CreateLead from "../pages/CreateLead";
import Lead from "../pages/Lead";
import Home from "../pages/Home";
import AskHelp from "../pages/AskHelp";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "leads/:id",
        element: <Lead />,
      },
      {
        path: "create-lead",
        element: <CreateLead />,
      },
      {
        path: "ask-help",
        element: <AskHelp />,
      },
    ],
  },
]);

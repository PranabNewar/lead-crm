import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AskHelp from "../pages/AskHelp";

import Home from "../pages/Home";
import Lead from "../pages/Lead";
import Leads from "../pages/Leads";
import { lazy, Suspense } from "react";
const CreateLead = lazy(() => import("../pages/CreateLead"));
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CreateLead />
          </Suspense>
        ),
      },
      {
        path: "ask-help",
        element: <AskHelp />,
      },
    ],
  },
]);

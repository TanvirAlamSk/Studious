import { createBrowserRouter } from "react-router";
import App from "./App";
import NotFound from "./pages/NotFound";

export const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App></App>
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ]
)
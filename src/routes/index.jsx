import { createBrowserRouter } from "react-router-dom";
import WelcomePage1 from "../pages/welcome1";
import Walkthrough1 from "../pages/Walkthrough1";
import Walkthrough2 from "../pages/Walkthrough2";
import Walkthrough3 from "../pages/Walkthrough3";
import HomeScreenPage from "../pages/HomeScreen1.2";
import ShopeScreenSearch from "../pages/shopScreen1.2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage1 />,
  },
  {
    path: "/Walkthrough1",
    element: <Walkthrough1 />,
  },
  {
    path: "/Walkthrough2",
    element: <Walkthrough2 />,
  },
  {
    path: "/Walkthrough3",
    element: <Walkthrough3 />,
  },
  {
    path: "/homeScreen",
    element: <HomeScreenPage />,
  },
  {
    path: "/shopScreen",
    element: <ShopeScreenSearch />,
  },
]);

export default router;

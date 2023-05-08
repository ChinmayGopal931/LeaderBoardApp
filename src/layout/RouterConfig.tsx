// App
import { Outlet, Route, Routes } from "react-router-dom";
import { appRoutes } from "../lib/constants/appRoutes";

// Components
import Discover from "./Discover/Discover";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={appRoutes.home_path} element={<Discover />} />
        <Route path={appRoutes.discover_path} element={<Discover />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default RouterConfig;

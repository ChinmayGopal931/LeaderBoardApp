// App
import { Outlet, Route, Routes } from "react-router-dom";
import { appRoutes } from "../lib/constants/appRoutes";

// Components
import Discover from "./Discover/Discover";
import MyPortfolio from "./Portfolio/Portfolio";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={appRoutes.home_path} element={<Discover />} />
        <Route path={appRoutes.discover_path} element={<Discover />} />
        <Route path={appRoutes.user_path} element={<MyPortfolio />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default RouterConfig;

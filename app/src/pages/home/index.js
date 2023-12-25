import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Dashboard from "../dashboard";
import Detail from "../detail";
import Favorites from "../favorites";
import Trends from "../trends";
import MusicMap from "../music-map";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import TopBar from "../../components/organisms/topbar";
import SideBar from "../../components/organisms/sidebar";
import { useEffect } from "react";

const menuData = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "FiMonitor",
    path: "/dashboard",
  },
  {
    id: "trends",
    label: "Trends",
    icon: "AiOutlinePieChart",
    path: "/trends",
  },
  {
    id: "musicMap",
    label: "Music Map",
    icon: "FiMapPin",
    path: "/music-map",
  },
  {
    id: "favorites",
    label: "Favorites",
    icon: "AiOutlineHeart",
    path: "/favorites",
  },
];

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0].id);
  const [sideBarVisibility, setSideBarVisibility] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 760) {
      setSideBarVisibility(false);
    } else {
      setSideBarVisibility(true);
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Row>
        <Column xs={24}>
          <TopBar
            sideBarVisibility={sideBarVisibility}
            setSideBarVisibility={() =>
              setSideBarVisibility(!sideBarVisibility)
            }
          />
        </Column>
      </Row>

      <Row>
        {sideBarVisibility && (
          <Column
            minWidth={{ xs: "240px", sm: "240px", md: "240px", lg: "240px" }}
            direction="column"
          >
            <SideBar
              data={menuData}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </Column>
        )}

        <Column width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/music-map" element={<MusicMap />} />
          </Routes>
        </Column>
      </Row>
    </div>
  );
};

export default Home;

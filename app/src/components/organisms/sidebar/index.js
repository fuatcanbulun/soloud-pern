import React from "react";
import { SideBarContainer } from "./style";
import Menu from "../../organisms/menu";
import Recent from "../../organisms/recent";
import Logo from "../../molecules/logo";
import Row from "../../atoms/row";
import Column from "../../atoms/column";

const SideBar = ({ data, activeMenu, setActiveMenu }) => {
  return (
    <SideBarContainer>
      <Row>
        <Column
          xs={0}
          sm={24}
          md={24}
          lg={24}
          display={{ xs: "none", sm: "flex", md: "flex", lg: "flex" }}
        >
          <Logo />
        </Column>
      </Row>
      <Menu data={data} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Recent />
    </SideBarContainer>
  );
};

export default SideBar;

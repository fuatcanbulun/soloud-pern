import React from "react";
import { TopBarContainer, TopBarLogo, TopBarMenu } from "./style";
import Logo from "../../molecules/logo";
import Icon from "../../atoms/icon";

const TopBar = ({ sideBarVisibility, setSideBarVisibility }) => {
  return (
    <TopBarContainer>
      <TopBarLogo>
        <Logo />
      </TopBarLogo>
      <TopBarMenu onClick={() => setSideBarVisibility()}>
        <Icon data="AiOutlineMenu" size="sm" color="textSecondary" />
      </TopBarMenu>
    </TopBarContainer>
  );
};

export default TopBar;

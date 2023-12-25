import React from "react";
import { TabButtonContainer, TabButtonIcon, TabButtonText } from "./style";

import Text from "../../atoms/text";
import Image from "../../atoms/image";

const TabButton = ({ label, image, isActive, onClick }) => {
  return (
    <TabButtonContainer isActive={isActive} onClick={onClick}>
      <TabButtonIcon>
        {/* <Image
          imageName={image}
          type="png"
          size="cover"
          opacity={isActive ? "1" : 0.2}
        /> */}
      </TabButtonIcon>
      <TabButtonText>
        <Text
          label={label}
          color={isActive ? "textPrimary" : "textSecondary"}
          size="sm"
        />
      </TabButtonText>
    </TabButtonContainer>
  );
};

export default TabButton;

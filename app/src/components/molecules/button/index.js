import React from "react";
import { ButtonContainer } from "./style";

import Text from "../../atoms/text";
import Icon from "../../atoms/icon";

const Button = ({ label, size, icon, type, iconColor, onClick }) => {
  return (
    <ButtonContainer size={size} type={type} onClick={onClick}>
      {icon && (
        <Icon
          data={icon}
          size="sm"
          color={iconColor ? iconColor : "textPrimary"}
        />
      )}
      <Text label={label} color="textPrimary" size="sm" />
    </ButtonContainer>
  );
};

export default Button;

import styled from "styled-components";
import BgImage from "../../../assets/images/login3.jpg";

const LoginLayoutContainer = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-color: var(--colorSecondary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { LoginLayoutContainer };

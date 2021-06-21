import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    margin-bottom: 40px;
    flex-direction: column;
    align-items: center;
  } ;
`;

export const LogoContainer = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  padding: 5px;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    height: 50px;
  }
`;

export const ImgContainer = styled.img`
  height: 100%;
  width: 120px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: translateY(5px);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

export const UserLogged = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
`;

import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/color-bases";
import project_logo from "../../assets/logo.png";
import Title from "../Title";

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
`;

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  filter: invert(100%)
`;

const HeaderRegister = () => {
  return (
    <StyledHeader>
      <Logo src={project_logo} alt="Logo Med" />
      <Title>Medical Assistance</Title>
      <div>
        <BtnHeader primary href="https://google.com">
          Register
        </BtnHeader>
        <BtnHeader href="https://google.com">Management</BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default HeaderRegister;
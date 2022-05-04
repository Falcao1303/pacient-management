import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/color-bases";
import project_logo from "../../assets/logo.png";
import Title from "../Title";
import BtnHeader from "../Buttons";
import { Link } from 'react-router-dom'

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

const Text = styled.a`
  color: white;`

const HeaderRegister = () => {
  return (
    <StyledHeader>
      <Logo src={project_logo} alt="Logo Med" />
      <Title>Medical Assistance</Title>
      <div>
        <BtnHeader>
        <Link to="/" className="menu-item"><Text>Register</Text></Link>
        </BtnHeader>
        <BtnHeader><Link to="/management" className="menuitem"><Text>Management</Text></Link></BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default HeaderRegister;
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { NavTop } from "./NavTop";
import { rem } from "polished";

const Header = () => {
  return (
    <HeaderWrap>
      <NavTop />
      <Nav />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  min-height: ${rem(630)};
  background: ${(props) => props.theme.colors.bg};
`;

export default Header;

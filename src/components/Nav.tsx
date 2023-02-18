import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Link from "next/link";

const Nav = () => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <NavLogoWrap href={"/"}>
            <NavLogo src="./logo.svg" alt="logo" />
          </NavLogoWrap>
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav``;

const NavInner = styled.div``;

const NavLogoWrap = styled(Link)`
  display: block;
  width: ${rem(228)};
`;

const NavLogo = styled.img`
  width: 100%;
`;

export default Nav;

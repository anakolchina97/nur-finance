import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";

export const NavTop = () => {
  return (
    <NavTopWrap>
      <Container>
        <NavTopInner>
          <NavTopInfo>Инвестиционно-финансовая компания</NavTopInfo>
          <NavTopCity>
            <NavTopCityIcon />
            <NavTopCityText>
              Город <NavTopCityTextValue>Казань</NavTopCityTextValue>
            </NavTopCityText>
          </NavTopCity>
        </NavTopInner>
      </Container>
    </NavTopWrap>
  );
};

const NavTopWrap = styled.nav`
  margin-bottom: ${rem(33)};
`;

const NavTopInfo = styled.p`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 110%;
  color: ${(props) => props.theme.colors.accent};
  white-space: nowrap;
`;

const NavTopInner = styled.div`
  display: flex;
  height: ${rem(53)};
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey}; ;
`;

const NavTopCity = styled.div`
  display: flex;
  gap: ${rem(6)};
`;

const NavTopCityIcon = styled.i`
  width: ${rem(16)};
  height: ${rem(16)};
`;

const NavTopCityText = styled.p`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 110%;
  color: ${(props) => props.theme.colors.accent};
`;

const NavTopCityTextValue = styled.span``;

import React, { ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  padding: 0 ${rem(20)};
  max-width: ${rem(1245)};
  box-sizing: content-box;
  margin: 0 auto;
`;

export default Container;

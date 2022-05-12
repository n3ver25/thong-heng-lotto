import * as React from "react";
import IconLine from "../images/line.png";
import styled from "styled-components";

const LinePosition = styled.a`
  display: flex;
  text-align: start;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  align-items: center;

  color: #ffffff;
  justify-content: center;
`;

const OptimizeIcon = styled.img`
  width: 62px;
  height: 62px;
`;

export const Footer = () => (
  <footer>
    <a href="https://line.me/ti/p/liBcliEwKW">
      <LinePosition>
        <OptimizeIcon src={IconLine} />
        LINE: @thongheng99
      </LinePosition>
    </a>
  </footer>
);

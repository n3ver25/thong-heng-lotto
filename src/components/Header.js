import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/favicon.png";

const ResgisterButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OptimizeButton = styled.button`
  border: none;
  max-width: 115px;
  height: 53px;
  padding: 0 5px;
  background: #e0b959;
  border-radius: 10px;
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.015em;

  color: #ffffff;
  cursor: pointer;
  @media (max-width: 1160px) {
    margin-left: 0;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
    height: 45px;
  }
`;

const OptimizeButtonRegister = styled.button`
  border: none;
  cursor: pointer;
  max-width: 115px;
  height: 53px;
  padding: 0 5px;
  width: 230px;
  background: #e0b959;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.015em;

  color: #ffffff;
  min-width: fit-content;
  @media (max-width: 1160px) {
    margin-left: 3;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
    height: 45px;
  }
`;

const TestStyled = styled.img`
  height: 152px;
  width: 239px;
  cursor: pointer;
  width: 100%;
  @media (max-width: 767px) {
    max-height: 46px;
    max-width: 73px;
  }
`;

const SizeHeader = styled.header`
  height: 223px !important;
  &.homepage-header.site-header {
    @media (max-width: 767px) {
      height: 67px !important;
    }
`;
const Font = styled(Link)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.015em;

  color: #ffffff;
`;
const Page = styled.div`
  display: flex;
  place-content: center;
  align-items: flex-end;

  @media (max-width: 1025px) {
    justify-content: space-between;
  }
`;

const CustomizeUl = styled.ul`
  margin: 0 15px;
  @media (max-width: 1025px) {
    display: none;
  }
  li {
    display: inline-block;
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
`;

const HambergerOptimize = styled.span`
  align-self: center;
  margin: 0 10px;
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 1025px) {
    display: block;
  }
`;

const PositionButton = styled.div`
  display: flex;
`;

export const Header = ({ isHomepage, setNavBar }) => {
  const homepageClass = isHomepage ? "homepage-header" : "";
  return (
    <SizeHeader className={`site-header ${homepageClass}`}>
      <Page>
        <Link to="/">
          <div className="logo">
            <TestStyled src={logo} alt="thonglotto-logo" />
          </div>
        </Link>
        <nav>
          <CustomizeUl>
            <li>
              <Font to="/">หน้าแรก</Font>
            </li>
            <li>
              <Font to="/announce">ประกาศ</Font>
            </li>
            <li>
              <Font to="/promotion">โปรโมชั่น</Font>
            </li>
            <li>
              <Font to="/manual_user">คู่มือการใช้งาน</Font>
            </li>
            <li>
              <Font to="/rules">กติกา</Font>
            </li>
            <li>
              <Font to="/about">เกี่ยวกับเรา</Font>
            </li>
            <li>
              <Font to="/contact">ติดต่อเรา</Font>
            </li>
          </CustomizeUl>
        </nav>
        <PositionButton>
          <ResgisterButton>
            <a href="http://www.Thonglotto.com">
              <OptimizeButton> เข้าสู่ระบบ</OptimizeButton>
            </a>
            <a href="http://www.thonglotto.com/member/a15/">
              <OptimizeButtonRegister>สมัครสมาชิก</OptimizeButtonRegister>
            </a>
          </ResgisterButton>

          <HambergerOptimize onClick={() => setNavBar(true)}>
            &#9776;
          </HambergerOptimize>
        </PositionButton>
      </Page>
    </SizeHeader>
  );
};

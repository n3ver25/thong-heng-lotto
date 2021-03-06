import React, { useState } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import "./../styles/reset.css";
import "./../styles/common.css";
import "./../styles/style.css";
import styled from "styled-components";
import { Link } from "gatsby";

const NavBar = styled.div`
  z-index: 20;
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
`;
const Font = styled(Link)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  color: #000000;

  @media (max-width: 1025px) {
    font-size: 18px;
    line-height: 15px;
  }
`;
const CustomizeUl = styled.ul`
  width: 300px;
  background: #e0b959;
  text-align-last: center;
  margin-bottom: 0px;
  padding: 60px;
  height: 100vh;
  @media (max-width: 1025px) {
    display: block;
  }
`;

const CustomizeLi = styled.li`
  margin: 15px 0;
`;

const Overlay = styled.div`
  width: 100%;
  background: black;
  opacity: 0.5;
`;

export const Layout = ({ isHomepage, children, navigation }) => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      {navBar && (
        <NavBar>
          <CustomizeUl>
            <CustomizeLi>
              <Font to="/">หน้าแรก</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/announce">ประกาศ</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/promotion">โปรโมชั่น</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/manual_user">คู่มือการใช้งาน</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/rules">กติกา</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/about">เกี่ยวกับเรา</Font>
            </CustomizeLi>
            <CustomizeLi>
              <Font to="/contact">ติดต่อเรา</Font>
            </CustomizeLi>
          </CustomizeUl>
          <Overlay onClick={() => setNavBar(false)} />
        </NavBar>
      )}
      <Header
        isHomepage={isHomepage}
        navigation={navigation}
        setNavBar={setNavBar}
      />
      {children}
      <Footer />
    </>
  );
};

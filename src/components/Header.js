import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

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

const LogoPosition = styled.div`
  height: 152px;
  width: 239px;
  cursor: pointer;
  @media (max-width: 767px) {
    max-height: 46px;
    max-width: 73px;
  }
`;

const LogoLink = styled(Link)`
  height: 152px;
  width: 239px;
  cursor: pointer;
  @media (max-width: 767px) {
    max-height: 46px;
    max-width: 73px;
  }
`;

const SizeHeader = styled.header`

  @media (min-width: 768px) {
    height: 223px !important;
  }
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

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "thonghenglogoResizeWebp.webp" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <SizeHeader className={`site-header ${homepageClass}`}>
      <Page>
        <LogoLink to="/">
          <LogoPosition className="logo">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="??????????????????????????????????????? Lotto online"
            />
          </LogoPosition>
        </LogoLink>
        <nav>
          <CustomizeUl>
            <li>
              <Font to="/">?????????????????????</Font>
            </li>
            <li>
              <Font to="/announce">??????????????????</Font>
            </li>
            <li>
              <Font to="/promotion">???????????????????????????</Font>
            </li>
            <li>
              <Font to="/manual_user">?????????????????????????????????????????????</Font>
            </li>
            <li>
              <Font to="/rules">???????????????</Font>
            </li>
            <li>
              <Font to="/about">????????????????????????????????????</Font>
            </li>
            <li>
              <Font to="/contact">???????????????????????????</Font>
            </li>
          </CustomizeUl>
        </nav>
        <PositionButton className="login with thong heng">
          <ResgisterButton>
            <a href="http://www.Thonglotto.com">
              <OptimizeButton> ?????????????????????????????????</OptimizeButton>
            </a>
            <a href="http://www.thonglotto.com/member/a15/">
              <OptimizeButtonRegister>?????????????????????????????????</OptimizeButtonRegister>
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

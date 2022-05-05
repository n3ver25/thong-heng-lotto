import * as React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

const ResgisterButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
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
  color: black;
  cursor: pointer;
  @media (max-width: 1160px) {
    margin-left: 0;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
    height: 22px;
  }
`

const OptimizeButtonRegister = styled.button`
  border: none;
  cursor: pointer;
  max-width: 115px;
  height: 53px;
  padding: 0 5px;
  width: 100%;
  background: #e0b959;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  color: black;
  min-width: fit-content;
  @media (max-width: 1160px) {
    margin-left: 3;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
    height: 22px;
  }
`

export const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      {/* <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/more-info">More Info</Link>
          </li>
        </ul>
      </nav> */}
      <ResgisterButton>
        <OptimizeButton> เข้าสู่ระบบ</OptimizeButton>
        <OptimizeButtonRegister>สมัครสมาชิก</OptimizeButtonRegister>
      </ResgisterButton>
    </header>
  )
}

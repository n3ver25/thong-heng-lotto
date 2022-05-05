import * as React from 'react'
import logo from '../images/logo.jpg'
import styled from 'styled-components'

const ImageStyled = styled.img`
  border-radius: 50%;
`

export const HomepageBanner = () => (
  <section className="homepage-banner">
    <ImageStyled src={logo} style={{ width: '200px' }} alt="ทองเฮงล๊อตโต้" />
  </section>
)

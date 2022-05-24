import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { HomepageBanner } from "../components/HomepageBanner";
import { MainContent } from "../components/MainContent";
import styled, { keyframes } from "styled-components";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

const slideRight = keyframes`
from {
  margin-left: 100%;
  width: 300%;
}

to {
  margin-left: -100%;
  width: 100%;
}
`;

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  display: inline-block;
  animation: ${slideRight} 10s linear infinite;
  animation-delay: 2s;
  white-space: pre;

  p {
    -webkit-text-stroke: 0.2px black;

    text-align: center;
    letter-spacing: -0.015em;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: black !important;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0 !important;

    @media (max-width: 1025px) {
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

const TextBanner = styled.div`
  height: 45px;
  background: #e0b959;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  overflow: hidden;
  border-radius: 5px;

  @media (max-width: 1025px) {
    margin: 0 60px;
  }
  @media (max-width: 767px) {
    height: 18px;
    margin: 0 3px;
  }
`;

const Homepage = ({ data }) => {
  const doc = data.prismicHomePage.data;
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (!data) return null;
    setTimeout(() => {
      setLoad(false);
    }, 300);
  });

  return (
    <Layout isHomepage>
      <Seo
        title="ทองเฮงล๊อตโต้"
        description="Thong Heng แทงหวยออนไลน์ ✓ หวยรัฐบาล ครบทุกหวย หวยรัฐบาล หวยหุ้น หวยลาว หวยฮานอย และหวยยี่กี ยอดนิยม ฝาก-ถอนเร็ว สะสมแต้ม รับฟรีเครดิต VIP."
      />
      <main className="container">
        {!load && (
          <>
            <TextBanner>
              <Text>{RichText.render(doc?.text_banner?.raw)}</Text>
            </TextBanner>
            <HomepageBanner doc={doc} />
            <MainContent doc={doc} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default Homepage;

export const query = graphql`
  query MyQueryHome {
    prismicHomePage {
      id
      data {
        detail_banner {
          raw
        }
        image_ssl {
          fluid {
            src
          }
          alt
        }
        text_banner {
          raw
        }
        text_title {
          raw
        }
        body {
          ... on PrismicHomePageDataBodyImageBank {
            id
            items {
              image_banker {
                fixed(width: 78) {
                  src
                }
                alt
              }
            }
          }
          ... on PrismicHomePageDataBodyImageBanner {
            id
            items {
              banner_image {
                fluid {
                  src
                }
                alt
              }
            }
          }
        }
      }
    }
  }
`;

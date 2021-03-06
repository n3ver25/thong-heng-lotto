import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { HomepageBanner } from "../components/HomepageBanner";
import { MainContent } from "../components/MainContent";
import styled, { keyframes } from "styled-components";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import LoadingSpin from "react-loading-spin";
import Img from "gatsby-image/withIEPolyfill";

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

const LoadPosition = styled.div`
  && {
    display: flex !important;
    justify-content: center !important;
    padding: 180px 150px;
  }
`;

const TestImage = styled.div`
  max-width: 1232px;
  height: auto;
  margin: 50px auto;
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain !important;
  }
  @media (max-width: 767px) {
    margin: 8px auto;
  }
`;
const Test = styled(Img)`
  padding: 15px;
  height: 30vh;

  margin: 50px auto;
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain !important;
  }
  @media (max-width: 767px) {
    margin: 8px auto;
  }
`;

const Homepage = ({ data }) => {
  const doc = data.prismicHomePage.data;

  const [load, setLoad] = useState(true);

  return (
    <Layout isHomepage>
      <Seo
        title="???????????????????????????????????????"
        description="Thong Heng ??????????????????99 ??????????????????????????????????????? ??? ??????????????????????????? ??????????????????????????? ??????????????????????????? ????????????????????? ?????????????????? ???????????????????????? ????????????????????????????????? ????????????????????? ?????????-????????????????????? ???????????????????????? ???????????????????????????????????? VIP."
      />
      <main className="container">
        {load ? (
          <>
            <TestImage className="width-height">
              <Test
                fluid={doc.body[0].items[0].banner_image?.fluid}
                objectFit="contain"
                objectPosition="50% 50%"
                onLoad={() => setLoad(false)}
              />
            </TestImage>
            <div className="loading">
              <LoadingSpin primaryColor="#e0b959" secondaryColor="#333" />
            </div>
          </>
        ) : (
          <>
            <TextBanner className="text-runner">
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

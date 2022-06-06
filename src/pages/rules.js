import * as React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
import { CardRule } from "../components/CardRule.js";
import styled from "styled-components";

const PositionCard = styled.div`
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%);
  grid-gap: 3%;
  justify-content: center;
  margin: 15px;

  @media (max-width: 767px) {
    grid-gap: 10%;
  }
`;

const HeaderPage = styled.div`
  height: 96px;
  margin: 20px 0;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  background: #c4c4c4;
  border-radius: 10px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PositionDiv = styled.div`
  margin: 61px 0;
`;

const Rules = ({ data }) => {
  if (!data) return null;
  const doc = data.allPrismicRules.nodes;

  return (
    <Layout>
      <Seo
        title="ทองเฮง"
        description="หวย ซื้อหวย ขายหวย คิดถึง `เฮง99` `ทองเฮง99`"
      />

      <main className="container">
        <HeaderPage>กติกา THONG HENG</HeaderPage>
        <PositionDiv>
          <PositionCard>
            {doc.map((data) => (
              <>
                <CardRule data={data.data} />
              </>
            ))}
          </PositionCard>
        </PositionDiv>
      </main>
    </Layout>
  );
};

export default Rules;

export const query = graphql`
  query MyQueryRules {
    allPrismicRules {
      nodes {
        data {
          rules_detail {
            raw
          }
          rules_image {
            fluid(maxWidth: 600) {
              src
            }
          }
          rules_title {
            raw
          }
        }
        id
        type
      }
    }
  }
`;

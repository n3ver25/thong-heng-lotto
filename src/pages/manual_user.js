import * as React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
import { CardUserManual } from "../components/CardUserManual.js";
import styled from "styled-components";

const HeaderPage = styled.div`
  height: 96px;
  background: #c4c4c4;
  border-radius: 10px;
  color: #000000;
  margin: 20px 0;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1025px) {
    height: 56px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
  }
`;

const ManualUser = ({ data }) => {
  const doc = data.allPrismicManualUser.nodes;

  return (
    <Layout>
      <Seo
        title="ทองเฮง"
        description="หากกำลังมองหา แว็บไซต์ที่รับซื้อหวยออนไลน์ ราคาดี THONG HENG LOTTO เป็นหนึ่งในการบริการรับซื้อหวย หรือ แทงหวยออนไลน์อีก 1 เว็บไซต์ thong-heng."
      />

      <main className="container">
        <HeaderPage>คู่มือการใช้งาน THONG HENG</HeaderPage>
        <div>
          {doc.map((data) => (
            <>
              <CardUserManual data={data.data} />
            </>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default ManualUser;

export const query = graphql`
  query MyQueryManual {
    allPrismicManualUser {
      nodes {
        type
        id
        data {
          manual_user_detail {
            raw
          }
          manual_user_image {
            fluid(maxWidth: 864) {
              src
            }
          }
          manual_user_title {
            raw
          }
        }
      }
    }
  }
`;

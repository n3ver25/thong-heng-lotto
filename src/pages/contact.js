import * as React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import IconLine from "../images/line.png";

const LayoutPage = styled.div`
  text-align: center;
  background: #e0b959;
  padding: 62px;
  border-radius: 5px;
  h1 {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #000000;
  }
`;

const ButtonConnect = styled.div`
  max-width: fit-content;
  padding: 0 38px;
  height: 118px;
  background: #b78711;
  border-radius: 50px;
  margin: 73px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  color: #000000;
`;
const ClickPosition = styled.div`
  width: 99px;
  height: 95px;
  border-radius: 50px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;
  background: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptimizeIcon = styled.img`
  width: 62px;
  height: 62px;
`;

const LinePosition = styled.a`
  display: flex;
  text-align: start;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  align-items: center;

  color: #000000;
  justify-content: center;
`;

const Contact = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicContact.data;
  console.log(doc);
  return (
    <Layout>
      <Seo
        title="ทองเฮงล๊อตโต้"
        description="เฮง เฮง เฮง เว็บหวย บริการ หวยออนไลน์ ทุกชนิท หวยรัฐบาล หวยฮานอย หวยลาว หวยยี่กี คุณภาพอันดับ 1 นี้ไม่ได้เปิดให้บริการแค่การแทงหวยไทยเท่านั้น แต่ยังมีหวยต่างประเทศ"
      />
      <main className="container">
        <LayoutPage>
          <div>{RichText.render(doc.contact_title.raw)}</div>
          <div>{RichText.render(doc.contact_detail.raw)}</div>
          <LinePosition href={"https://line.me/ti/p/liBcliEwKW"}>
            <OptimizeIcon src={IconLine} alt={"Line:@thongheng99"} />
            LINE: @thongheng99
          </LinePosition>
        </LayoutPage>
        <a href={"https://line.me/ti/p/liBcliEwKW"}>
          <ButtonConnect>
            ติดต่อสอบถาม
            <ClickPosition>คลิก</ClickPosition>
          </ButtonConnect>
        </a>
      </main>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query MyQueryContact {
    prismicContact {
      type
      id
      data {
        contact_detail {
          raw
        }
        contact_title {
          raw
        }
        link_contact {
          raw
        }
      }
    }
  }
`;

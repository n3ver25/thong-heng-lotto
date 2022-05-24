import * as React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ImageSize = styled.div`
  max-width: 1232px;
  margin: 50px auto;
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain !important;
  }
  @media (max-width: 767px) {
    margin: 8px auto;
  }
`;

export const HomepageBanner = ({ doc }) => {
  const data = doc.body[0].items;
  console.log(data);
  const slider = (
    <AwesomeSlider>
      <div
        data-src={data[0]?.banner_image?.fluid?.src}
        alt={data[0]?.banner_image?.alt}
      />
      <div
        data-src={data[1]?.banner_image?.fluid?.src}
        alt={data[1]?.banner_image?.alt}
      />
    </AwesomeSlider>
  );
  return <ImageSize>{slider}</ImageSize>;
};

import React from "react";
import img2 from "../assests/House.png";
import { HouseImg, ImgWrapper } from "../styles/Styles";

const Photo = () => {
  return (
    <div>
      <ImgWrapper>
        <HouseImg src={img2} />
      </ImgWrapper>
    </div>
  );
};

export default Photo;

import React from "react";

import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
`;

export const Ladimg = styled.img`
  height: 70px;
`;

export const HouseImg = styled.img`
  width: 100%;
  height: 700px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const Input = styled.input`
  height: 30px;
  width: 255px;
  border: 1px solid #d2d9e8;
  border-radius: 3px;
  opacity: 1;
`;

export const SubmitBtn = styled.button`
  height: 35px;
  width: 260px;
  border: 1px solid #d2d9e8;
  border-radius: 3px;
  background-color: #e45829;
  color: #ffffff;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BottomBtn = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid #e45829;
  border-radius: 3px;
  opacity: 1;
  background-color: #ffff;
  font-size: 10px;
  font-weight: bolder;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const FotterBottom = styled.div`
  background: #393939;
  width: 100%;
  height: 200px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-evenly;
  gap: 52px;
  padding-top: 50px;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const ImgFb = styled.img`
  height: 10px;
`;
export const ImgG = styled.img`
  height: 10px;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Forget = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export const Remember = styled.div`
  font-size: 10px;
  display: flex;
  gap: 10px;
`;

export const Footertext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddressHead = styled.div`
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: bold;
`;

export const FooterContent = styled.div`
  font-size: 10px;
  font-weight: lighter;
`;

export const FotterImg = styled.div`
  display: flex;
`;
export const FotterImgIcon = styled.img`
  height: 40px;
`;

export const FormHead = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: rgb(111, 113, 114);
`;

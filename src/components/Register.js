import React from "react";
import img1 from "../assests/ladbrook.png";
import Fotter from "../components/Fotter";
import {
  Registerhead,
  RegisterAs,
  ContainerMiddle,
  AgentContainer,
  HomeownerContainer,
  OthersContainer,
  MainContainer,
} from "../styles/registercss";

const Register = () => {
  return (
    <div>
      <div>
        <div>
          <Registerhead src={img1} />
        </div>
        <MainContainer>
          <div>
            <RegisterAs>Registering As?</RegisterAs>
          </div>

          <ContainerMiddle>
            <AgentContainer>1</AgentContainer>
            <HomeownerContainer>2</HomeownerContainer>
            <OthersContainer>3</OthersContainer>
          </ContainerMiddle>
        </MainContainer>
        <Fotter />
      </div>
    </div>
  );
};

export default Register;

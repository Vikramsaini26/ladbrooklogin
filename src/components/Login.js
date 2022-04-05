import React from "react";
import img1 from "../assests/ladbrook.png";
import "../App.css";
import img4 from "../assests/fb.png";
import img5 from "../assests/G.png";
import { Link } from "react-router-dom";

import {
  Ladimg,
  Main,
  FormWrapper,
  Input,
  SubmitBtn,
  BtnWrapper,
  BottomBtn,
  ImgFb,
  ImgG,
  MiddleWrapper,
  Forget,
  Remember,
  FormHead,
} from "../styles/Styles";
const login = () => {
  return (
    <Main>
      <div>
        <Ladimg src={img1} />
      </div>
      <FormWrapper>
        <FormHead>Log In</FormHead>
        <Input type="email" className="inputWithIcon" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <MiddleWrapper>
          <Remember>
            <div>
              <input type="checkbox" />
            </div>
            <div>Remember me</div>
          </Remember>
          <Forget>Forgot Password?</Forget>
        </MiddleWrapper>
        <SubmitBtn>Log in</SubmitBtn>
        <BtnWrapper>
          <div>
            <BottomBtn>
              <ImgFb src={img4} /> Facebook
            </BottomBtn>
          </div>
          <div>
            <BottomBtn>
              <ImgG src={img5} />
              Google
            </BottomBtn>
          </div>
        </BtnWrapper>
        <h4>
          Don’t have an account? <Link to="/Register"> Register </Link>
        </h4>
      </FormWrapper>
    </Main>
  );
};

export default login;

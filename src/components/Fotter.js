import React from "react";
import img1 from "../assests/facebook.png";
import img2 from "../assests/twitter.png";
import img3 from "../assests/insta.png";
import {
  FotterBottom,
  Footertext,
  AddressHead,
  FooterContent,
  FotterImg,
  FotterImgIcon,
} from "../styles/Styles";

const Fotter = () => {
  return (
    <FotterBottom>
      <Footertext>
        <AddressHead>Company</AddressHead>
        <FooterContent>Contact Us</FooterContent>
      </Footertext>
      <Footertext>
        <AddressHead>Contact</AddressHead>
        <FooterContent>info@ladbrook.com</FooterContent>
        <FooterContent>(818) 851-9322</FooterContent>
        <FotterImg>
          <div>
            <FotterImgIcon src={img1} />
          </div>
          <div>
            <FotterImgIcon src={img2} />
          </div>
          <div>
            <FotterImgIcon src={img3} />
          </div>
        </FotterImg>
      </Footertext>
      <Footertext>
        <div>
          <AddressHead>Address</AddressHead>
        </div>
        <div>
          <FooterContent>31352 Via Colinas,</FooterContent>
          <FooterContent>Suite 101, Westlake</FooterContent>
          <FooterContent>Village, CA 91362</FooterContent>
        </div>
      </Footertext>
    </FotterBottom>
  );
};

export default Fotter;

import React from "react";
import styled from "styled-components";

import logo from "../../assets/logom4.png";

const Brand = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 65%;
  margin: auto 0;
  @media only screen and (max-width: 500px) {
    height: 55%;
    
  }
`;

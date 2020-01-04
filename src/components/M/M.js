import React from "react";
import styled from "styled-components";
import logo from "../../assets/logom4.png";

function Home() {
  return (
    <FullBlack>
      <Logo src={logo} alt="Company Logo" />
    </FullBlack>
  );
}
const FullBlack = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  opacity: 1;
  animation-delay: 1s;
  animation: fadeout 2.2s;
  margin:0;
  padding:0;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
`;
const Logo = styled.img`
  margin-left: -85px;
  margin-top: -85px;
  position: absolute;
  animation: animateThis 2.2s ease-in;
}
@keyframes animateThis {
  0% {
    width: 200px;
    height: 200px;
    left:50%;
    top: 50%;
    opacity:1;
  }
  100% {
    width: 35px;
    height: 35px;
    left:24%;
    top: 1%;
    opacity:0;
  }
}
`;
export default Home;

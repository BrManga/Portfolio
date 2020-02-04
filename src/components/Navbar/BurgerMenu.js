import React from "react";
import styled from "styled-components";

const Burgermenu = props => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;
  z-index: 11;
  & span {
    background: #296180;
    display: block;
    position: relative;
    width: 2.5rem;
    height: 0.4rem;
    margin-bottom: 0.4rem;
    transition: all ease-in-out 0.2s;
    @media only screen and (max-width: 500px) {
    width:2rem;
    margin-bottom: 0.3rem;
    height: 0.2rem;
    }
  }


  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`;

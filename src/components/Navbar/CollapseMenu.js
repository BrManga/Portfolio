import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <Link className="link" to="/" onClick={props.handleNavbar}>
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects" onClick={props.handleNavbar}>
              projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact" onClick={props.handleNavbar}>
              contact
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  width: 100%;
  background: #2d3436;
  position: fixed;
  top: 4.1rem;
  ${"" /* Navigation bar ile collapse wrapper arasi mesafe */}
  left: 0;
  right: 0;
  z-index: 11;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & .link {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    @media only screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
    &:hover {
      color: #296180;
      border-bottom: 2px solid white;
    }
  }
`;

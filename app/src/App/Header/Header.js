import React, { Component } from "react";

import styled from "styled-components";

import WrapperButton from "./WrapperButtons";
import logo from "../../logo.svg";
import "../../App.css";

const Root = styled.div`
  background-color: #0d6b7f;
  height: 80px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.header`
  width: 400px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 50px;
`;

const Title = styled.h1`
  font-size: 18px;
`;

class Header extends Component {
  render() {
    return (
      <Root>
        <Wrapper>
          <Img src={logo} alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </Wrapper>
        <WrapperButton />
      </Root>
    );
  }
}

export default Header;

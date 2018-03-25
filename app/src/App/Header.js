import React, { Component } from "react";

import styled from "styled-components";

import logo from "../logo.svg";
import "../App.css";

const Root = styled.div`
  text-align: center;
`;

const Wrapper = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Img = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Text = styled.p`
  font-size: large;
`;

class Header extends Component {
  render() {
    return (
      <Root>
        <Wrapper>
          <Img src={logo} alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </Wrapper>
        <Text className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </Root>
    );
  }
}

export default Header;

import React, { Component, Fragment } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  color: white;
  cursor: pointer;
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: inset 0px -4px 0px 0px #ff7b57;
  }
`;

const Text = styled.span`
  font-size: 20px;
  color: white;
`;

class WrapperButton extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Text>Prueba </Text>
        </Wrapper>
        <Wrapper>
          <Text>Prueba </Text>
        </Wrapper>
        <Wrapper>
          <Text>Prueba </Text>
        </Wrapper>
      </Fragment>
    );
  }
}

export default WrapperButton;

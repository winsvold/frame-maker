// @flow
import React from 'react';
import styled from 'styled-components';
import Passepartout from "../resources/passepartout/passepartout";
import Paper from "../resources/paper/paper";

const FrameDiv = styled.div`
  display: inline-block;
  border: 10px solid black;
  box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.5);
`;

type FrameComonent = {
  width: number;
  image?: any;
  color?: string;
}

export type FrameProps = {
  scale?: number;
  passepartout: FrameComonent;
  secondpassepartout: FrameComonent;
  frame: FrameComonent;
  image: any;
};

class Frame extends React.Component<FrameProps,{}> {

  render(){
    return (
      <FrameDiv>
        <Passepartout frame={this.props}>
          <Paper frame={this.props}>
             Hei
          </Paper>
        </Passepartout>
      </FrameDiv>
    );
  }
}

export default Frame;

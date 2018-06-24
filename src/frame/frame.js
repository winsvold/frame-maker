// @flow
import React from 'react';
import styled from 'styled-components';
import Passepartout from "../resources/passepartout/passepartout";
import Paper from "../resources/paper/paper";
import {Bottom, Left, Right, Top} from "./frameComponents";
import frameImg from '../resources/frame/frame.png';
import {getDimensions} from "./frameUtils";


const FrameDiv = styled.div`
  position: relative;
  display: inline-block;
  padding: ${props => props.width}px;
  box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.5);
`;

type FrameComonent = {
  width: number;
  imagehorisontal?: any;
  imagevertical?: any;
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
    const dimensions = getDimensions(this.props);
    return (
      <FrameDiv width={this.props.frame.width}>
        <Top  width={dimensions.frame.width} thickness={this.props.frame.width} img={frameImg} />
        <Bottom width={dimensions.frame.width} thickness={this.props.frame.width} img={frameImg} />
        <Right width={dimensions.frame.width} thickness={this.props.frame.width} height={dimensions.frame.height} img={frameImg} />
        <Left width={dimensions.frame.width} thickness={this.props.frame.width} height={dimensions.frame.height} img={frameImg} />
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

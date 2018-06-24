// @flow

import * as React from 'react';
import styled from "styled-components";
import type {FrameProps} from "../../frame/frame";
import {getDimensions} from "../../frame/frameUtils";
import passepartoutImg from './passepartout.png';
import {Bottom, Left, Right, Top} from "../../frame/frameComponents";

type Props = {
  children: any;
  frame: FrameProps;
}

const Style = styled.div`
  position: relative;
  display: inline-block;
  background-color: floralwhite;
  padding: ${props => props.width}px;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 2px 4px 7px rgba(0, 0, 0, 0.3);
`;

function Passepartout(props: Props) {

  const dimensions = getDimensions(props.frame);

  return (
    <Style {...props.frame.passepartout}>

      <Top thickness={props.frame.passepartout.width} img={passepartoutImg} />
      <Bottom thickness={props.frame.passepartout.width} img={passepartoutImg} />
      <Left height={dimensions.passepartout.height} thickness={props.frame.passepartout.width} img={passepartoutImg} />
      <Right height={dimensions.passepartout.height} thickness={props.frame.passepartout.width} img={passepartoutImg} />

      <Shadow />
      {props.children}
    </Style>
  );
}

export default Passepartout;

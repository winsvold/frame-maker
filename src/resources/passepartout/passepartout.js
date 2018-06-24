// @flow

import * as React from 'react';
import styled from "styled-components";
import type {FrameProps} from "../../frame/frame";
import {getDimensions} from "../../frame/frameUtils";

type Props = {
  children: any;
  frame: FrameProps;
}

const Style = styled.div`
  position: relative;
  display: inline-block;
  background-color: floralwhite;
  padding: ${props => props.width}px;
  box-shadow: inset 2px 4px 7px rgba(0, 0, 0, 0.3);
`;

const Top = styled.div`
  height: ${props => props.weight}px;
  position: absolute;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 1px,
    calc(100% - ${props => props.weight}px) 100%,
    calc(${props => props.weight}px) 100%
    );
  left: 0;
  top: 0;
  width: ${props => props.width}px;
  background-image: url("${props => props.img}");
`;

function Passepartout(props: Props) {

  const dimensions = getDimensions(props.frame);
  console.log(props.frame.passepartout.image);

  return (
    <Style {...props.frame.passepartout}>
      <Top width={dimensions.passepartout.width} weight={props.frame.passepartout.width} img={props.frame.passepartout.image} />
      {props.children}
    </Style>
  );
}

export default Passepartout;

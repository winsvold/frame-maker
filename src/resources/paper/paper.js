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
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 1px 3px 3px rgba(0, 0, 0, 0.2);
`;

function Paper(props: Props) {

  const dimensions = getDimensions(props.frame);
  console.log(dimensions);

  return (
    <Style {...dimensions.paper} >
      {props.children}
    </Style>
  );
}

export default Paper;

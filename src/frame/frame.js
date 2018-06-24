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
  imgHeight?: number;
  imgWidth?: number;
};

class Frame extends React.Component<FrameProps,{}> {

  img: HTMLImageElement | null;

  render(){
    const imgSize = {
      imgHeight: this.img ? this.img.clientHeight : 0,
      imgWidth: this.img ? this.img.clientWidth : 0
    };
    const props = {...this.props, ...imgSize};
    const dimensions = getDimensions(props);

    return (
      <FrameDiv width={props.frame.width}>
        <Top thickness={props.frame.width} img={frameImg} />
        <Bottom thickness={props.frame.width} img={frameImg} />
        <Right thickness={props.frame.width} height={dimensions.frame.height} img={frameImg} />
        <Left thickness={props.frame.width} height={dimensions.frame.height} img={frameImg} />
        <Passepartout frame={props}>
          <Paper frame={props}>
             <img onLoad={() => this.forceUpdate()} ref={ref => this.img = ref} src={props.image}/>
          </Paper>
        </Passepartout>
      </FrameDiv>
    );
  }
}

export default Frame;

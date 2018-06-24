// @flow
import type {FrameProps} from "./frame";

type Coordinate = {
  x: number;
  y: number;
}

type Dimensions2D = {
  width: number;
  height: number;
  coordinate?: Coordinate;
}

export type FrameDimensions = {
  frame: Dimensions2D;
  passepartout: Dimensions2D;
  paper: Dimensions2D;
  image: Dimensions2D;
}

export function getDimensions(props: FrameProps): FrameDimensions {
  const image: Dimensions2D = {
    width: 300,
    height: 200
  };

  const paper: Dimensions2D = {
    width: image.width + 2 * props.secondpassepartout.width,
    height: image.height + 2 * props.secondpassepartout.width
  };

  const passepartout: Dimensions2D = {
    width: paper.width + 2 * props.passepartout.width,
    height: paper.height + 2 * props.passepartout.width
  };

  const frame: Dimensions2D = {
    width: passepartout.width + 2 * props.frame.width,
    height: passepartout.height + 2 * props.frame.width
  };

  return {
    frame: frame,
    passepartout: passepartout,
    paper: paper,
    image: image
  };
}

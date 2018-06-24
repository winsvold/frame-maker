// @flow
import React from 'react';
import Frame from "./frame/frame";
import styled from 'styled-components';
import frameImg from './resources/frame/frame.png';
import type {FrameProps} from "./frame/frame";
import samplePic from './resources/samplepic/grumpy.jpg';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const testFrame: FrameProps = {
  passepartout: {
    width: 50,
  },
  secondpassepartout: {
    width: 5
  },
  frame: {
    width: 20,
    image: frameImg
  },
  image: samplePic
};

function App() {
  return (
    <Center>
      <Frame {...testFrame} />
    </Center>
  );
}

export default App;
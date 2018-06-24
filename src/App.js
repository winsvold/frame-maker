// @flow
import React from 'react';
import Frame from "./frame/frame";
import styled from 'styled-components';
import frameImg from './resources/frame/frame.png';
import passepartoutImg from './resources/passepartout/passepartout.png'
import type {FrameProps} from "./frame/frame";

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
    width: 10
  },
  frame: {
    width: 20,
    image: frameImg
  },
  image: passepartoutImg
};

function App() {
  return (
    <Center>
      <Frame {...testFrame} />
    </Center>
  );
}

export default App;
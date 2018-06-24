import styled from "styled-components";

const Base = styled.div`
  background-image: url("${props => props.img}");
  position: absolute;
  height: ${props => props.thickness}px;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 1px,
    calc(100% - ${props => props.thickness}px) 100%,
    calc(${props => props.thickness - 1}px) 100%
    );
`;

export const Top = styled(Base)`
  height: ${props => props.thickness + 1}px;
  left: 0;
  top: 0;
  right: 0;
`;

export const Bottom = styled(Base)`
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
`;

export const Left = styled(Base)`
  width: ${props => props.height}px;
  top: calc(${props => props.height/2}px - ${props => props.thickness/2}px);
  left: calc(-${props => props.height/2}px + ${props => props.thickness/2}px);
  transform: rotate(270deg);
`;

export const Right = styled(Base)`
  width: ${props => props.height}px;
  top: calc(${props => props.height/2}px - ${props => props.thickness/2}px);
  right: calc(-${props => props.height/2}px + ${props => props.thickness/2}px);
  transform: rotate(90deg);
`;

import React from 'react';
import styled from 'styled-components';
import { CircleIcon } from '../../assets';

const Dots = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Dot = styled(CircleIcon)`
  opacity: ${(props) => props.selected ? '1' : '0.5'};
`;

const CarouselDots = ({ index, length }) => (
    <Dots>
      {Array.from(Array(length)).map((_x, i) => <Dot key={i} selected={index === i} />)}
    </Dots>
);

export default CarouselDots;

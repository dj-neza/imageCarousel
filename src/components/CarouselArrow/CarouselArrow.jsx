import React from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../../assets';

const ArrowWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.34);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RotatedArrow = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

const CarouselArrow = ({ rotated }) => (
  <ArrowWrapper>
    {rotated ? <RotatedArrow /> : <ArrowIcon />}
  </ArrowWrapper>
);

export default CarouselArrow;

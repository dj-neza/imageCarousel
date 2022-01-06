import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import CarouselDots from '../CarouselDots';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ImgWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageCarousel = ({ images }) => {
  console.log(images);
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  });

  const imageList = useMemo(() => images.map((img) => (
    ({ style }) => <ImgWrapper style={style}><StyledImg src={img?.urls?.regular ?? ''} alt={img.alt_description} /></ImgWrapper>
  )), [images]);

  console.log(imageList.length);
  console.log(index);
  const onClick = useCallback(() => setIndex(state => (state + 1) % imageList.length), [imageList.length]);

  return (
    <Wrapper onClick={onClick}>
      {transitions((style, i) => {
        const Img = imageList[i];
        return <Img style={style} />;
      })}
      <CarouselDots length={imageList.length} index={index} />
    </Wrapper>
  );
};

export default ImageCarousel;

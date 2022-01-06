import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import CarouselDots from '../CarouselDots';
import CarouselArrow from '../CarouselArrow';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 16px;
  z-index: 200;
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  left: unset; 
  right: 16px;
`;

const ImgWrapper = styled(animated.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
  z-index: 100;
`;

const StyledImg = styled.img`
  object-fit: ${(props) => props.imageFit ? props.imageFit : 'cover' };
`;

const ImageCarousel = ({ images, imageFit }) => {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: `translate3d(${forward ? '100%' : '-100%'},0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: `translate3d(${forward ? '-100%' : '100%'},0,0)` },
    initial: null,
  });

  const imageList = useMemo(() => images.map((img) => (
    ({ style }) => <ImgWrapper style={style}><StyledImg imageFit={imageFit} src={img?.urls?.regular ?? ''} alt={img.alt_description} /></ImgWrapper>
  )), [images, imageFit]);

  const onForward = useCallback(() => {
    setForward(true);
    setIndex(state => (state + 1) % imageList.length);
  }, [imageList.length]);

  const onBackward = useCallback(() => {
    setForward(false);
    setIndex(state => {
      if (state -1 >= 0) return (state - 1) % imageList.length;
      return (state + imageList.length - 1) % imageList.length
    });
  }, [imageList.length]);

  return (
    <Wrapper>
      {transitions((style, i) => {
        const Img = imageList[i];
        return <Img key={i} style={style} />;
      })}
      <ArrowWrapper onClick={onBackward}>
        <CarouselArrow />
      </ArrowWrapper>
      <RightArrowWrapper onClick={onForward}>
        <CarouselArrow rotated />
      </RightArrowWrapper>
      <CarouselDots length={imageList.length} index={index} />
    </Wrapper>
  );
};

export default ImageCarousel;

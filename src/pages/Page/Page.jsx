import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import LoadingDots from '../../components/LoadingDots';
import useGetImages from '../../hooks/useGetImages';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = () => {
  const { images, loading, error } = useGetImages('landscape');

  if (loading) {
    return (
      <Container>
        <LoadingDots />
      </Container>
    );
  }
  return (
    <Container>
      {images ? <ImageCarousel images={images} /> : error}
    </Container>
  );
}

export default Page;

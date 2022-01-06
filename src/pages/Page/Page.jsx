import { useEffect, useState } from 'react';
import styled from 'styled-components';
import unsplash from '../../api/unsplash';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import LoadingDots from '../../components/LoadingDots';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    unsplash.search
      .getPhotos({ query: "landscape", orientation: "landscape" })
      .then(result => {
        setImages(result.response.results);
      })
      .catch(() => {
        console.log("Error!");
      });
  }, []);

  return (
    <Container>
      {images ? <ImageCarousel images={images} /> : <LoadingDots />}
    </Container>
  );
}

export default Page;

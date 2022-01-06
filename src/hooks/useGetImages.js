import { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

const useGetImages = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    setLoading(true);
    unsplash.search
      .getPhotos({ query, orientation: "landscape" })
      .then(result => {
        if (result.response) setImages(result.response?.results?.map((result) => ({ url: result?.urls?.regular ?? '', alt: result.alt_description })));
        else setError(result?.errors[0]);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return {
    images, loading, error,
  }
}

export default useGetImages;

import { createApi } from 'unsplash-js';
const { REACT_APP_UNSPLASH_KEY } = process.env;

const unsplash = createApi({
  accessKey: REACT_APP_UNSPLASH_KEY,
});

export default unsplash;

import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'gt2lt12m',
  dataset: 'production',
  apiVersion: '2024-02-03',
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
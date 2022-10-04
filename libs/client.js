// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
   serviceDomain: '5uqsosy1tj',
   apiKey: process.env.API_KEY,
});
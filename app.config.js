import 'dotenv/config';

export default {
  expo: {
    name: 'bloombridge-app',
    slug: 'bloombridge-app',
    extra: {
      API_BASE_URL_MOBILE: process.env.API_BASE_URL_MOBILE,
      API_BASE_URL_WEB: process.env.API_BASE_URL_WEB,
    },
  },
};

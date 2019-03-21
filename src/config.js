const dev = {
  url: 'http://localhost:5000',
};

const prod = {
  url: 'https://inkers-backend.herokuapp.com',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default config;

const dev = {
  url: 'http://localhost:5000',
};

const prod = {
  url: 'localhost:8000',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default config;

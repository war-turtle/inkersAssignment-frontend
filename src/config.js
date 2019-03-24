const dev = {
  url: 'https://war-turtle.tk',
};

const prod = {
  url: 'https://war-turtle.tk',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default config;

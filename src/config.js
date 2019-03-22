const dev = {
  url: 'http://ec2-13-233-146-143.ap-south-1.compute.amazonaws.com:8000',
};

const prod = {
  url: 'http://ec2-13-233-146-143.ap-south-1.compute.amazonaws.com:8000',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default config;

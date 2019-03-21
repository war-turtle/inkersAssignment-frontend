const toast = (message, state) => {
  window.M.toast({ html: message, classes: state });
};

export default toast;

export const validateUsername = (param) => {
  if (param.length < 8) {
    return {
      state: true,
      text: "Username must be 8 character",
    };
  } else {
    return {
      state: false,
      text: "",
    };
  }
};

export const validateEmail = (email) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(email)) {
    return {
      state: false,
      text: "",
    };
  } else {
    return {
      state: true,
      text: "Email invalid",
    };
  }
};

export const validateNumber = (param) => {
  const reg = /^[0-9]+$/;
  return reg.test(param);
};

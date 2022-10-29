import validator from 'validator';

export const validateData = (data) => {
  if (data.title.length && data.title.length < 30 && validator.isURL(data.url)) {
    return true;
  }
  return false;
};

export const getAvatar = (username) => {
  return encodeURI(`https://ui-avatars.com/api/?name=${username}`);
};

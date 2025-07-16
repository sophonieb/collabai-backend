export const accessToken = {
  secret: process.env.JWT_ACCESS_SECRET,
  expireIn: 15 * 60 * 1000, // 15 mins
};

export const refreshToken = {
  secret: process.env.JWT_REFRESH_TOKEN,
  expireIn: 14 * 24 * 60 * 60 * 1000, // 14 days
};

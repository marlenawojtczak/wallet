export const currentUser = (req, res, next) => {
  const { user, session } = req;
  return res.status(200).send({
    user: {
      id: user?._id,
      username: user?.username,
      email: user?.email,
      accessToken: user?.accessToken,
      refreshToken: user?.refreshToken,
      balance: user?.balance,
    },
    session: {
      sid: session?._id,
      uid: session?.uid,
    },
  });
};

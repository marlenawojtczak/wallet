export const currentUser = (req, res, next) => {
  const user = req.user;
  return res.status(200).send({ email: user?.email, balance: user?.balance });
};

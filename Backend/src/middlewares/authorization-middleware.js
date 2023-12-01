export const authorizationMiddleware = (req, res, next) => {
  if (!req.user.isAdmin)
    return res.status(401).send(`User ${req.user.name} is not admin`);
  next();
};

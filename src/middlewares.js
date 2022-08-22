export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn); //로그인 여부를 로컬에 저장,
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};

import users from "./users.js";

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUsersById);
};

const findAllUsers = (req, res) => {
  const { type } = req.query;
  if (type) {
    res.json(findUsersByType(type));
  } else {
    res.json(users);
  }
};

const findUsersById = (req, res) => {
  const { uid } = req.params;

  const user = users.find((user) => user._id === uid);
  res.json(user);
};

const findUsersByType = (type) => {
  return users.filter((user) => user.type === type);
};

export default userController;

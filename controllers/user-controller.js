import users from "./users.js";

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUsersById);
  app.post("/api/users", createUser);
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

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = new Date().getTime() + "";
  users.push(newUser);
  res.json(newUser);
};

export default userController;

import users from "./users.js";

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUsersById);
  app.post("/api/users", createUser);
  app.delete("/api/users/:uid", deleteUser);
  app.put("/api/users/:uid", updateUser);
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

const deleteUser = (req, res) => {
  const userId = req.params["uid"];
  users = users.filter((usr) => usr._id !== userId);
  res.sendStatus(200);
};

const updateUser = (req, res) => {
  const userId = req.params["uid"];
  const updatedUser = req.body;
  users = users.map((usr) => (usr._id === userId ? updatedUser : usr));
  res.sendStatus(200);
};

export default userController;

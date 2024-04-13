const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createNewUser = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ errors: "request's body is required" });
    }
    const { email, name, password } = req.body;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ errors: "password must has at least 6 characters" });
    }
    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name: name,
      email: email,
      password: hashed,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: '2h' });
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httponly: true,
      secure: true,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ errors: err.message });
  }
};
const login = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ errors: "request's body is required" });
    }
    const { name, password } = req.body;
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(400).json({ errors: "user not found" });
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({ errors: "wrong password" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: '2h' });
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httponly: true,
        secure: true,
      });
      return res
        .status(200)
        .json({ success: true, status: "you have loged in" });
    }
  } catch (err) {
    return res.status(400).json({ errors: err.message });
  }
};
const logOut = (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  return res.status(200).json({ success: true });
};
const getUserInfo = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ errors: "user not found" });
    } else {
      jwt.verify(token, process.env.JWTSECRET, async (err, decodeToken) => {
        if (err) {
          return res.status(400).json({ errors: err.message });
        }
        const user = await User.findById(decodeToken.id);
        if (!user) {
          return res.status(400).json({ errors: "user not found" });
        }
        return res.status(200).json(user);
      });
    }
  } catch (err) {
    return res.status(400).json({ errors: err.message });
  }
};
const updatePwd = (req, res) => {
  try {
    const { token } = req.cookies;
  } catch (err) {
    return res.status(400).json({ errors: err.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWTSECRET, async (err, decodeToken) => {
      if (err) {
        return res.status(400).json({ errors: err.message });
      }
      await User.findByIdAndDelete(decodeToken.id);
      res.cookie("token", "", { maxAge: 1 });
      return res
        .status(200)
        .json({ success: true, message: "user has been deleted" });
    });
  } catch (err) {
    return res.status(400).json({ errors: err.message });
  }
};

module.exports = {
  createNewUser,
  login,
  updatePwd,
  deleteUser,
  logOut,
  getUserInfo,
};

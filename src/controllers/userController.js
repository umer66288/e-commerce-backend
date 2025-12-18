import * as userService from "../services/userService.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await userService.deleteUser(Number(req.params.id));

    if (!deleted) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updated = await userService.updateUser(
      Number(req.params.id),
      req.body
    );

    if (!updated) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      success: true,
      message: "User updated successfully",
      user: updated,
    });
  } catch (error) {
    next(error);
  }
};
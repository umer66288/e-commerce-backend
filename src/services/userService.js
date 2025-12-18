import prisma from "../config/prisma.js";

export const createUser = async (data) => {
  return prisma.user.create({
    data,
  });
};

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const deleteUser = async (id) => {
  return prisma.user.delete({
    where: { id },
  });
};

export const updateUser = async (id, data) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

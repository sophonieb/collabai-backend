import { Prisma } from "../generated/prisma";
import { UserResponse } from "../types/user.types";
import prisma from "../utils/prisma-client";

const create = async (data: Prisma.UserCreateInput): Promise<UserResponse> => {
  return await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });
};

const findById = async (
  id: Prisma.UserWhereUniqueInput["id"],
  withPassword: boolean = false
): Promise<UserResponse> => {
  return await prisma.user.findUniqueOrThrow({
    where: { id },
    select: {
      id: true,
      name: true,
      username: true,
      password: withPassword,
      email: true,
      createdAt: true,
    },
  });
};

const findByEmail = async (
  email: Prisma.UserWhereUniqueInput["email"],
  withPassword: boolean = false
): Promise<UserResponse> => {
  return await prisma.user.findUniqueOrThrow({
    where: { email },
    select: {
      id: true,
      name: true,
      username: true,
      password: withPassword,
      email: true,
      createdAt: true,
    },
  });
};

const findByUsername = async (
  username: Prisma.UserWhereUniqueInput["username"],
  withPassword: boolean = false
): Promise<UserResponse> => {
  return await prisma.user.findUniqueOrThrow({
    where: { username },
    select: {
      id: true,
      name: true,
      username: true,
      password: withPassword,
      email: true,
      createdAt: true,
    },
  });
};

const update = async (
  id: Prisma.UserWhereUniqueInput["id"],
  data: Prisma.UserUpdateInput
): Promise<UserResponse> => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });
};

export default {
  create,
  update,
  findById,
  findByEmail,
  findByUsername,
};

import { forwardTo } from "prisma-binding";
import { prisma } from "../../../generated/prisma-client";

export const users = (parent, args, ctx, info) => {
  return prisma.users({});
};

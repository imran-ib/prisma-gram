import { User } from "./../../../generated/prisma";
import { Context } from "./../../../types/Context";
import { QueryGetUserProfileArgs } from "./../../../types/graph.d";
import AuthResolver from "../../../Utills/Auth/AuthResolver";
import { prisma } from "../../../generated/prisma-client";

export const getUserProfile = AuthResolver(
  async (
    _parent: any,
    args: QueryGetUserProfileArgs,
    ctx: Context,
    info: any
  ): Promise<User | any> => {
    try {
      const user: User = await prisma.user({
        id: args.id
      });
      return user;
    } catch (error) {
      return error.message;
    }
  }
);

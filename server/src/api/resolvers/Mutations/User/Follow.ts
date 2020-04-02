import { User } from "./../../../../generated/prisma";
import { Context } from "./../../../../types/Context";
import {
  MutationFollowUsersArgs,
  FollowUsersResponse
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/Auth/AuthResolver";
import { prisma } from "../../../../generated/prisma-client";

export const followUsers = AuthResolver(
  async (
    _parent: any,
    args: MutationFollowUsersArgs,
    ctx: Context,
    _info: any
  ): Promise<FollowUsersResponse> => {
    try {
      const user: User = ctx.request.user;
      //NOTE if User is following himself return
      if (user.id === args.id) {
        return {
          ok: false,
          error: `You Cannot Follow Yourself`
        };
      }
      await prisma.updateUser({
        where: { id: user.id },
        data: {
          following: {
            connect: {
              id: args.id
            }
          }
        }
      });
      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable To Complete The Actions ${error.message}`
      };
    }
  }
);

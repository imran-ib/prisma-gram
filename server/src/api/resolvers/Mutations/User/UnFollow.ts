import { User } from "./../../../../generated/prisma";
import { Context } from "./../../../../types/Context";
import {
  MutationUnfollowUsersArgs,
  UnfollowUsersResponse
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/Auth/AuthResolver";
import { prisma } from "../../../../generated/prisma-client";

export const unfollowUsers = AuthResolver(
  async (
    _parent: any,
    args: MutationUnfollowUsersArgs,
    ctx: Context,
    _info: any
  ): Promise<UnfollowUsersResponse> => {
    try {
      const user: User = ctx.request.user;

      await prisma.updateUser({
        where: { id: user.id },
        data: {
          following: {
            disconnect: {
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

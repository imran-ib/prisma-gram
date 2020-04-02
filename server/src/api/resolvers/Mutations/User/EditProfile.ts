import { User } from "./../../../../generated/prisma";
import { Context } from "./../../../../types/Context";
import {
  MutationEditProfileArgs,
  EditProfileResponse
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/Auth/AuthResolver";
import { prisma } from "../../../../generated/prisma-client";

export const editProfile = AuthResolver(
  async (
    _parent: any,
    args: MutationEditProfileArgs,
    ctx: Context,
    _info: any
  ): Promise<EditProfileResponse> => {
    try {
      const user: User = ctx.request.user;
      const USER: User = await prisma.updateUser({
        where: { id: user.id },
        data: { ...args }
      });

      return {
        ok: true,
        error: null,
        user: USER
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable to Get User ${error.message}`,
        user: null
      };
    }
  }
);

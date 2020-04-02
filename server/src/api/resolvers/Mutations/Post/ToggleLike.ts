import { prisma } from "./../../../../generated/prisma-client/index";
import { Context } from "graphql-yoga/dist/types";
import {
  MutationToggleLikeArgs,
  ToggleLikeResponse
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/Auth/AuthResolver";

export const toggleLike = AuthResolver(
  async (
    _parent,
    args: MutationToggleLikeArgs,
    ctx: Context,
    _info
  ): Promise<ToggleLikeResponse> => {
    try {
      const user = ctx.request.user;
      const [like] = await prisma.likes({
        where: {
          AND: [{ post: { id: args.postId } }, { user: { id: user.id } }]
        }
      });
      if (like) {
        await prisma.deleteLike({ id: like.id });
      }
      if (!like) {
        await prisma.createLike({
          user: {
            connect: { id: user.id }
          },
          post: {
            connect: { id: args.postId }
          }
        });
      }

      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable To complete The Operation ${error.message}`
      };
    }
  }
);

import { prisma } from "./../../../../../generated/prisma-client/index";
import { User } from "./../../../../../generated/prisma";
import { Context } from "./../../../../../types/Context";
import {
  MutationCreateCommentArgs,
  CreateCommentResponse
} from "./../../../../../types/graph.d";
import AuthResolver from "../../../../../Utills/Auth/AuthResolver";

export const createComment = AuthResolver(
  async (
    _parent,
    args: MutationCreateCommentArgs,
    ctx: Context,
    _info
  ): Promise<CreateCommentResponse> => {
    try {
      const user: User = ctx.request.user;

      const Comment = await prisma.createComment({
        text: args.text,
        post: {
          connect: { id: args.postId }
        },
        user: {
          connect: {
            id: user.id
          }
        }
      });
      return {
        ok: true,
        error: null,
        comment: Comment
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable To Create Commet ${error.message}`,
        comment: null
      };
    }
  }
);

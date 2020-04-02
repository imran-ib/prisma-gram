import { Context } from "./../../../../../types/Context";
import AuthResolver from "../../../../../Utills/Auth/AuthResolver";
import {
  MutationDeleteCommentArgs,
  DeleteCommentResponse,
  User
} from "../../../../../types/graph";
import { prisma } from "../../../../../generated/prisma-client";

export const deleteComment = AuthResolver(
  async (
    _parent,
    args: MutationDeleteCommentArgs,
    ctx: Context,
    info
  ): Promise<DeleteCommentResponse> => {
    const user: User = ctx.request.user;

    try {
      await prisma.deleteManyComments({
        AND: [{ id: args.commentId }, { user: { id: user.id } }]
      });
      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable to Delete Comment ${error.message}`
      };
    }
  }
);

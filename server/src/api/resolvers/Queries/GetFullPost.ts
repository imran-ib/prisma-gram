import { prisma } from "./../../../generated/prisma-client/index";
import { Context } from "./../../../types/Context";
import { QueryPostArgs, PostResponse, Post } from "./../../../types/graph.d";

export const post = async (
  _parent: any,
  args: QueryPostArgs,
  ctx: Context,
  info
): Promise<PostResponse> => {
  try {
    const post: Post = await prisma.post({ id: args.id }).$fragment(`
    {id caption location files{ id url }comments{id text}}`);

    const COMMENTS = await prisma
      .commentsConnection({ where: { post: { id: args.id } } })
      .aggregate()
      .count();
    const LIKES = await prisma
      .likesConnection({ where: { post: { id: args.id } } })
      .aggregate()
      .count();
    return {
      ok: true,
      error: null,
      post: post,
      likes: LIKES,
      Comments: COMMENTS
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
      post: null,
      likes: null,
      Comments: null
    };
  }
};

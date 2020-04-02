import { Context } from "graphql-yoga/dist/types";
import { QueryUserSearchArgs, Post } from "./../../../../types/graph.d";
import { prisma } from "../../../../generated/prisma-client";

export const searchPost = async (
  _parent: any,
  args: QueryUserSearchArgs,
  ctx: Context,
  _info: any
): Promise<Post[] | any> => {
  try {
    const posts: Post[] = await prisma.posts({
      where: {
        OR: [{ location_contains: args.term }, { caption_contains: args.term }]
      }
    });
    //TODO IsLiked By User ?
    return posts;
  } catch (error) {
    throw new Error(`Unable To Complete The Search ${error.message}`);
  }
};

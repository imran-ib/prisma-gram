import { Context } from "../../../../types/Context";
import { QueryUserSearchArgs, User } from "../../../../types/graph";
import { prisma } from "../../../../generated/prisma-client";

export const userSearch = async (
  _parent: any,
  args: QueryUserSearchArgs,
  ctx: Context,
  _info: any
): Promise<User[]> => {
  try {
    const users: User[] | any = await prisma.users({
      where: {
        OR: [
          { username_contains: args.term },
          { email_contains: args.term },
          { firstName_contains: args.term },
          { lastName_contains: args.term }
        ]
      }
    });
    //TODO Is Follwing ?? / {following_some :user.id}/
    return users;
  } catch (error) {
    throw new Error(`Unable To Complete The Search ${error.message}`);
  }
};

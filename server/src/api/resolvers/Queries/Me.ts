import { User } from "./../../../generated/prisma";
import { Context } from "./../../../types/Context";
import AuthResolver from "../../../Utills/Auth/AuthResolver";

export const me = AuthResolver(
  async (_parent: any, _args: any, ctx: Context, _info: any): Promise<User> => {
    const user: User = ctx.request.user;
    if (!user) {
      return null;
    }
    //TODO ADD Full Name
    const User: User = await ctx.prisma.query.user(
      { where: { id: user.id } },
      `{
    id
    avatar
    username
    email
    firstName
    lastName
    bio
    following{
      id
    }
    followers{
      id
    }
    posts{
      id
    }
    comments{
      id
    }
    likes{
      id
    }
    rooms{
      id
    }
  }`
    );

    return User;
  }
);

export default me;

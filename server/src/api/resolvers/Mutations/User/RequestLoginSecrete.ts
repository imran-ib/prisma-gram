import { Mails } from "./../../../../Utills/Mails/SendMail";
import { SecretGenerator } from "./../../../../Utills/RandomWords/GenerateRandomWord";
import { prisma } from "./../../../../generated/prisma-client/index";
import { Context } from "graphql-yoga/dist/types";
import {
  MutationRequestLoginSecreteArgs,
  RequestLoginSecreteResponse,
  User
} from "./../../../../types/graph.d";

export const requestLoginSecrete = async (
  _parent,
  args: MutationRequestLoginSecreteArgs,
  ctx: Context,
  info
): Promise<RequestLoginSecreteResponse> => {
  try {
    const UserExists: Boolean = await prisma.$exists.user({
      email: args.email
    });
    if (!UserExists) {
      return {
        ok: false,
        error: `No User Found With Provided Email`
      };
    }
    const Secret = SecretGenerator();
    const user: User = await prisma.updateUser({
      where: { email: args.email },
      data: { loginSecret: Secret }
    });
    //TODO Send Mail
    Mails.LoginSecreteMail(user, ctx, Secret);

    return {
      ok: true,
      error: null
    };
  } catch (error) {
    return {
      ok: false,
      error: `${error.message}`
    };
  }
};

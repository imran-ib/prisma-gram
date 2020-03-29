import { GenUserToke } from "./../../../../Utills/JWT/GenerateJwt";
import { prisma } from "./../../../../generated/prisma-client/index";
import { Context } from "./../../../../types/Context";
import {
  MutationConfirmSecretLoginArgs,
  ConfirmSecretLoginRespponse
} from "./../../../../types/graph.d";

export const confirmSecretLogin = async (
  _parent,
  args: MutationConfirmSecretLoginArgs,
  ctx: Context,
  _info
): Promise<ConfirmSecretLoginRespponse> => {
  try {
    const User = await prisma.user({ email: args.email });
    if (!User) {
      return {
        ok: false,
        token: null,
        error: `No user found`
      };
    }
    if (User.loginSecret !== args.key) {
      return {
        ok: false,
        token: null,
        error: `Invalid Key`
      };
    }

    const Token = GenUserToke(User.id);
    await prisma.updateUser({
      where: { email: args.email },
      data: { loginSecret: null }
    });

    return {
      ok: true,
      error: null,
      token: Token
    };
  } catch (error) {
    return {
      ok: false,
      token: null,
      error: `Cannot Login ${error.message}`
    };
  }
};

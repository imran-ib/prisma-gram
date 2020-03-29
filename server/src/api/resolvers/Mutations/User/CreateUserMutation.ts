import { Context } from "graphql-yoga/dist/types";
import validateEmail from "../../../../Utills/Mails/ValidateEmail";
import {
  User,
  MutationCreateUserArgs,
  CreateUserResponse
} from "../../../../types/graph";

export const createUser = async (
  _parent,
  args: MutationCreateUserArgs,
  ctx: Context,
  _info: any
): Promise<CreateUserResponse> => {
  try {
    let email: string = args.email;
    if (!email) {
      return {
        ok: false,
        error: "You Must Provide Email Address",
        user: null
      };
    }
    email = args.email.toLowerCase();

    const ValidEmail: Boolean = validateEmail(email);

    if (!ValidEmail) {
      return {
        ok: false,
        error: `The Email Address ${email} is Not Valid`,
        user: null
      };
    }
    //REVIEW if We need it
    const alreadyExist: User = await ctx.prisma.query.user({
      where: {
        email: email
      }
    });

    if (alreadyExist) {
      return {
        ok: false,
        error: `User With ${alreadyExist.email} Already Exists`,
        user: null
      };
    }

    const NewUser: User = await ctx.prisma.mutation.createUser({
      data: {
        ...args,
        email: email
      }
    });

    return {
      ok: true,
      error: null,
      user: NewUser
    };
  } catch (error) {
    return {
      ok: false,
      error: `Unable To Create User Because ${error.message}`,
      user: null
    };
  }
};

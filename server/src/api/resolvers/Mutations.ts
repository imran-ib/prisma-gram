import { confirmSecretLogin } from "./Mutations/User/ConfirmSecretLogin";
import { requestLoginSecrete } from "./Mutations/User/RequestLoginSecrete";
import { createUser } from "./Mutations/User/CreateUserMutation";

export const Mutation = {
  createUser,
  requestLoginSecrete,
  confirmSecretLogin
};

import { editProfile } from "./Mutations/User/EditProfile";
import { createComment } from "./Mutations/Post/Comments/CreateComments";
import { toggleLike } from "./Mutations/Post/ToggleLike";
import { confirmSecretLogin } from "./Mutations/User/ConfirmSecretLogin";
import { requestLoginSecrete } from "./Mutations/User/RequestLoginSecrete";
import { createUser } from "./Mutations/User/CreateUserMutation";
import { deleteComment } from "./Mutations/Post/Comments/DeleteComment";
import { followUsers } from "./Mutations/User/Follow";
import { unfollowUsers } from "./Mutations/User/UnFollow";

export const Mutation = {
  createUser,
  requestLoginSecrete,
  confirmSecretLogin,
  toggleLike,
  createComment,
  deleteComment,
  followUsers,
  unfollowUsers,
  editProfile
};

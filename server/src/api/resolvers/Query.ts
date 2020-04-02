import { post } from "./Queries/GetFullPost";
import { getUserProfile } from "./Queries/SeeUserProfile";
import { searchPost } from "./Queries/Search/SearchPost";
import { userSearch } from "./Queries/Search/SearchUser";
import { me } from "./Queries/Me";
import { users } from "./Queries/AllUsers";

export const Query = {
  me,
  users,
  userSearch,
  searchPost,
  getUserProfile,
  post
};

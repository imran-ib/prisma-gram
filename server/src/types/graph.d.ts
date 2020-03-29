import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Comment = Node & {
   __typename?: 'Comment';
  id: Scalars['ID'];
  text: Scalars['String'];
  user?: Maybe<User>;
  post?: Maybe<Post>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum CommentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
};

export type ConfirmSecretLoginRespponse = {
   __typename?: 'confirmSecretLoginRespponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateUserResponse = {
   __typename?: 'CreateUserResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type DriversSubscriptionPayload = {
   __typename?: 'DriversSubscriptionPayload';
  mutation?: Maybe<MutationType>;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type File = Node & {
   __typename?: 'File';
  id: Scalars['ID'];
  url: Scalars['String'];
  post?: Maybe<Post>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum FileOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FileWhereInput = {
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_lt?: Maybe<Scalars['String']>;
  url_lte?: Maybe<Scalars['String']>;
  url_gt?: Maybe<Scalars['String']>;
  url_gte?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  post?: Maybe<PostWhereInput>;
};

export type Like = Node & {
   __typename?: 'Like';
  id: Scalars['ID'];
  user?: Maybe<User>;
  post?: Maybe<Post>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum LikeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LikeWhereInput = {
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
};

export type Message = Node & {
   __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
  from: User;
  to: User;
  room: Room;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum MessageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MessageWhereInput = {
  AND?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  from?: Maybe<UserWhereInput>;
  to?: Maybe<UserWhereInput>;
  room?: Maybe<RoomWhereInput>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: CreateUserResponse;
  requestLoginSecrete: RequestLoginSecreteResponse;
  confirmSecretLogin: ConfirmSecretLoginRespponse;
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};


export type MutationRequestLoginSecreteArgs = {
  email: Scalars['String'];
};


export type MutationConfirmSecretLoginArgs = {
  email: Scalars['String'];
  key: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'];
};

export type Post = Node & {
   __typename?: 'Post';
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  user?: Maybe<User>;
  files?: Maybe<Array<File>>;
  likes?: Maybe<Array<Like>>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type PostFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PostLikesArgs = {
  where?: Maybe<LikeWhereInput>;
  orderBy?: Maybe<LikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  location_not?: Maybe<Scalars['String']>;
  location_in?: Maybe<Array<Scalars['String']>>;
  location_not_in?: Maybe<Array<Scalars['String']>>;
  location_lt?: Maybe<Scalars['String']>;
  location_lte?: Maybe<Scalars['String']>;
  location_gt?: Maybe<Scalars['String']>;
  location_gte?: Maybe<Scalars['String']>;
  location_contains?: Maybe<Scalars['String']>;
  location_not_contains?: Maybe<Scalars['String']>;
  location_starts_with?: Maybe<Scalars['String']>;
  location_not_starts_with?: Maybe<Scalars['String']>;
  location_ends_with?: Maybe<Scalars['String']>;
  location_not_ends_with?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  caption_not?: Maybe<Scalars['String']>;
  caption_in?: Maybe<Array<Scalars['String']>>;
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  caption_lt?: Maybe<Scalars['String']>;
  caption_lte?: Maybe<Scalars['String']>;
  caption_gt?: Maybe<Scalars['String']>;
  caption_gte?: Maybe<Scalars['String']>;
  caption_contains?: Maybe<Scalars['String']>;
  caption_not_contains?: Maybe<Scalars['String']>;
  caption_starts_with?: Maybe<Scalars['String']>;
  caption_not_starts_with?: Maybe<Scalars['String']>;
  caption_ends_with?: Maybe<Scalars['String']>;
  caption_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserWhereInput>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
  likes_every?: Maybe<LikeWhereInput>;
  likes_some?: Maybe<LikeWhereInput>;
  likes_none?: Maybe<LikeWhereInput>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
};

export type RequestLoginSecreteResponse = {
   __typename?: 'requestLoginSecreteResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type Room = Node & {
   __typename?: 'Room';
  id: Scalars['ID'];
  participants?: Maybe<Array<User>>;
  messages?: Maybe<Array<Message>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type RoomParticipantsArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RoomMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum RoomOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RoomWhereInput = {
  AND?: Maybe<Array<RoomWhereInput>>;
  OR?: Maybe<Array<RoomWhereInput>>;
  NOT?: Maybe<Array<RoomWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  participants_every?: Maybe<UserWhereInput>;
  participants_some?: Maybe<UserWhereInput>;
  participants_none?: Maybe<UserWhereInput>;
  messages_every?: Maybe<MessageWhereInput>;
  messages_some?: Maybe<MessageWhereInput>;
  messages_none?: Maybe<MessageWhereInput>;
};

export type Subscription = {
   __typename?: 'Subscription';
  DriversSubscriptions?: Maybe<DriversSubscriptionPayload>;
};

export type User = Node & {
   __typename?: 'User';
  id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  following?: Maybe<Array<User>>;
  followers?: Maybe<Array<User>>;
  posts?: Maybe<Array<Post>>;
  likes?: Maybe<Array<Like>>;
  comments?: Maybe<Array<Comment>>;
  rooms?: Maybe<Array<Room>>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserFollowingArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFollowersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserLikesArgs = {
  where?: Maybe<LikeWhereInput>;
  orderBy?: Maybe<LikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRoomsArgs = {
  where?: Maybe<RoomWhereInput>;
  orderBy?: Maybe<RoomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  LoginSecretAsc = 'loginSecret_ASC',
  LoginSecretDesc = 'loginSecret_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues';
  id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  avatar_not?: Maybe<Scalars['String']>;
  avatar_in?: Maybe<Array<Scalars['String']>>;
  avatar_not_in?: Maybe<Array<Scalars['String']>>;
  avatar_lt?: Maybe<Scalars['String']>;
  avatar_lte?: Maybe<Scalars['String']>;
  avatar_gt?: Maybe<Scalars['String']>;
  avatar_gte?: Maybe<Scalars['String']>;
  avatar_contains?: Maybe<Scalars['String']>;
  avatar_not_contains?: Maybe<Scalars['String']>;
  avatar_starts_with?: Maybe<Scalars['String']>;
  avatar_not_starts_with?: Maybe<Scalars['String']>;
  avatar_ends_with?: Maybe<Scalars['String']>;
  avatar_not_ends_with?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_not_in?: Maybe<Array<Scalars['String']>>;
  username_lt?: Maybe<Scalars['String']>;
  username_lte?: Maybe<Scalars['String']>;
  username_gt?: Maybe<Scalars['String']>;
  username_gte?: Maybe<Scalars['String']>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  bio_not?: Maybe<Scalars['String']>;
  bio_in?: Maybe<Array<Scalars['String']>>;
  bio_not_in?: Maybe<Array<Scalars['String']>>;
  bio_lt?: Maybe<Scalars['String']>;
  bio_lte?: Maybe<Scalars['String']>;
  bio_gt?: Maybe<Scalars['String']>;
  bio_gte?: Maybe<Scalars['String']>;
  bio_contains?: Maybe<Scalars['String']>;
  bio_not_contains?: Maybe<Scalars['String']>;
  bio_starts_with?: Maybe<Scalars['String']>;
  bio_not_starts_with?: Maybe<Scalars['String']>;
  bio_ends_with?: Maybe<Scalars['String']>;
  bio_not_ends_with?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  loginSecret_not?: Maybe<Scalars['String']>;
  loginSecret_in?: Maybe<Array<Scalars['String']>>;
  loginSecret_not_in?: Maybe<Array<Scalars['String']>>;
  loginSecret_lt?: Maybe<Scalars['String']>;
  loginSecret_lte?: Maybe<Scalars['String']>;
  loginSecret_gt?: Maybe<Scalars['String']>;
  loginSecret_gte?: Maybe<Scalars['String']>;
  loginSecret_contains?: Maybe<Scalars['String']>;
  loginSecret_not_contains?: Maybe<Scalars['String']>;
  loginSecret_starts_with?: Maybe<Scalars['String']>;
  loginSecret_not_starts_with?: Maybe<Scalars['String']>;
  loginSecret_ends_with?: Maybe<Scalars['String']>;
  loginSecret_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  following_every?: Maybe<UserWhereInput>;
  following_some?: Maybe<UserWhereInput>;
  following_none?: Maybe<UserWhereInput>;
  followers_every?: Maybe<UserWhereInput>;
  followers_some?: Maybe<UserWhereInput>;
  followers_none?: Maybe<UserWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  likes_every?: Maybe<LikeWhereInput>;
  likes_some?: Maybe<LikeWhereInput>;
  likes_none?: Maybe<LikeWhereInput>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
  rooms_every?: Maybe<RoomWhereInput>;
  rooms_some?: Maybe<RoomWhereInput>;
  rooms_none?: Maybe<RoomWhereInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  Node: ResolversTypes['User'] | ResolversTypes['Post'] | ResolversTypes['File'] | ResolversTypes['Like'] | ResolversTypes['Comment'] | ResolversTypes['Room'] | ResolversTypes['Message'],
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  UserWhereInput: UserWhereInput,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  PostWhereInput: PostWhereInput,
  FileWhereInput: FileWhereInput,
  LikeWhereInput: LikeWhereInput,
  CommentWhereInput: CommentWhereInput,
  RoomWhereInput: RoomWhereInput,
  MessageWhereInput: MessageWhereInput,
  UserOrderByInput: UserOrderByInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  PostOrderByInput: PostOrderByInput,
  Post: ResolverTypeWrapper<Post>,
  FileOrderByInput: FileOrderByInput,
  File: ResolverTypeWrapper<File>,
  LikeOrderByInput: LikeOrderByInput,
  Like: ResolverTypeWrapper<Like>,
  CommentOrderByInput: CommentOrderByInput,
  Comment: ResolverTypeWrapper<Comment>,
  RoomOrderByInput: RoomOrderByInput,
  Room: ResolverTypeWrapper<Room>,
  MessageOrderByInput: MessageOrderByInput,
  Message: ResolverTypeWrapper<Message>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  requestLoginSecreteResponse: ResolverTypeWrapper<RequestLoginSecreteResponse>,
  confirmSecretLoginRespponse: ResolverTypeWrapper<ConfirmSecretLoginRespponse>,
  Subscription: ResolverTypeWrapper<{}>,
  DriversSubscriptionPayload: ResolverTypeWrapper<DriversSubscriptionPayload>,
  MutationType: MutationType,
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  Node: ResolversParentTypes['User'] | ResolversParentTypes['Post'] | ResolversParentTypes['File'] | ResolversParentTypes['Like'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Room'] | ResolversParentTypes['Message'],
  ID: Scalars['ID'],
  String: Scalars['String'],
  UserWhereInput: UserWhereInput,
  DateTime: Scalars['DateTime'],
  PostWhereInput: PostWhereInput,
  FileWhereInput: FileWhereInput,
  LikeWhereInput: LikeWhereInput,
  CommentWhereInput: CommentWhereInput,
  RoomWhereInput: RoomWhereInput,
  MessageWhereInput: MessageWhereInput,
  UserOrderByInput: UserOrderByInput,
  Int: Scalars['Int'],
  PostOrderByInput: PostOrderByInput,
  Post: Post,
  FileOrderByInput: FileOrderByInput,
  File: File,
  LikeOrderByInput: LikeOrderByInput,
  Like: Like,
  CommentOrderByInput: CommentOrderByInput,
  Comment: Comment,
  RoomOrderByInput: RoomOrderByInput,
  Room: Room,
  MessageOrderByInput: MessageOrderByInput,
  Message: Message,
  Mutation: {},
  CreateUserResponse: CreateUserResponse,
  Boolean: Scalars['Boolean'],
  requestLoginSecreteResponse: RequestLoginSecreteResponse,
  confirmSecretLoginRespponse: ConfirmSecretLoginRespponse,
  Subscription: {},
  DriversSubscriptionPayload: DriversSubscriptionPayload,
  MutationType: MutationType,
  UserPreviousValues: UserPreviousValues,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ConfirmSecretLoginRespponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['confirmSecretLoginRespponse'] = ResolversParentTypes['confirmSecretLoginRespponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DriversSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DriversSubscriptionPayload'] = ResolversParentTypes['DriversSubscriptionPayload']> = {
  mutation?: Resolver<Maybe<ResolversTypes['MutationType']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['UserPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'username' | 'email'>>,
  requestLoginSecrete?: Resolver<ResolversTypes['requestLoginSecreteResponse'], ParentType, ContextType, RequireFields<MutationRequestLoginSecreteArgs, 'email'>>,
  confirmSecretLogin?: Resolver<ResolversTypes['confirmSecretLoginRespponse'], ParentType, ContextType, RequireFields<MutationConfirmSecretLoginArgs, 'email' | 'key'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'User' | 'Post' | 'File' | 'Like' | 'Comment' | 'Room' | 'Message', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  files?: Resolver<Maybe<Array<ResolversTypes['File']>>, ParentType, ContextType, RequireFields<PostFilesArgs, never>>,
  likes?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType, RequireFields<PostLikesArgs, never>>,
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<PostCommentsArgs, never>>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type RequestLoginSecreteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['requestLoginSecreteResponse'] = ResolversParentTypes['requestLoginSecreteResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  participants?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<RoomParticipantsArgs, never>>,
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType, RequireFields<RoomMessagesArgs, never>>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  DriversSubscriptions?: SubscriptionResolver<Maybe<ResolversTypes['DriversSubscriptionPayload']>, "DriversSubscriptions", ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  following?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<UserFollowingArgs, never>>,
  followers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<UserFollowersArgs, never>>,
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<UserPostsArgs, never>>,
  likes?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType, RequireFields<UserLikesArgs, never>>,
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<UserCommentsArgs, never>>,
  rooms?: Resolver<Maybe<Array<ResolversTypes['Room']>>, ParentType, ContextType, RequireFields<UserRoomsArgs, never>>,
  loginSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  loginSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>,
  confirmSecretLoginRespponse?: ConfirmSecretLoginRespponseResolvers<ContextType>,
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  DriversSubscriptionPayload?: DriversSubscriptionPayloadResolvers<ContextType>,
  File?: FileResolvers<ContextType>,
  Like?: LikeResolvers<ContextType>,
  Message?: MessageResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  requestLoginSecreteResponse?: RequestLoginSecreteResponseResolvers<ContextType>,
  Room?: RoomResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

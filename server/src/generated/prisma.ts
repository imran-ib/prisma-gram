import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Array<Post | null>>(args: { where?: PostWhereInput | null, orderBy?: PostOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Array<Like | null>>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Array<Comment | null>>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rooms: <T = Array<Room | null>>(args: { where?: RoomWhereInput | null, orderBy?: RoomOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    room: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput | null, orderBy?: PostOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roomsConnection: <T = RoomConnection>(args: { where?: RoomWhereInput | null, orderBy?: RoomOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRoom: <T = Room>(args: { data: RoomCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRoom: <T = Room | null>(args: { data: RoomUpdateInput, where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRoom: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRoom: <T = Room>(args: { where: RoomWhereUniqueInput, create: RoomCreateInput, update: RoomUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateManyMutationInput, where?: PostWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateManyMutationInput, where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRooms: <T = BatchPayload>(args: { where?: RoomWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    room: <T = RoomSubscriptionPayload | null>(args: { where?: RoomSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Room: (where?: RoomWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateComment {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment implements Node {
  id: ID!
  text: String!
  user: User
  post: Post
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  text: String!
  user: UserCreateOneWithoutCommentsInput
  post: PostCreateOneWithoutCommentsInput
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostInput {
  id: ID
  text: String!
  user: UserCreateOneWithoutCommentsInput
}

input CommentCreateWithoutUserInput {
  id: ID
  text: String!
  post: PostCreateOneWithoutCommentsInput
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  user: UserUpdateOneWithoutCommentsInput
  post: PostUpdateOneWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
  deleteMany: [CommentScalarWhereInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
}

input CommentUpdateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
  deleteMany: [CommentScalarWhereInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutUserInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostDataInput {
  text: String
  user: UserUpdateOneWithoutCommentsInput
}

input CommentUpdateWithoutUserDataInput {
  text: String
  post: PostUpdateOneWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpdateWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutUserDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentUpsertWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutUserDataInput!
  create: CommentCreateWithoutUserInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  post: PostWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  url: String!
  post: Post
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  url: String!
  post: PostCreateOneWithoutFilesInput
}

input FileCreateManyWithoutPostInput {
  create: [FileCreateWithoutPostInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateWithoutPostInput {
  id: ID
  url: String!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  id: ID!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input FileScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [FileScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  url: String
  post: PostUpdateOneWithoutFilesInput
}

input FileUpdateManyDataInput {
  url: String
}

input FileUpdateManyMutationInput {
  url: String
}

input FileUpdateManyWithoutPostInput {
  create: [FileCreateWithoutPostInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutPostInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
  deleteMany: [FileScalarWhereInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutPostInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateWithoutPostDataInput {
  url: String
}

input FileUpdateWithWhereUniqueWithoutPostInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutPostDataInput!
}

input FileUpsertWithWhereUniqueWithoutPostInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutPostDataInput!
  create: FileCreateWithoutPostInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  post: PostWhereInput
}

input FileWhereUniqueInput {
  id: ID
}

type Like implements Node {
  id: ID!
  user: User
  post: Post
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type LikeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  id: ID
  user: UserCreateOneWithoutLikesInput
  post: PostCreateOneWithoutLikesInput
}

input LikeCreateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutPostInput {
  id: ID
  user: UserCreateOneWithoutLikesInput
}

input LikeCreateWithoutUserInput {
  id: ID
  post: PostCreateOneWithoutLikesInput
}

"""An edge in a connection."""
type LikeEdge {
  """The item at the end of the edge."""
  node: Like!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LikePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input LikeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
}

input LikeUpdateInput {
  user: UserUpdateOneWithoutLikesInput
  post: PostUpdateOneWithoutLikesInput
}

input LikeUpdateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutPostInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutPostInput!]
}

input LikeUpdateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutUserInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutUserInput!]
}

input LikeUpdateWithoutPostDataInput {
  user: UserUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutUserDataInput {
  post: PostUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutPostDataInput!
}

input LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutUserDataInput!
}

input LikeUpsertWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutPostDataInput!
  create: LikeCreateWithoutPostInput!
}

input LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutUserDataInput!
  create: LikeCreateWithoutUserInput!
}

input LikeWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  post: PostWhereInput
}

input LikeWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  text: String!
  from: User!
  to: User!
  room: Room!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  from: UserCreateOneInput!
  to: UserCreateOneInput!
  room: RoomCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutRoomInput {
  create: [MessageCreateWithoutRoomInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutRoomInput {
  id: ID
  text: String!
  from: UserCreateOneInput!
  to: UserCreateOneInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  text: String
  from: UserUpdateOneRequiredInput
  to: UserUpdateOneRequiredInput
  room: RoomUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutRoomInput {
  create: [MessageCreateWithoutRoomInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutRoomInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
  deleteMany: [MessageScalarWhereInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutRoomInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutRoomDataInput {
  text: String
  from: UserUpdateOneRequiredInput
  to: UserUpdateOneRequiredInput
}

input MessageUpdateWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutRoomDataInput!
}

input MessageUpsertWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutRoomDataInput!
  create: MessageCreateWithoutRoomInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  from: UserWhereInput
  to: UserWhereInput
  room: RoomWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createLike(data: LikeCreateInput!): Like!
  createComment(data: CommentCreateInput!): Comment!
  createFile(data: FileCreateInput!): File!
  createRoom(data: RoomCreateInput!): Room!
  createMessage(data: MessageCreateInput!): Message!
  createUser(data: UserCreateInput!): User!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteFile(where: FileWhereUniqueInput!): File
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteUser(where: UserWhereUniqueInput!): User
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  location: String
  caption: String!
  user: User
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  location: String
  caption: String!
  user: UserCreateOneWithoutPostsInput
  files: FileCreateManyWithoutPostInput
  likes: LikeCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutFilesInput {
  create: PostCreateWithoutFilesInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutCommentsInput {
  id: ID
  location: String
  caption: String!
  user: UserCreateOneWithoutPostsInput
  files: FileCreateManyWithoutPostInput
  likes: LikeCreateManyWithoutPostInput
}

input PostCreateWithoutFilesInput {
  id: ID
  location: String
  caption: String!
  user: UserCreateOneWithoutPostsInput
  likes: LikeCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutLikesInput {
  id: ID
  location: String
  caption: String!
  user: UserCreateOneWithoutPostsInput
  files: FileCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutUserInput {
  id: ID
  location: String
  caption: String!
  files: FileCreateManyWithoutPostInput
  likes: LikeCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  location_ASC
  location_DESC
  caption_ASC
  caption_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  location: String
  caption: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PostScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  caption: String

  """All values that are not equal to given value."""
  caption_not: String

  """All values that are contained in given list."""
  caption_in: [String!]

  """All values that are not contained in given list."""
  caption_not_in: [String!]

  """All values less than the given value."""
  caption_lt: String

  """All values less than or equal the given value."""
  caption_lte: String

  """All values greater than the given value."""
  caption_gt: String

  """All values greater than or equal the given value."""
  caption_gte: String

  """All values containing the given string."""
  caption_contains: String

  """All values not containing the given string."""
  caption_not_contains: String

  """All values starting with the given string."""
  caption_starts_with: String

  """All values not starting with the given string."""
  caption_not_starts_with: String

  """All values ending with the given string."""
  caption_ends_with: String

  """All values not ending with the given string."""
  caption_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  location: String
  caption: String
  user: UserUpdateOneWithoutPostsInput
  files: FileUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  location: String
  caption: String
}

input PostUpdateManyMutationInput {
  location: String
  caption: String
}

input PostUpdateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
  deleteMany: [PostScalarWhereInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
}

input PostUpdateOneWithoutFilesInput {
  create: PostCreateWithoutFilesInput
  connect: PostWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PostUpdateWithoutFilesDataInput
  upsert: PostUpsertWithoutFilesInput
}

input PostUpdateOneWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  connect: PostWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PostUpdateWithoutLikesDataInput
  upsert: PostUpsertWithoutLikesInput
}

input PostUpdateWithoutCommentsDataInput {
  location: String
  caption: String
  user: UserUpdateOneWithoutPostsInput
  files: FileUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
}

input PostUpdateWithoutFilesDataInput {
  location: String
  caption: String
  user: UserUpdateOneWithoutPostsInput
  likes: LikeUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutLikesDataInput {
  location: String
  caption: String
  user: UserUpdateOneWithoutPostsInput
  files: FileUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutUserDataInput {
  location: String
  caption: String
  files: FileUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutUserDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithoutFilesInput {
  update: PostUpdateWithoutFilesDataInput!
  create: PostCreateWithoutFilesInput!
}

input PostUpsertWithoutLikesInput {
  update: PostUpdateWithoutLikesDataInput!
  create: PostCreateWithoutLikesInput!
}

input PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutUserDataInput!
  create: PostCreateWithoutUserInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  caption: String

  """All values that are not equal to given value."""
  caption_not: String

  """All values that are contained in given list."""
  caption_in: [String!]

  """All values that are not contained in given list."""
  caption_not_in: [String!]

  """All values less than the given value."""
  caption_lt: String

  """All values less than or equal the given value."""
  caption_lte: String

  """All values greater than the given value."""
  caption_gt: String

  """All values greater than or equal the given value."""
  caption_gte: String

  """All values containing the given string."""
  caption_contains: String

  """All values not containing the given string."""
  caption_not_contains: String

  """All values starting with the given string."""
  caption_starts_with: String

  """All values not starting with the given string."""
  caption_not_starts_with: String

  """All values ending with the given string."""
  caption_ends_with: String

  """All values not ending with the given string."""
  caption_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  post(where: PostWhereUniqueInput!): Post
  like(where: LikeWhereUniqueInput!): Like
  comment(where: CommentWhereUniqueInput!): Comment
  file(where: FileWhereUniqueInput!): File
  room(where: RoomWhereUniqueInput!): Room
  message(where: MessageWhereUniqueInput!): Message
  user(where: UserWhereUniqueInput!): User
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Room implements Node {
  id: ID!
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type RoomConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  id: ID
  participants: UserCreateManyWithoutRoomsInput
  messages: MessageCreateManyWithoutRoomInput
}

input RoomCreateManyWithoutParticipantsInput {
  create: [RoomCreateWithoutParticipantsInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateOneWithoutMessagesInput {
  create: RoomCreateWithoutMessagesInput
  connect: RoomWhereUniqueInput
}

input RoomCreateWithoutMessagesInput {
  id: ID
  participants: UserCreateManyWithoutRoomsInput
}

input RoomCreateWithoutParticipantsInput {
  id: ID
  messages: MessageCreateManyWithoutRoomInput
}

"""An edge in a connection."""
type RoomEdge {
  """The item at the end of the edge."""
  node: Room!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoomPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RoomScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
}

input RoomUpdateInput {
  participants: UserUpdateManyWithoutRoomsInput
  messages: MessageUpdateManyWithoutRoomInput
}

input RoomUpdateManyWithoutParticipantsInput {
  create: [RoomCreateWithoutParticipantsInput!]
  connect: [RoomWhereUniqueInput!]
  set: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutParticipantsInput!]
  deleteMany: [RoomScalarWhereInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutParticipantsInput!]
}

input RoomUpdateOneRequiredWithoutMessagesInput {
  create: RoomCreateWithoutMessagesInput
  connect: RoomWhereUniqueInput
  update: RoomUpdateWithoutMessagesDataInput
  upsert: RoomUpsertWithoutMessagesInput
}

input RoomUpdateWithoutMessagesDataInput {
  participants: UserUpdateManyWithoutRoomsInput
}

input RoomUpdateWithoutParticipantsDataInput {
  messages: MessageUpdateManyWithoutRoomInput
}

input RoomUpdateWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutParticipantsDataInput!
}

input RoomUpsertWithoutMessagesInput {
  update: RoomUpdateWithoutMessagesDataInput!
  create: RoomCreateWithoutMessagesInput!
}

input RoomUpsertWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutParticipantsDataInput!
  create: RoomCreateWithoutParticipantsInput!
}

input RoomWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  following(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  loginSecret: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  posts: PostCreateManyWithoutUserInput
  likes: LikeCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  posts: PostCreateManyWithoutUserInput
  likes: LikeCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateWithoutFollowersInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  posts: PostCreateManyWithoutUserInput
  likes: LikeCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateWithoutFollowingInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  followers: UserCreateManyWithoutFollowingInput
  posts: PostCreateManyWithoutUserInput
  likes: LikeCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateWithoutLikesInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  posts: PostCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateWithoutPostsInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  likes: LikeCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutParticipantsInput
}

input UserCreateWithoutRoomsInput {
  id: ID
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  posts: PostCreateManyWithoutUserInput
  likes: LikeCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  avatar_ASC
  avatar_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  bio_ASC
  bio_DESC
  loginSecret_ASC
  loginSecret_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  avatar: String
  username: String!
  email: String!
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  loginSecret: String

  """All values that are not equal to given value."""
  loginSecret_not: String

  """All values that are contained in given list."""
  loginSecret_in: [String!]

  """All values that are not contained in given list."""
  loginSecret_not_in: [String!]

  """All values less than the given value."""
  loginSecret_lt: String

  """All values less than or equal the given value."""
  loginSecret_lte: String

  """All values greater than the given value."""
  loginSecret_gt: String

  """All values greater than or equal the given value."""
  loginSecret_gte: String

  """All values containing the given string."""
  loginSecret_contains: String

  """All values not containing the given string."""
  loginSecret_not_contains: String

  """All values starting with the given string."""
  loginSecret_starts_with: String

  """All values not starting with the given string."""
  loginSecret_not_starts_with: String

  """All values ending with the given string."""
  loginSecret_ends_with: String

  """All values not ending with the given string."""
  loginSecret_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateManyDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
}

input UserUpdateManyMutationInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
}

input UserUpdateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowersInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowersInput!]
}

input UserUpdateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowingInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowingInput!]
}

input UserUpdateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoomsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoomsInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutCommentsDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutFollowersDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutFollowingDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutLikesDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutPostsDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutRoomsDataInput {
  avatar: String
  username: String
  email: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  posts: PostUpdateManyWithoutUserInput
  likes: LikeUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowersDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowingDataInput!
}

input UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoomsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowingDataInput!
  create: UserCreateWithoutFollowingInput!
}

input UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoomsDataInput!
  create: UserCreateWithoutRoomsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  loginSecret: String

  """All values that are not equal to given value."""
  loginSecret_not: String

  """All values that are contained in given list."""
  loginSecret_in: [String!]

  """All values that are not contained in given list."""
  loginSecret_not_in: [String!]

  """All values less than the given value."""
  loginSecret_lt: String

  """All values less than or equal the given value."""
  loginSecret_lte: String

  """All values greater than the given value."""
  loginSecret_gt: String

  """All values greater than or equal the given value."""
  loginSecret_gte: String

  """All values containing the given string."""
  loginSecret_contains: String

  """All values not containing the given string."""
  loginSecret_not_contains: String

  """All values starting with the given string."""
  loginSecret_starts_with: String

  """All values not starting with the given string."""
  loginSecret_not_starts_with: String

  """All values ending with the given string."""
  loginSecret_ends_with: String

  """All values not ending with the given string."""
  loginSecret_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  following_every: UserWhereInput
  following_some: UserWhereInput
  following_none: UserWhereInput
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'url_ASC' |
  'url_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type LikeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'location_ASC' |
  'location_DESC' |
  'caption_ASC' |
  'caption_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type RoomOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'loginSecret_ASC' |
  'loginSecret_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface CommentCreateInput {
  id?: ID_Input | null
  text: String
  user?: UserCreateOneWithoutCommentsInput | null
  post?: PostCreateOneWithoutCommentsInput | null
}

export interface CommentCreateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
}

export interface CommentCreateManyWithoutUserInput {
  create?: CommentCreateWithoutUserInput[] | CommentCreateWithoutUserInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
}

export interface CommentCreateWithoutPostInput {
  id?: ID_Input | null
  text: String
  user?: UserCreateOneWithoutCommentsInput | null
}

export interface CommentCreateWithoutUserInput {
  id?: ID_Input | null
  text: String
  post?: PostCreateOneWithoutCommentsInput | null
}

export interface CommentScalarWhereInput {
  AND?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  OR?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  NOT?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CommentWhereInput | null
}

export interface CommentUpdateInput {
  text?: String | null
  user?: UserUpdateOneWithoutCommentsInput | null
  post?: PostUpdateOneWithoutCommentsInput | null
}

export interface CommentUpdateManyDataInput {
  text?: String | null
}

export interface CommentUpdateManyMutationInput {
  text?: String | null
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  set?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | CommentUpdateWithWhereUniqueWithoutPostInput | null
  updateMany?: CommentUpdateManyWithWhereNestedInput[] | CommentUpdateManyWithWhereNestedInput | null
  deleteMany?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | CommentUpsertWithWhereUniqueWithoutPostInput | null
}

export interface CommentUpdateManyWithoutUserInput {
  create?: CommentCreateWithoutUserInput[] | CommentCreateWithoutUserInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  set?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  update?: CommentUpdateWithWhereUniqueWithoutUserInput[] | CommentUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: CommentUpdateManyWithWhereNestedInput[] | CommentUpdateManyWithWhereNestedInput | null
  deleteMany?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  upsert?: CommentUpsertWithWhereUniqueWithoutUserInput[] | CommentUpsertWithWhereUniqueWithoutUserInput | null
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput
  data: CommentUpdateManyDataInput
}

export interface CommentUpdateWithoutPostDataInput {
  text?: String | null
  user?: UserUpdateOneWithoutCommentsInput | null
}

export interface CommentUpdateWithoutUserDataInput {
  text?: String | null
  post?: PostUpdateOneWithoutCommentsInput | null
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutPostDataInput
}

export interface CommentUpdateWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutUserDataInput
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutPostDataInput
  create: CommentCreateWithoutPostInput
}

export interface CommentUpsertWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutUserDataInput
  create: CommentCreateWithoutUserInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput | null
  OR?: CommentWhereInput[] | CommentWhereInput | null
  NOT?: CommentWhereInput[] | CommentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export interface CommentWhereUniqueInput {
  id?: ID_Input | null
}

export interface FileCreateInput {
  id?: ID_Input | null
  url: String
  post?: PostCreateOneWithoutFilesInput | null
}

export interface FileCreateManyWithoutPostInput {
  create?: FileCreateWithoutPostInput[] | FileCreateWithoutPostInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
}

export interface FileCreateWithoutPostInput {
  id?: ID_Input | null
  url: String
}

export interface FileScalarWhereInput {
  AND?: FileScalarWhereInput[] | FileScalarWhereInput | null
  OR?: FileScalarWhereInput[] | FileScalarWhereInput | null
  NOT?: FileScalarWhereInput[] | FileScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
}

export interface FileUpdateInput {
  url?: String | null
  post?: PostUpdateOneWithoutFilesInput | null
}

export interface FileUpdateManyDataInput {
  url?: String | null
}

export interface FileUpdateManyMutationInput {
  url?: String | null
}

export interface FileUpdateManyWithoutPostInput {
  create?: FileCreateWithoutPostInput[] | FileCreateWithoutPostInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  set?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  update?: FileUpdateWithWhereUniqueWithoutPostInput[] | FileUpdateWithWhereUniqueWithoutPostInput | null
  updateMany?: FileUpdateManyWithWhereNestedInput[] | FileUpdateManyWithWhereNestedInput | null
  deleteMany?: FileScalarWhereInput[] | FileScalarWhereInput | null
  upsert?: FileUpsertWithWhereUniqueWithoutPostInput[] | FileUpsertWithWhereUniqueWithoutPostInput | null
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileUpdateWithoutPostDataInput {
  url?: String | null
}

export interface FileUpdateWithWhereUniqueWithoutPostInput {
  where: FileWhereUniqueInput
  data: FileUpdateWithoutPostDataInput
}

export interface FileUpsertWithWhereUniqueWithoutPostInput {
  where: FileWhereUniqueInput
  update: FileUpdateWithoutPostDataInput
  create: FileCreateWithoutPostInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  post?: PostWhereInput | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
}

export interface LikeCreateInput {
  id?: ID_Input | null
  user?: UserCreateOneWithoutLikesInput | null
  post?: PostCreateOneWithoutLikesInput | null
}

export interface LikeCreateManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[] | LikeCreateWithoutPostInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateWithoutPostInput {
  id?: ID_Input | null
  user?: UserCreateOneWithoutLikesInput | null
}

export interface LikeCreateWithoutUserInput {
  id?: ID_Input | null
  post?: PostCreateOneWithoutLikesInput | null
}

export interface LikeScalarWhereInput {
  AND?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  OR?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  NOT?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface LikeSubscriptionWhereInput {
  AND?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  OR?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  NOT?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LikeWhereInput | null
}

export interface LikeUpdateInput {
  user?: UserUpdateOneWithoutLikesInput | null
  post?: PostUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[] | LikeCreateWithoutPostInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutPostInput[] | LikeUpdateWithWhereUniqueWithoutPostInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutPostInput[] | LikeUpsertWithWhereUniqueWithoutPostInput | null
}

export interface LikeUpdateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutUserInput[] | LikeUpdateWithWhereUniqueWithoutUserInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutUserInput[] | LikeUpsertWithWhereUniqueWithoutUserInput | null
}

export interface LikeUpdateWithoutPostDataInput {
  user?: UserUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateWithoutUserDataInput {
  post?: PostUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutPostDataInput
}

export interface LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutUserDataInput
}

export interface LikeUpsertWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutPostDataInput
  create: LikeCreateWithoutPostInput
}

export interface LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutUserDataInput
  create: LikeCreateWithoutUserInput
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[] | LikeWhereInput | null
  OR?: LikeWhereInput[] | LikeWhereInput | null
  NOT?: LikeWhereInput[] | LikeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export interface LikeWhereUniqueInput {
  id?: ID_Input | null
}

export interface MessageCreateInput {
  id?: ID_Input | null
  text: String
  from: UserCreateOneInput
  to: UserCreateOneInput
  room: RoomCreateOneWithoutMessagesInput
}

export interface MessageCreateManyWithoutRoomInput {
  create?: MessageCreateWithoutRoomInput[] | MessageCreateWithoutRoomInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateWithoutRoomInput {
  id?: ID_Input | null
  text: String
  from: UserCreateOneInput
  to: UserCreateOneInput
}

export interface MessageScalarWhereInput {
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MessageWhereInput | null
}

export interface MessageUpdateInput {
  text?: String | null
  from?: UserUpdateOneRequiredInput | null
  to?: UserUpdateOneRequiredInput | null
  room?: RoomUpdateOneRequiredWithoutMessagesInput | null
}

export interface MessageUpdateManyDataInput {
  text?: String | null
}

export interface MessageUpdateManyMutationInput {
  text?: String | null
}

export interface MessageUpdateManyWithoutRoomInput {
  create?: MessageCreateWithoutRoomInput[] | MessageCreateWithoutRoomInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutRoomInput[] | MessageUpdateWithWhereUniqueWithoutRoomInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput[] | MessageUpsertWithWhereUniqueWithoutRoomInput | null
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput
  data: MessageUpdateManyDataInput
}

export interface MessageUpdateWithoutRoomDataInput {
  text?: String | null
  from?: UserUpdateOneRequiredInput | null
  to?: UserUpdateOneRequiredInput | null
}

export interface MessageUpdateWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutRoomDataInput
}

export interface MessageUpsertWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutRoomDataInput
  create: MessageCreateWithoutRoomInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput | null
  OR?: MessageWhereInput[] | MessageWhereInput | null
  NOT?: MessageWhereInput[] | MessageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  from?: UserWhereInput | null
  to?: UserWhereInput | null
  room?: RoomWhereInput | null
}

export interface MessageWhereUniqueInput {
  id?: ID_Input | null
}

export interface PostCreateInput {
  id?: ID_Input | null
  location?: String | null
  caption: String
  user?: UserCreateOneWithoutPostsInput | null
  files?: FileCreateManyWithoutPostInput | null
  likes?: LikeCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostCreateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput | null
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateOneWithoutFilesInput {
  create?: PostCreateWithoutFilesInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateOneWithoutLikesInput {
  create?: PostCreateWithoutLikesInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateWithoutCommentsInput {
  id?: ID_Input | null
  location?: String | null
  caption: String
  user?: UserCreateOneWithoutPostsInput | null
  files?: FileCreateManyWithoutPostInput | null
  likes?: LikeCreateManyWithoutPostInput | null
}

export interface PostCreateWithoutFilesInput {
  id?: ID_Input | null
  location?: String | null
  caption: String
  user?: UserCreateOneWithoutPostsInput | null
  likes?: LikeCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostCreateWithoutLikesInput {
  id?: ID_Input | null
  location?: String | null
  caption: String
  user?: UserCreateOneWithoutPostsInput | null
  files?: FileCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostCreateWithoutUserInput {
  id?: ID_Input | null
  location?: String | null
  caption: String
  files?: FileCreateManyWithoutPostInput | null
  likes?: LikeCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[] | PostScalarWhereInput | null
  OR?: PostScalarWhereInput[] | PostScalarWhereInput | null
  NOT?: PostScalarWhereInput[] | PostScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  location?: String | null
  location_not?: String | null
  location_in?: String[] | String | null
  location_not_in?: String[] | String | null
  location_lt?: String | null
  location_lte?: String | null
  location_gt?: String | null
  location_gte?: String | null
  location_contains?: String | null
  location_not_contains?: String | null
  location_starts_with?: String | null
  location_not_starts_with?: String | null
  location_ends_with?: String | null
  location_not_ends_with?: String | null
  caption?: String | null
  caption_not?: String | null
  caption_in?: String[] | String | null
  caption_not_in?: String[] | String | null
  caption_lt?: String | null
  caption_lte?: String | null
  caption_gt?: String | null
  caption_gte?: String | null
  caption_contains?: String | null
  caption_not_contains?: String | null
  caption_starts_with?: String | null
  caption_not_starts_with?: String | null
  caption_ends_with?: String | null
  caption_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PostWhereInput | null
}

export interface PostUpdateInput {
  location?: String | null
  caption?: String | null
  user?: UserUpdateOneWithoutPostsInput | null
  files?: FileUpdateManyWithoutPostInput | null
  likes?: LikeUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateManyDataInput {
  location?: String | null
  caption?: String | null
}

export interface PostUpdateManyMutationInput {
  location?: String | null
  caption?: String | null
}

export interface PostUpdateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput | null
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null
  set?: PostWhereUniqueInput[] | PostWhereUniqueInput | null
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput | null
  update?: PostUpdateWithWhereUniqueWithoutUserInput[] | PostUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput | null
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput | null
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[] | PostUpsertWithWhereUniqueWithoutUserInput | null
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostUpdateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PostUpdateWithoutCommentsDataInput | null
  upsert?: PostUpsertWithoutCommentsInput | null
}

export interface PostUpdateOneWithoutFilesInput {
  create?: PostCreateWithoutFilesInput | null
  connect?: PostWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PostUpdateWithoutFilesDataInput | null
  upsert?: PostUpsertWithoutFilesInput | null
}

export interface PostUpdateOneWithoutLikesInput {
  create?: PostCreateWithoutLikesInput | null
  connect?: PostWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PostUpdateWithoutLikesDataInput | null
  upsert?: PostUpsertWithoutLikesInput | null
}

export interface PostUpdateWithoutCommentsDataInput {
  location?: String | null
  caption?: String | null
  user?: UserUpdateOneWithoutPostsInput | null
  files?: FileUpdateManyWithoutPostInput | null
  likes?: LikeUpdateManyWithoutPostInput | null
}

export interface PostUpdateWithoutFilesDataInput {
  location?: String | null
  caption?: String | null
  user?: UserUpdateOneWithoutPostsInput | null
  likes?: LikeUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateWithoutLikesDataInput {
  location?: String | null
  caption?: String | null
  user?: UserUpdateOneWithoutPostsInput | null
  files?: FileUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateWithoutUserDataInput {
  location?: String | null
  caption?: String | null
  files?: FileUpdateManyWithoutPostInput | null
  likes?: LikeUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutUserDataInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput
  create: PostCreateWithoutCommentsInput
}

export interface PostUpsertWithoutFilesInput {
  update: PostUpdateWithoutFilesDataInput
  create: PostCreateWithoutFilesInput
}

export interface PostUpsertWithoutLikesInput {
  update: PostUpdateWithoutLikesDataInput
  create: PostCreateWithoutLikesInput
}

export interface PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutUserDataInput
  create: PostCreateWithoutUserInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput | null
  OR?: PostWhereInput[] | PostWhereInput | null
  NOT?: PostWhereInput[] | PostWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  location?: String | null
  location_not?: String | null
  location_in?: String[] | String | null
  location_not_in?: String[] | String | null
  location_lt?: String | null
  location_lte?: String | null
  location_gt?: String | null
  location_gte?: String | null
  location_contains?: String | null
  location_not_contains?: String | null
  location_starts_with?: String | null
  location_not_starts_with?: String | null
  location_ends_with?: String | null
  location_not_ends_with?: String | null
  caption?: String | null
  caption_not?: String | null
  caption_in?: String[] | String | null
  caption_not_in?: String[] | String | null
  caption_lt?: String | null
  caption_lte?: String | null
  caption_gt?: String | null
  caption_gte?: String | null
  caption_contains?: String | null
  caption_not_contains?: String | null
  caption_starts_with?: String | null
  caption_not_starts_with?: String | null
  caption_ends_with?: String | null
  caption_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  files_every?: FileWhereInput | null
  files_some?: FileWhereInput | null
  files_none?: FileWhereInput | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
}

export interface PostWhereUniqueInput {
  id?: ID_Input | null
}

export interface RoomCreateInput {
  id?: ID_Input | null
  participants?: UserCreateManyWithoutRoomsInput | null
  messages?: MessageCreateManyWithoutRoomInput | null
}

export interface RoomCreateManyWithoutParticipantsInput {
  create?: RoomCreateWithoutParticipantsInput[] | RoomCreateWithoutParticipantsInput | null
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput | null
}

export interface RoomCreateOneWithoutMessagesInput {
  create?: RoomCreateWithoutMessagesInput | null
  connect?: RoomWhereUniqueInput | null
}

export interface RoomCreateWithoutMessagesInput {
  id?: ID_Input | null
  participants?: UserCreateManyWithoutRoomsInput | null
}

export interface RoomCreateWithoutParticipantsInput {
  id?: ID_Input | null
  messages?: MessageCreateManyWithoutRoomInput | null
}

export interface RoomScalarWhereInput {
  AND?: RoomScalarWhereInput[] | RoomScalarWhereInput | null
  OR?: RoomScalarWhereInput[] | RoomScalarWhereInput | null
  NOT?: RoomScalarWhereInput[] | RoomScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface RoomSubscriptionWhereInput {
  AND?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput | null
  OR?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput | null
  NOT?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RoomWhereInput | null
}

export interface RoomUpdateInput {
  participants?: UserUpdateManyWithoutRoomsInput | null
  messages?: MessageUpdateManyWithoutRoomInput | null
}

export interface RoomUpdateManyWithoutParticipantsInput {
  create?: RoomCreateWithoutParticipantsInput[] | RoomCreateWithoutParticipantsInput | null
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput | null
  set?: RoomWhereUniqueInput[] | RoomWhereUniqueInput | null
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput | null
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput | null
  update?: RoomUpdateWithWhereUniqueWithoutParticipantsInput[] | RoomUpdateWithWhereUniqueWithoutParticipantsInput | null
  deleteMany?: RoomScalarWhereInput[] | RoomScalarWhereInput | null
  upsert?: RoomUpsertWithWhereUniqueWithoutParticipantsInput[] | RoomUpsertWithWhereUniqueWithoutParticipantsInput | null
}

export interface RoomUpdateOneRequiredWithoutMessagesInput {
  create?: RoomCreateWithoutMessagesInput | null
  connect?: RoomWhereUniqueInput | null
  update?: RoomUpdateWithoutMessagesDataInput | null
  upsert?: RoomUpsertWithoutMessagesInput | null
}

export interface RoomUpdateWithoutMessagesDataInput {
  participants?: UserUpdateManyWithoutRoomsInput | null
}

export interface RoomUpdateWithoutParticipantsDataInput {
  messages?: MessageUpdateManyWithoutRoomInput | null
}

export interface RoomUpdateWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithoutParticipantsDataInput
}

export interface RoomUpsertWithoutMessagesInput {
  update: RoomUpdateWithoutMessagesDataInput
  create: RoomCreateWithoutMessagesInput
}

export interface RoomUpsertWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithoutParticipantsDataInput
  create: RoomCreateWithoutParticipantsInput
}

export interface RoomWhereInput {
  AND?: RoomWhereInput[] | RoomWhereInput | null
  OR?: RoomWhereInput[] | RoomWhereInput | null
  NOT?: RoomWhereInput[] | RoomWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  participants_every?: UserWhereInput | null
  participants_some?: UserWhereInput | null
  participants_none?: UserWhereInput | null
  messages_every?: MessageWhereInput | null
  messages_some?: MessageWhereInput | null
  messages_none?: MessageWhereInput | null
}

export interface RoomWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  posts?: PostCreateManyWithoutUserInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateManyWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput[] | UserCreateWithoutFollowersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput[] | UserCreateWithoutFollowingInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutRoomsInput {
  create?: UserCreateWithoutRoomsInput[] | UserCreateWithoutRoomsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCommentsInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  posts?: PostCreateManyWithoutUserInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateWithoutFollowersInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  posts?: PostCreateManyWithoutUserInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateWithoutFollowingInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  followers?: UserCreateManyWithoutFollowingInput | null
  posts?: PostCreateManyWithoutUserInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateWithoutLikesInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  posts?: PostCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateWithoutPostsInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
  rooms?: RoomCreateManyWithoutParticipantsInput | null
}

export interface UserCreateWithoutRoomsInput {
  id?: ID_Input | null
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  posts?: PostCreateManyWithoutUserInput | null
  likes?: LikeCreateManyWithoutUserInput | null
  comments?: CommentCreateManyWithoutUserInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  bio?: String | null
  bio_not?: String | null
  bio_in?: String[] | String | null
  bio_not_in?: String[] | String | null
  bio_lt?: String | null
  bio_lte?: String | null
  bio_gt?: String | null
  bio_gte?: String | null
  bio_contains?: String | null
  bio_not_contains?: String | null
  bio_starts_with?: String | null
  bio_not_starts_with?: String | null
  bio_ends_with?: String | null
  bio_not_ends_with?: String | null
  loginSecret?: String | null
  loginSecret_not?: String | null
  loginSecret_in?: String[] | String | null
  loginSecret_not_in?: String[] | String | null
  loginSecret_lt?: String | null
  loginSecret_lte?: String | null
  loginSecret_gt?: String | null
  loginSecret_gte?: String | null
  loginSecret_contains?: String | null
  loginSecret_not_contains?: String | null
  loginSecret_starts_with?: String | null
  loginSecret_not_starts_with?: String | null
  loginSecret_ends_with?: String | null
  loginSecret_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateManyDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
}

export interface UserUpdateManyMutationInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
}

export interface UserUpdateManyWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput[] | UserCreateWithoutFollowersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutFollowersInput[] | UserUpdateWithWhereUniqueWithoutFollowersInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput[] | UserUpsertWithWhereUniqueWithoutFollowersInput | null
}

export interface UserUpdateManyWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput[] | UserCreateWithoutFollowingInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutFollowingInput[] | UserUpdateWithWhereUniqueWithoutFollowingInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput[] | UserUpsertWithWhereUniqueWithoutFollowingInput | null
}

export interface UserUpdateManyWithoutRoomsInput {
  create?: UserCreateWithoutRoomsInput[] | UserCreateWithoutRoomsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutRoomsInput[] | UserUpdateWithWhereUniqueWithoutRoomsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutRoomsInput[] | UserUpsertWithWhereUniqueWithoutRoomsInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutCommentsDataInput | null
  upsert?: UserUpsertWithoutCommentsInput | null
}

export interface UserUpdateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutLikesDataInput | null
  upsert?: UserUpsertWithoutLikesInput | null
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
}

export interface UserUpdateWithoutCommentsDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateWithoutFollowersDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateWithoutFollowingDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateWithoutLikesDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateWithoutPostsDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
  rooms?: RoomUpdateManyWithoutParticipantsInput | null
}

export interface UserUpdateWithoutRoomsDataInput {
  avatar?: String | null
  username?: String | null
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  likes?: LikeUpdateManyWithoutUserInput | null
  comments?: CommentUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowersDataInput
}

export interface UserUpdateWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowingDataInput
}

export interface UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutRoomsDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput
  create: UserCreateWithoutLikesInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowersDataInput
  create: UserCreateWithoutFollowersInput
}

export interface UserUpsertWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowingDataInput
  create: UserCreateWithoutFollowingInput
}

export interface UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutRoomsDataInput
  create: UserCreateWithoutRoomsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  bio?: String | null
  bio_not?: String | null
  bio_in?: String[] | String | null
  bio_not_in?: String[] | String | null
  bio_lt?: String | null
  bio_lte?: String | null
  bio_gt?: String | null
  bio_gte?: String | null
  bio_contains?: String | null
  bio_not_contains?: String | null
  bio_starts_with?: String | null
  bio_not_starts_with?: String | null
  bio_ends_with?: String | null
  bio_not_ends_with?: String | null
  loginSecret?: String | null
  loginSecret_not?: String | null
  loginSecret_in?: String[] | String | null
  loginSecret_not_in?: String[] | String | null
  loginSecret_lt?: String | null
  loginSecret_lte?: String | null
  loginSecret_gt?: String | null
  loginSecret_gte?: String | null
  loginSecret_contains?: String | null
  loginSecret_not_contains?: String | null
  loginSecret_starts_with?: String | null
  loginSecret_not_starts_with?: String | null
  loginSecret_ends_with?: String | null
  loginSecret_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  following_every?: UserWhereInput | null
  following_some?: UserWhereInput | null
  following_none?: UserWhereInput | null
  followers_every?: UserWhereInput | null
  followers_some?: UserWhereInput | null
  followers_none?: UserWhereInput | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  rooms_every?: RoomWhereInput | null
  rooms_some?: RoomWhereInput | null
  rooms_none?: RoomWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  username?: String | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateComment {
  count: Int
}

export interface AggregateFile {
  count: Int
}

export interface AggregateLike {
  count: Int
}

export interface AggregateMessage {
  count: Int
}

export interface AggregatePost {
  count: Int
}

export interface AggregateRoom {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Comment extends Node {
  id: ID_Output
  text: String
  user?: User | null
  post?: Post | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: Array<CommentEdge | null>
  aggregate: AggregateComment
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface CommentPreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment | null
  updatedFields?: Array<String> | null
  previousValues?: CommentPreviousValues | null
}

export interface File extends Node {
  id: ID_Output
  url: String
  post?: Post | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: Array<FileEdge | null>
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  url: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

export interface Like extends Node {
  id: ID_Output
  user?: User | null
  post?: Post | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface LikeConnection {
  pageInfo: PageInfo
  edges: Array<LikeEdge | null>
  aggregate: AggregateLike
}

/*
 * An edge in a connection.

 */
export interface LikeEdge {
  node: Like
  cursor: String
}

export interface LikePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LikeSubscriptionPayload {
  mutation: MutationType
  node?: Like | null
  updatedFields?: Array<String> | null
  previousValues?: LikePreviousValues | null
}

export interface Message extends Node {
  id: ID_Output
  text: String
  from: User
  to: User
  room: Room
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: Array<MessageEdge | null>
  aggregate: AggregateMessage
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message | null
  updatedFields?: Array<String> | null
  previousValues?: MessagePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Post extends Node {
  id: ID_Output
  location?: String | null
  caption: String
  user?: User | null
  files?: Array<File> | null
  likes?: Array<Like> | null
  comments?: Array<Comment> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: Array<PostEdge | null>
  aggregate: AggregatePost
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  location?: String | null
  caption: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post | null
  updatedFields?: Array<String> | null
  previousValues?: PostPreviousValues | null
}

export interface Room extends Node {
  id: ID_Output
  participants?: Array<User> | null
  messages?: Array<Message> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface RoomConnection {
  pageInfo: PageInfo
  edges: Array<RoomEdge | null>
  aggregate: AggregateRoom
}

/*
 * An edge in a connection.

 */
export interface RoomEdge {
  node: Room
  cursor: String
}

export interface RoomPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface RoomSubscriptionPayload {
  mutation: MutationType
  node?: Room | null
  updatedFields?: Array<String> | null
  previousValues?: RoomPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  following?: Array<User> | null
  followers?: Array<User> | null
  posts?: Array<Post> | null
  likes?: Array<Like> | null
  comments?: Array<Comment> | null
  rooms?: Array<Room> | null
  loginSecret?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  avatar?: String | null
  username: String
  email: String
  firstName?: String | null
  lastName?: String | null
  bio?: String | null
  loginSecret?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string
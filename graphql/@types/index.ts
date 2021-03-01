/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  email: Scalars["String"];
  status: UserStatus;
  role: UserRoleType;
  username?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  socketId?: Maybe<Scalars["String"]>;
  chatStatus?: Maybe<ChatStatus>;
};

export enum UserStatus {
  Unverified = "UNVERIFIED",
  Verified = "VERIFIED",
  Pending = "PENDING",
  Blocked = "BLOCKED"
}

export enum UserRoleType {
  User = "USER"
}

export enum ChatStatus {
  Online = "ONLINE",
  Offline = "OFFLINE"
}

export type UserSignInPayload = {
  __typename?: "UserSignInPayload";
  user: User;
  accessToken: Scalars["String"];
  expiresIn: Scalars["Float"];
};

export type UserIdentity = {
  __typename?: "UserIdentity";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  provider: Scalars["String"];
  providerId: Scalars["String"];
  userId: Scalars["String"];
  user: User;
};

export type UserPreference = {
  __typename?: "UserPreference";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  key: PreferenceKey;
  value: Scalars["String"];
  userId: Scalars["String"];
  user: User;
};

export enum PreferenceKey {
  Language = "LANGUAGE",
  Notification = "NOTIFICATION"
}

export type Admin = {
  __typename?: "Admin";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  role: AdminRoleType;
  email: Scalars["String"];
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export enum AdminRoleType {
  Admin = "ADMIN",
  Superadmin = "SUPERADMIN"
}

export type AdminLoginPayload = {
  __typename?: "AdminLoginPayload";
  admin: Admin;
  accessToken: Scalars["String"];
  expiresIn: Scalars["Float"];
};

export type AdminPreference = {
  __typename?: "AdminPreference";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  key: PreferenceKey;
  value: Scalars["String"];
  adminId: Scalars["String"];
  admin: Admin;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"];
};

export type AdminDeleteResponse = {
  __typename?: "AdminDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<AdminRoleType>;
  email?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type UpdateManyResponse = {
  __typename?: "UpdateManyResponse";
  /** The number of records updated. */
  updatedCount: Scalars["Int"];
};

export type AdminEdge = {
  __typename?: "AdminEdge";
  /** The node containing the Admin */
  node: Admin;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars["ConnectionCursor"]>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars["ConnectionCursor"]>;
};

export type AdminConnection = {
  __typename?: "AdminConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<AdminEdge>;
};

export type AdminCountAggregate = {
  __typename?: "AdminCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  role?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
};

export type AdminMinAggregate = {
  __typename?: "AdminMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<AdminRoleType>;
  email?: Maybe<Scalars["String"]>;
};

export type AdminMaxAggregate = {
  __typename?: "AdminMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<AdminRoleType>;
  email?: Maybe<Scalars["String"]>;
};

export type AdminPreferenceDeleteResponse = {
  __typename?: "AdminPreferenceDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  key?: Maybe<PreferenceKey>;
  value?: Maybe<Scalars["String"]>;
  adminId?: Maybe<Scalars["String"]>;
};

export type AdminPreferenceEdge = {
  __typename?: "AdminPreferenceEdge";
  /** The node containing the AdminPreference */
  node: AdminPreference;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type AdminPreferenceConnection = {
  __typename?: "AdminPreferenceConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<AdminPreferenceEdge>;
};

export type AdminPreferenceCountAggregate = {
  __typename?: "AdminPreferenceCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type AdminPreferenceMinAggregate = {
  __typename?: "AdminPreferenceMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AdminPreferenceMaxAggregate = {
  __typename?: "AdminPreferenceMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Announcement = {
  __typename?: "Announcement";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  title: Scalars["String"];
  author: Scalars["String"];
  status: AnnouncementStatus;
  content: Scalars["String"];
  coverImage?: Maybe<Scalars["String"]>;
  publishDateTime?: Maybe<Scalars["DateTime"]>;
  endDateTime?: Maybe<Scalars["DateTime"]>;
};

export enum AnnouncementStatus {
  Published = "PUBLISHED",
  Draft = "DRAFT",
  Archived = "ARCHIVED"
}

export type AnnouncementDeleteResponse = {
  __typename?: "AnnouncementDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  status?: Maybe<AnnouncementStatus>;
  content?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  publishDateTime?: Maybe<Scalars["DateTime"]>;
  endDateTime?: Maybe<Scalars["DateTime"]>;
};

export type AnnouncementEdge = {
  __typename?: "AnnouncementEdge";
  /** The node containing the Announcement */
  node: Announcement;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type AnnouncementConnection = {
  __typename?: "AnnouncementConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<AnnouncementEdge>;
};

export type AnnouncementCountAggregate = {
  __typename?: "AnnouncementCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type AnnouncementMinAggregate = {
  __typename?: "AnnouncementMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnouncementMaxAggregate = {
  __typename?: "AnnouncementMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Banner = {
  __typename?: "Banner";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  image: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
};

export type BannerDeleteResponse = {
  __typename?: "BannerDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
};

export type BannerEdge = {
  __typename?: "BannerEdge";
  /** The node containing the Banner */
  node: Banner;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type BannerConnection = {
  __typename?: "BannerConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<BannerEdge>;
};

export type BannerCountAggregate = {
  __typename?: "BannerCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
};

export type BannerMinAggregate = {
  __typename?: "BannerMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type BannerMaxAggregate = {
  __typename?: "BannerMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type UserDeleteResponse = {
  __typename?: "UserDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  status?: Maybe<UserStatus>;
  role?: Maybe<UserRoleType>;
  username?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  socketId?: Maybe<Scalars["String"]>;
  chatStatus?: Maybe<ChatStatus>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** The node containing the User */
  node: User;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<UserEdge>;
};

export type UserCountAggregate = {
  __typename?: "UserCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
};

export type UserMinAggregate = {
  __typename?: "UserMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UserPreferenceDeleteResponse = {
  __typename?: "UserPreferenceDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  key?: Maybe<PreferenceKey>;
  value?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type UserPreferenceEdge = {
  __typename?: "UserPreferenceEdge";
  /** The node containing the UserPreference */
  node: UserPreference;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type UserPreferenceConnection = {
  __typename?: "UserPreferenceConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<UserPreferenceEdge>;
};

export type UserPreferenceCountAggregate = {
  __typename?: "UserPreferenceCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type UserPreferenceMinAggregate = {
  __typename?: "UserPreferenceMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserPreferenceMaxAggregate = {
  __typename?: "UserPreferenceMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserDevice = {
  __typename?: "UserDevice";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  fcmToken?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  user: User;
};

export type UserDeviceEdge = {
  __typename?: "UserDeviceEdge";
  /** The node containing the UserDevice */
  node: UserDevice;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type UserDeviceConnection = {
  __typename?: "UserDeviceConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<UserDeviceEdge>;
};

export type UserDeviceCountAggregate = {
  __typename?: "UserDeviceCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  fcmToken?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type UserDeviceMinAggregate = {
  __typename?: "UserDeviceMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type UserDeviceMaxAggregate = {
  __typename?: "UserDeviceMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type Notification = {
  __typename?: "Notification";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  title: Scalars["String"];
  message: Scalars["String"];
  read?: Maybe<Scalars["Boolean"]>;
  userId?: Maybe<Scalars["String"]>;
  pushNotification: Scalars["Boolean"];
};

export type ChatRoom = {
  __typename?: "ChatRoom";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  type: ChatRoomType;
  description?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<User>>;
  latestMessage?: Maybe<ChatMessage>;
  unreadChatCount?: Maybe<Scalars["Float"]>;
};

export enum ChatRoomType {
  One = "ONE",
  Many = "MANY"
}

export type ChatRooms = {
  __typename?: "ChatRooms";
  items: Array<ChatRoom>;
  total: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  page: Scalars["Int"];
  pages: Scalars["Int"];
};

export type ChatMessage = {
  __typename?: "ChatMessage";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  message: Scalars["String"];
  type: ChatMessageType;
  name: Scalars["String"];
  url: Scalars["String"];
  status: ChatMessageStatus;
  user: User;
  chatRoom: ChatRoom;
  unreadMessagesCount: Scalars["Float"];
};

export enum ChatMessageType {
  Text = "TEXT",
  Link = "LINK",
  Document = "DOCUMENT",
  Image = "IMAGE",
  Video = "VIDEO"
}

export enum ChatMessageStatus {
  Unread = "UNREAD",
  Read = "READ"
}

export type ChatMessages = {
  __typename?: "ChatMessages";
  items: Array<ChatMessage>;
  total: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  page: Scalars["Int"];
  pages: Scalars["Int"];
};

export type Country = {
  __typename?: "Country";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  status: GeneralStatus;
  name: Scalars["String"];
  code: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
};

export enum GeneralStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

export type CountryDeleteResponse = {
  __typename?: "CountryDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type CountryEdge = {
  __typename?: "CountryEdge";
  /** The node containing the Country */
  node: Country;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type CountryConnection = {
  __typename?: "CountryConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<CountryEdge>;
};

export type CountryCountAggregate = {
  __typename?: "CountryCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type CountryMinAggregate = {
  __typename?: "CountryMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CountryMaxAggregate = {
  __typename?: "CountryMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Currency = {
  __typename?: "Currency";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  status: GeneralStatus;
  name: Scalars["String"];
  code: Scalars["String"];
  countryCode: Scalars["String"];
};

export type CurrencyDeleteResponse = {
  __typename?: "CurrencyDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
};

export type CurrencyEdge = {
  __typename?: "CurrencyEdge";
  /** The node containing the Currency */
  node: Currency;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type CurrencyConnection = {
  __typename?: "CurrencyConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<CurrencyEdge>;
};

export type CurrencyCountAggregate = {
  __typename?: "CurrencyCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type CurrencyMinAggregate = {
  __typename?: "CurrencyMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CurrencyMaxAggregate = {
  __typename?: "CurrencyMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Faq = {
  __typename?: "Faq";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  question: Scalars["String"];
  answer?: Maybe<Scalars["String"]>;
};

export type FaqDeleteResponse = {
  __typename?: "FaqDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  question?: Maybe<Scalars["String"]>;
  answer?: Maybe<Scalars["String"]>;
};

export type FaqEdge = {
  __typename?: "FaqEdge";
  /** The node containing the Faq */
  node: Faq;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type FaqConnection = {
  __typename?: "FaqConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<FaqEdge>;
};

export type FaqCountAggregate = {
  __typename?: "FaqCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type FaqMinAggregate = {
  __typename?: "FaqMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FaqMaxAggregate = {
  __typename?: "FaqMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Feedback = {
  __typename?: "Feedback";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  message: Scalars["String"];
  userId: Scalars["String"];
  user: User;
};

export type FeedbackDeleteResponse = {
  __typename?: "FeedbackDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  message?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type FeedbackEdge = {
  __typename?: "FeedbackEdge";
  /** The node containing the Feedback */
  node: Feedback;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type FeedbackConnection = {
  __typename?: "FeedbackConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<FeedbackEdge>;
};

export type FeedbackCountAggregate = {
  __typename?: "FeedbackCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type FeedbackMinAggregate = {
  __typename?: "FeedbackMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FeedbackMaxAggregate = {
  __typename?: "FeedbackMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Misc = {
  __typename?: "Misc";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  type: MiscType;
  content: Scalars["String"];
};

export enum MiscType {
  PrivacyPolicy = "PRIVACY_POLICY",
  TermsOfService = "TERMS_OF_SERVICE"
}

export type MiscDeleteResponse = {
  __typename?: "MiscDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<MiscType>;
  content?: Maybe<Scalars["String"]>;
};

export type MiscEdge = {
  __typename?: "MiscEdge";
  /** The node containing the Misc */
  node: Misc;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type MiscConnection = {
  __typename?: "MiscConnection";
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<MiscEdge>;
};

export type MiscCountAggregate = {
  __typename?: "MiscCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type MiscMinAggregate = {
  __typename?: "MiscMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MiscMaxAggregate = {
  __typename?: "MiscMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SignedUrl = {
  __typename?: "SignedUrl";
  uid?: Maybe<Scalars["String"]>;
  signedUrl: Scalars["String"];
};

export type UserIdentityDeleteResponse = {
  __typename?: "UserIdentityDeleteResponse";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  provider?: Maybe<Scalars["String"]>;
  providerId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type UserIdentityEdge = {
  __typename?: "UserIdentityEdge";
  /** The node containing the UserIdentity */
  node: UserIdentity;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type UserIdentityCountAggregate = {
  __typename?: "UserIdentityCountAggregate";
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
};

export type UserIdentityMinAggregate = {
  __typename?: "UserIdentityMinAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserIdentityMaxAggregate = {
  __typename?: "UserIdentityMaxAggregate";
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Query = {
  __typename?: "Query";
  admin?: Maybe<Admin>;
  admins: AdminConnection;
  getAdminAuthProfile: Admin;
  adminPreference?: Maybe<AdminPreference>;
  adminPreferences: AdminPreferenceConnection;
  getAdminPreferenceByKey: AdminPreference;
  announcement?: Maybe<Announcement>;
  announcements: AnnouncementConnection;
  banner?: Maybe<Banner>;
  banners: BannerConnection;
  user?: Maybe<User>;
  users: UserConnection;
  getUserAuthProfile: User;
  validateToken: Scalars["Boolean"];
  userPreference?: Maybe<UserPreference>;
  userPreferences: UserPreferenceConnection;
  getUserPreferenceByKey: UserPreference;
  userDevice?: Maybe<UserDevice>;
  userDevices: UserDeviceConnection;
  getUserDeviceById: UserDevice;
  getMessageDetails: ChatMessage;
  getMessages: ChatMessages;
  getChatRoomDetails: ChatRoom;
  getChatRooms: ChatRooms;
  country?: Maybe<Country>;
  countries: CountryConnection;
  getAllCountries: Array<Country>;
  currency?: Maybe<Currency>;
  currencies: CurrencyConnection;
  getAllCurrencies: Array<Currency>;
  faq?: Maybe<Faq>;
  faqs: FaqConnection;
  feedback?: Maybe<Feedback>;
  feedbacks: FeedbackConnection;
  misc?: Maybe<Misc>;
  miscs: MiscConnection;
};

export type QueryAdminArgs = {
  id: Scalars["ID"];
};

export type QueryAdminsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<AdminFilter>;
  sorting?: Maybe<Array<AdminSort>>;
};

export type QueryAdminPreferenceArgs = {
  id: Scalars["ID"];
};

export type QueryAdminPreferencesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<AdminPreferenceFilter>;
  sorting?: Maybe<Array<AdminPreferenceSort>>;
};

export type QueryGetAdminPreferenceByKeyArgs = {
  input: AdminPreferenceFilterInput;
};

export type QueryAnnouncementArgs = {
  id: Scalars["ID"];
};

export type QueryAnnouncementsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<AnnouncementFilter>;
  sorting?: Maybe<Array<AnnouncementSort>>;
};

export type QueryBannerArgs = {
  id: Scalars["ID"];
};

export type QueryBannersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<BannerFilter>;
  sorting?: Maybe<Array<BannerSort>>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<UserFilter>;
  sorting?: Maybe<Array<UserSort>>;
};

export type QueryValidateTokenArgs = {
  token: Scalars["String"];
};

export type QueryUserPreferenceArgs = {
  id: Scalars["ID"];
};

export type QueryUserPreferencesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<UserPreferenceFilter>;
  sorting?: Maybe<Array<UserPreferenceSort>>;
};

export type QueryGetUserPreferenceByKeyArgs = {
  input: UserPreferenceFilterInput;
};

export type QueryUserDeviceArgs = {
  id: Scalars["ID"];
};

export type QueryUserDevicesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<UserDeviceFilter>;
  sorting?: Maybe<Array<UserDeviceSort>>;
};

export type QueryGetUserDeviceByIdArgs = {
  id: Scalars["String"];
};

export type QueryGetMessageDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetMessagesArgs = {
  option?: Maybe<CommonFilterOptionInput>;
  filter?: Maybe<ChatMessageFilterInput>;
};

export type QueryGetChatRoomDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetChatRoomsArgs = {
  option?: Maybe<CommonFilterOptionInput>;
  filter?: Maybe<ChatRoomFilterInput>;
};

export type QueryCountryArgs = {
  id: Scalars["ID"];
};

export type QueryCountriesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CountryFilter>;
  sorting?: Maybe<Array<CountrySort>>;
};

export type QueryGetAllCountriesArgs = {
  input?: Maybe<CountryFilterInput>;
};

export type QueryCurrencyArgs = {
  id: Scalars["ID"];
};

export type QueryCurrenciesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CurrencyFilter>;
  sorting?: Maybe<Array<CurrencySort>>;
};

export type QueryGetAllCurrenciesArgs = {
  input?: Maybe<CurrencyFilterInput>;
};

export type QueryFaqArgs = {
  id: Scalars["ID"];
};

export type QueryFaqsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FaqFilter>;
  sorting?: Maybe<Array<FaqSort>>;
};

export type QueryFeedbackArgs = {
  id: Scalars["ID"];
};

export type QueryFeedbacksArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FeedbackFilter>;
  sorting?: Maybe<Array<FeedbackSort>>;
};

export type QueryMiscArgs = {
  id: Scalars["ID"];
};

export type QueryMiscsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<MiscFilter>;
  sorting?: Maybe<Array<MiscSort>>;
};

export type CursorPaging = {
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars["ConnectionCursor"]>;
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars["ConnectionCursor"]>;
  /** Paginate first */
  first?: Maybe<Scalars["Int"]>;
  /** Paginate last */
  last?: Maybe<Scalars["Int"]>;
};

export type AdminFilter = {
  and?: Maybe<Array<AdminFilter>>;
  or?: Maybe<Array<AdminFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  role?: Maybe<AdminRoleTypeFilterComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["ID"]>;
  neq?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  gte?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  lte?: Maybe<Scalars["ID"]>;
  like?: Maybe<Scalars["ID"]>;
  notLike?: Maybe<Scalars["ID"]>;
  iLike?: Maybe<Scalars["ID"]>;
  notILike?: Maybe<Scalars["ID"]>;
  in?: Maybe<Array<Scalars["ID"]>>;
  notIn?: Maybe<Array<Scalars["ID"]>>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["DateTime"]>;
  neq?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars["DateTime"];
  upper: Scalars["DateTime"];
};

export type AdminRoleTypeFilterComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<AdminRoleType>;
  neq?: Maybe<AdminRoleType>;
  gt?: Maybe<AdminRoleType>;
  gte?: Maybe<AdminRoleType>;
  lt?: Maybe<AdminRoleType>;
  lte?: Maybe<AdminRoleType>;
  like?: Maybe<AdminRoleType>;
  notLike?: Maybe<AdminRoleType>;
  iLike?: Maybe<AdminRoleType>;
  notILike?: Maybe<AdminRoleType>;
  in?: Maybe<Array<AdminRoleType>>;
  notIn?: Maybe<Array<AdminRoleType>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["String"]>;
  neq?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  like?: Maybe<Scalars["String"]>;
  notLike?: Maybe<Scalars["String"]>;
  iLike?: Maybe<Scalars["String"]>;
  notILike?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
};

export type AdminSort = {
  field: AdminSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AdminSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Role = "role",
  Email = "email"
}

/** Sort Directions */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC"
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = "NULLS_FIRST",
  NullsLast = "NULLS_LAST"
}

export type AdminPreferenceFilter = {
  and?: Maybe<Array<AdminPreferenceFilter>>;
  or?: Maybe<Array<AdminPreferenceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type AdminPreferenceSort = {
  field: AdminPreferenceSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AdminPreferenceSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type AdminPreferenceFilterInput = {
  id?: Maybe<Scalars["String"]>;
  key?: Maybe<PreferenceKey>;
  adminId?: Maybe<Scalars["String"]>;
};

export type AnnouncementFilter = {
  and?: Maybe<Array<AnnouncementFilter>>;
  or?: Maybe<Array<AnnouncementFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type AnnouncementSort = {
  field: AnnouncementSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AnnouncementSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type BannerFilter = {
  and?: Maybe<Array<BannerFilter>>;
  or?: Maybe<Array<BannerFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type BannerSort = {
  field: BannerSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum BannerSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Name = "name"
}

export type UserFilter = {
  and?: Maybe<Array<UserFilter>>;
  or?: Maybe<Array<UserFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UserSort = {
  field: UserSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum UserSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Email = "email"
}

export type UserPreferenceFilter = {
  and?: Maybe<Array<UserPreferenceFilter>>;
  or?: Maybe<Array<UserPreferenceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserPreferenceSort = {
  field: UserPreferenceSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum UserPreferenceSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type UserPreferenceFilterInput = {
  key?: Maybe<PreferenceKey>;
  userId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

export type UserDeviceFilter = {
  and?: Maybe<Array<UserDeviceFilter>>;
  or?: Maybe<Array<UserDeviceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fcmToken?: Maybe<StringFieldComparison>;
  userId?: Maybe<StringFieldComparison>;
};

export type UserDeviceSort = {
  field: UserDeviceSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum UserDeviceSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  FcmToken = "fcmToken",
  UserId = "userId"
}

/** Specifies common filter inputs for query. */
export type CommonFilterOptionInput = {
  /** Keywords to be searched (partial match) in the query. */
  q?: Maybe<Scalars["String"]>;
  /** Page number to be used in the query. */
  page?: Maybe<Scalars["Int"]>;
  /** Page size to be used in the query. */
  size?: Maybe<Scalars["Int"]>;
  /** Field to be sorted in the query. */
  sortKey?: Maybe<Scalars["String"]>;
  /** Sort order (ASC, DESC) for the sortKey in the query. */
  sortOrder?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC"
}

export type ChatMessageFilterInput = {
  chatRoomId: Scalars["String"];
  userId?: Maybe<Scalars["String"]>;
};

export type ChatRoomFilterInput = {
  userId?: Maybe<Scalars["String"]>;
};

export type CountryFilter = {
  and?: Maybe<Array<CountryFilter>>;
  or?: Maybe<Array<CountryFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CountrySort = {
  field: CountrySortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CountrySortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type CountryFilterInput = {
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

export type CurrencyFilter = {
  and?: Maybe<Array<CurrencyFilter>>;
  or?: Maybe<Array<CurrencyFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CurrencySort = {
  field: CurrencySortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CurrencySortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type CurrencyFilterInput = {
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

export type FaqFilter = {
  and?: Maybe<Array<FaqFilter>>;
  or?: Maybe<Array<FaqFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FaqSort = {
  field: FaqSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum FaqSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type FeedbackFilter = {
  and?: Maybe<Array<FeedbackFilter>>;
  or?: Maybe<Array<FeedbackFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FeedbackSort = {
  field: FeedbackSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum FeedbackSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type MiscFilter = {
  and?: Maybe<Array<MiscFilter>>;
  or?: Maybe<Array<MiscFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MiscSort = {
  field: MiscSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum MiscSortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt"
}

export type Mutation = {
  __typename?: "Mutation";
  deleteOneAdmin: AdminDeleteResponse;
  deleteManyAdmins: DeleteManyResponse;
  updateOneAdmin: Admin;
  updateManyAdmins: UpdateManyResponse;
  adminCreate: Admin;
  adminSignIn: AdminLoginPayload;
  adminChangePassword: Admin;
  adminUpdateProfile: Admin;
  deleteOneAdminPreference: AdminPreferenceDeleteResponse;
  deleteManyAdminPreferences: DeleteManyResponse;
  updateOneAdminPreference: AdminPreference;
  updateManyAdminPreferences: UpdateManyResponse;
  adminUpdateOwnPreference: AdminPreference;
  deleteOneAnnouncement: AnnouncementDeleteResponse;
  deleteManyAnnouncements: DeleteManyResponse;
  updateOneAnnouncement: Announcement;
  updateManyAnnouncements: UpdateManyResponse;
  createOneAnnouncement: Announcement;
  createManyAnnouncements: Array<Announcement>;
  deleteOneBanner: BannerDeleteResponse;
  deleteManyBanners: DeleteManyResponse;
  updateOneBanner: Banner;
  updateManyBanners: UpdateManyResponse;
  createOneBanner: Banner;
  createManyBanners: Array<Banner>;
  deleteOneUser: UserDeleteResponse;
  deleteManyUsers: DeleteManyResponse;
  updateOneUser: User;
  updateManyUsers: UpdateManyResponse;
  userCreate: User;
  userSignUp: Scalars["String"];
  userSignIn: UserSignInPayload;
  userVerify: User;
  userChangePasswordWithoutAuth: User;
  userChangePassword: User;
  userCheckPassword: Scalars["String"];
  userResetPassword: UserSignInPayload;
  requestResetPasswordToken: Scalars["Boolean"];
  userRequestOTPForPasswordReset: Scalars["String"];
  userValidateOTPWithoutAuth: Scalars["String"];
  userValidateOTP: Scalars["String"];
  userSignInWithSocial?: Maybe<UserSignInPayload>;
  userMergeAccount: User;
  userSetup: User;
  userUpdateProfile: User;
  deleteOneUserPreference: UserPreferenceDeleteResponse;
  deleteManyUserPreferences: DeleteManyResponse;
  updateOneUserPreference: UserPreference;
  updateManyUserPreferences: UpdateManyResponse;
  userUpdateOwnPreference: UserPreference;
  updateOneUserDevice: UserDevice;
  updateManyUserDevices: UpdateManyResponse;
  createOneUserDevice: UserDevice;
  unregisterDeviceToken: UserDevice;
  createNotification: Notification;
  deleteMessage: ChatMessage;
  editMessage: ChatMessage;
  editDescription: ChatRoom;
  deleteOneCountry: CountryDeleteResponse;
  deleteManyCountries: DeleteManyResponse;
  updateOneCountry: Country;
  updateManyCountries: UpdateManyResponse;
  createOneCountry: Country;
  createManyCountries: Array<Country>;
  deleteOneCurrency: CurrencyDeleteResponse;
  deleteManyCurrencies: DeleteManyResponse;
  updateOneCurrency: Currency;
  updateManyCurrencies: UpdateManyResponse;
  createOneCurrency: Currency;
  createManyCurrencies: Array<Currency>;
  deleteOneFaq: FaqDeleteResponse;
  deleteManyFaqs: DeleteManyResponse;
  updateOneFaq: Faq;
  updateManyFaqs: UpdateManyResponse;
  createOneFaq: Faq;
  createManyFaqs: Array<Faq>;
  deleteOneFeedback: FeedbackDeleteResponse;
  deleteManyFeedbacks: DeleteManyResponse;
  updateOneFeedback: Feedback;
  updateManyFeedbacks: UpdateManyResponse;
  createOneFeedback: Feedback;
  createOrUpdateMisc: Misc;
  deleteOneMisc: MiscDeleteResponse;
  deleteManyMiscs: DeleteManyResponse;
  updateOneMisc: Misc;
  createOneMisc: Misc;
  generateSignedUrl: SignedUrl;
  deleteOneUserIdentity: UserIdentityDeleteResponse;
  deleteManyUserIdentities: DeleteManyResponse;
  updateOneUserIdentity: UserIdentity;
  updateManyUserIdentities: UpdateManyResponse;
};

export type MutationDeleteOneAdminArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyAdminsArgs = {
  input: DeleteManyAdminsInput;
};

export type MutationUpdateOneAdminArgs = {
  input: UpdateOneAdminInput;
};

export type MutationUpdateManyAdminsArgs = {
  input: UpdateManyAdminsInput;
};

export type MutationAdminCreateArgs = {
  input: AdminCreateInput;
};

export type MutationAdminSignInArgs = {
  input: AdminSignInInput;
};

export type MutationAdminChangePasswordArgs = {
  input: AdminChangePasswordInput;
};

export type MutationAdminUpdateProfileArgs = {
  input: AdminUpdateProfileInput;
};

export type MutationDeleteOneAdminPreferenceArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyAdminPreferencesArgs = {
  input: DeleteManyAdminPreferencesInput;
};

export type MutationUpdateOneAdminPreferenceArgs = {
  input: UpdateOneAdminPreferenceInput;
};

export type MutationUpdateManyAdminPreferencesArgs = {
  input: UpdateManyAdminPreferencesInput;
};

export type MutationAdminUpdateOwnPreferenceArgs = {
  input: AdminPreferenceUpdateOwnInput;
};

export type MutationDeleteOneAnnouncementArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyAnnouncementsArgs = {
  input: DeleteManyAnnouncementsInput;
};

export type MutationUpdateOneAnnouncementArgs = {
  input: UpdateOneAnnouncementInput;
};

export type MutationUpdateManyAnnouncementsArgs = {
  input: UpdateManyAnnouncementsInput;
};

export type MutationCreateOneAnnouncementArgs = {
  input: CreateOneAnnouncementInput;
};

export type MutationCreateManyAnnouncementsArgs = {
  input: CreateManyAnnouncementsInput;
};

export type MutationDeleteOneBannerArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyBannersArgs = {
  input: DeleteManyBannersInput;
};

export type MutationUpdateOneBannerArgs = {
  input: UpdateOneBannerInput;
};

export type MutationUpdateManyBannersArgs = {
  input: UpdateManyBannersInput;
};

export type MutationCreateOneBannerArgs = {
  input: CreateOneBannerInput;
};

export type MutationCreateManyBannersArgs = {
  input: CreateManyBannersInput;
};

export type MutationDeleteOneUserArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserSignUpArgs = {
  input: UserCreateInput;
};

export type MutationUserSignInArgs = {
  input: UserSignInInput;
};

export type MutationUserVerifyArgs = {
  otp: Scalars["String"];
  id: Scalars["String"];
};

export type MutationUserChangePasswordWithoutAuthArgs = {
  input: UserChangePasswordInput;
};

export type MutationUserChangePasswordArgs = {
  input: UserChangePasswordInput;
};

export type MutationUserCheckPasswordArgs = {
  oldPassword: Scalars["String"];
};

export type MutationUserResetPasswordArgs = {
  input: UserResetPasswordInput;
};

export type MutationRequestResetPasswordTokenArgs = {
  email: Scalars["String"];
};

export type MutationUserRequestOtpForPasswordResetArgs = {
  email: Scalars["String"];
};

export type MutationUserValidateOtpWithoutAuthArgs = {
  otp: Scalars["String"];
  id: Scalars["String"];
};

export type MutationUserValidateOtpArgs = {
  otp: Scalars["String"];
  id: Scalars["String"];
};

export type MutationUserSignInWithSocialArgs = {
  accessToken: Scalars["String"];
  platform: Scalars["String"];
};

export type MutationUserMergeAccountArgs = {
  password: Scalars["String"];
  accessToken: Scalars["String"];
  platform: Scalars["String"];
};

export type MutationUserSetupArgs = {
  input: UserSetupInput;
};

export type MutationUserUpdateProfileArgs = {
  input: UserUpdateProfileInput;
};

export type MutationDeleteOneUserPreferenceArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyUserPreferencesArgs = {
  input: DeleteManyUserPreferencesInput;
};

export type MutationUpdateOneUserPreferenceArgs = {
  input: UpdateOneUserPreferenceInput;
};

export type MutationUpdateManyUserPreferencesArgs = {
  input: UpdateManyUserPreferencesInput;
};

export type MutationUserUpdateOwnPreferenceArgs = {
  input: UserPreferenceUpdateOwnInput;
};

export type MutationUpdateOneUserDeviceArgs = {
  input: UpdateOneUserDeviceInput;
};

export type MutationUpdateManyUserDevicesArgs = {
  input: UpdateManyUserDevicesInput;
};

export type MutationCreateOneUserDeviceArgs = {
  input: CreateOneUserDeviceInput;
};

export type MutationUnregisterDeviceTokenArgs = {
  fcmTokens: Array<Scalars["String"]>;
};

export type MutationCreateNotificationArgs = {
  input: NotificationCreateInput;
};

export type MutationDeleteMessageArgs = {
  ids: Array<Scalars["String"]>;
};

export type MutationEditMessageArgs = {
  input: ChatMessageUpdateInput;
};

export type MutationEditDescriptionArgs = {
  input: ChatRoomDescriptionUpdateInput;
};

export type MutationDeleteOneCountryArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyCountriesArgs = {
  input: DeleteManyCountriesInput;
};

export type MutationUpdateOneCountryArgs = {
  input: UpdateOneCountryInput;
};

export type MutationUpdateManyCountriesArgs = {
  input: UpdateManyCountriesInput;
};

export type MutationCreateOneCountryArgs = {
  input: CreateOneCountryInput;
};

export type MutationCreateManyCountriesArgs = {
  input: CreateManyCountriesInput;
};

export type MutationDeleteOneCurrencyArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyCurrenciesArgs = {
  input: DeleteManyCurrenciesInput;
};

export type MutationUpdateOneCurrencyArgs = {
  input: UpdateOneCurrencyInput;
};

export type MutationUpdateManyCurrenciesArgs = {
  input: UpdateManyCurrenciesInput;
};

export type MutationCreateOneCurrencyArgs = {
  input: CreateOneCurrencyInput;
};

export type MutationCreateManyCurrenciesArgs = {
  input: CreateManyCurrenciesInput;
};

export type MutationDeleteOneFaqArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyFaqsArgs = {
  input: DeleteManyFaqsInput;
};

export type MutationUpdateOneFaqArgs = {
  input: UpdateOneFaqInput;
};

export type MutationUpdateManyFaqsArgs = {
  input: UpdateManyFaqsInput;
};

export type MutationCreateOneFaqArgs = {
  input: CreateOneFaqInput;
};

export type MutationCreateManyFaqsArgs = {
  input: CreateManyFaqsInput;
};

export type MutationDeleteOneFeedbackArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyFeedbacksArgs = {
  input: DeleteManyFeedbacksInput;
};

export type MutationUpdateOneFeedbackArgs = {
  input: UpdateOneFeedbackInput;
};

export type MutationUpdateManyFeedbacksArgs = {
  input: UpdateManyFeedbacksInput;
};

export type MutationCreateOneFeedbackArgs = {
  input: CreateOneFeedbackInput;
};

export type MutationCreateOrUpdateMiscArgs = {
  input: MiscCreateInput;
};

export type MutationDeleteOneMiscArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyMiscsArgs = {
  input: DeleteManyMiscsInput;
};

export type MutationUpdateOneMiscArgs = {
  input: UpdateOneMiscInput;
};

export type MutationCreateOneMiscArgs = {
  input: CreateOneMiscInput;
};

export type MutationGenerateSignedUrlArgs = {
  input: UploadRequest;
};

export type MutationDeleteOneUserIdentityArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteManyUserIdentitiesArgs = {
  input: DeleteManyUserIdentitiesInput;
};

export type MutationUpdateOneUserIdentityArgs = {
  input: UpdateOneUserIdentityInput;
};

export type MutationUpdateManyUserIdentitiesArgs = {
  input: UpdateManyUserIdentitiesInput;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteManyAdminsInput = {
  /** Filter to find records to delete */
  filter: AdminDeleteFilter;
};

export type AdminDeleteFilter = {
  and?: Maybe<Array<AdminDeleteFilter>>;
  or?: Maybe<Array<AdminDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  role?: Maybe<AdminRoleTypeFilterComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneAdminInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: AdminUpdateInput;
};

export type AdminUpdateInput = {
  role?: Maybe<AdminRoleType>;
  email?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type UpdateManyAdminsInput = {
  /** Filter used to find fields to update */
  filter: AdminUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AdminUpdateInput;
};

export type AdminUpdateFilter = {
  and?: Maybe<Array<AdminUpdateFilter>>;
  or?: Maybe<Array<AdminUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  role?: Maybe<AdminRoleTypeFilterComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type AdminCreateInput = {
  role: AdminRoleType;
  password: Scalars["String"];
  email: Scalars["String"];
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type AdminSignInInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type AdminChangePasswordInput = {
  id: Scalars["String"];
  oldPassword: Scalars["String"];
  newPassword: Scalars["String"];
};

export type AdminUpdateProfileInput = {
  id: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type DeleteManyAdminPreferencesInput = {
  /** Filter to find records to delete */
  filter: AdminPreferenceDeleteFilter;
};

export type AdminPreferenceDeleteFilter = {
  and?: Maybe<Array<AdminPreferenceDeleteFilter>>;
  or?: Maybe<Array<AdminPreferenceDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneAdminPreferenceInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: AdminPreferenceUpdateInput;
};

export type AdminPreferenceUpdateInput = {
  adminId: Scalars["String"];
  key: PreferenceKey;
  value: Scalars["String"];
};

export type UpdateManyAdminPreferencesInput = {
  /** Filter used to find fields to update */
  filter: AdminPreferenceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AdminPreferenceUpdateInput;
};

export type AdminPreferenceUpdateFilter = {
  and?: Maybe<Array<AdminPreferenceUpdateFilter>>;
  or?: Maybe<Array<AdminPreferenceUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type AdminPreferenceUpdateOwnInput = {
  id: Scalars["String"];
  adminId: Scalars["String"];
  key: PreferenceKey;
  value: Scalars["String"];
};

export type DeleteManyAnnouncementsInput = {
  /** Filter to find records to delete */
  filter: AnnouncementDeleteFilter;
};

export type AnnouncementDeleteFilter = {
  and?: Maybe<Array<AnnouncementDeleteFilter>>;
  or?: Maybe<Array<AnnouncementDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneAnnouncementInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: AnnouncementUpdateInput;
};

export type AnnouncementUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  publishDateTime?: Maybe<Scalars["DateTime"]>;
  endDateTime?: Maybe<Scalars["DateTime"]>;
};

export type UpdateManyAnnouncementsInput = {
  /** Filter used to find fields to update */
  filter: AnnouncementUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AnnouncementUpdateInput;
};

export type AnnouncementUpdateFilter = {
  and?: Maybe<Array<AnnouncementUpdateFilter>>;
  or?: Maybe<Array<AnnouncementUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneAnnouncementInput = {
  /** The record to create */
  announcement: AnnouncementCreateInput;
};

export type AnnouncementCreateInput = {
  title: Scalars["String"];
  author: Scalars["String"];
  status: Scalars["String"];
  content: Scalars["String"];
  coverImage?: Maybe<Scalars["String"]>;
  publishDateTime?: Maybe<Scalars["DateTime"]>;
  endDateTime?: Maybe<Scalars["DateTime"]>;
};

export type CreateManyAnnouncementsInput = {
  /** Array of records to create */
  announcements: Array<AnnouncementCreateInput>;
};

export type DeleteManyBannersInput = {
  /** Filter to find records to delete */
  filter: BannerDeleteFilter;
};

export type BannerDeleteFilter = {
  and?: Maybe<Array<BannerDeleteFilter>>;
  or?: Maybe<Array<BannerDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneBannerInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: BannerUpdateInput;
};

export type BannerUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyBannersInput = {
  /** Filter used to find fields to update */
  filter: BannerUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: BannerUpdateInput;
};

export type BannerUpdateFilter = {
  and?: Maybe<Array<BannerUpdateFilter>>;
  or?: Maybe<Array<BannerUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneBannerInput = {
  /** The record to create */
  banner: BannerCreateInput;
};

export type BannerCreateInput = {
  name: Scalars["String"];
  image: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
};

export type CreateManyBannersInput = {
  /** Array of records to create */
  banners: Array<BannerCreateInput>;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type UserDeleteFilter = {
  and?: Maybe<Array<UserDeleteFilter>>;
  or?: Maybe<Array<UserDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UserUpdateInput;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  avatar?: Maybe<Scalars["String"]>;
  socketId?: Maybe<Scalars["String"]>;
  chatStatus?: Maybe<ChatStatus>;
  status?: Maybe<UserStatus>;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdateInput;
};

export type UserUpdateFilter = {
  and?: Maybe<Array<UserUpdateFilter>>;
  or?: Maybe<Array<UserUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UserCreateInput = {
  password: Scalars["String"];
  email: Scalars["String"];
  username: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  avatar?: Maybe<Scalars["String"]>;
  role?: Maybe<UserRoleType>;
  socketId?: Maybe<Scalars["String"]>;
  chatStatus?: Maybe<ChatStatus>;
  status?: Maybe<UserStatus>;
};

export type UserSignInInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserChangePasswordInput = {
  otpId?: Maybe<Scalars["String"]>;
  otp: Scalars["String"];
  newPassword: Scalars["String"];
};

export type UserResetPasswordInput = {
  token: Scalars["String"];
  newPassword: Scalars["String"];
};

export type UserSetupInput = {
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
};

export type UserUpdateProfileInput = {
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phoneCode?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  avatar?: Maybe<Scalars["String"]>;
  socketId?: Maybe<Scalars["String"]>;
  chatStatus?: Maybe<ChatStatus>;
  status?: Maybe<UserStatus>;
  id: Scalars["String"];
};

export type DeleteManyUserPreferencesInput = {
  /** Filter to find records to delete */
  filter: UserPreferenceDeleteFilter;
};

export type UserPreferenceDeleteFilter = {
  and?: Maybe<Array<UserPreferenceDeleteFilter>>;
  or?: Maybe<Array<UserPreferenceDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneUserPreferenceInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UserPreferenceUpdateInput;
};

export type UserPreferenceUpdateInput = {
  key?: Maybe<PreferenceKey>;
  value?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyUserPreferencesInput = {
  /** Filter used to find fields to update */
  filter: UserPreferenceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserPreferenceUpdateInput;
};

export type UserPreferenceUpdateFilter = {
  and?: Maybe<Array<UserPreferenceUpdateFilter>>;
  or?: Maybe<Array<UserPreferenceUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserPreferenceUpdateOwnInput = {
  id: Scalars["String"];
  userId: Scalars["String"];
  key: PreferenceKey;
  value: Scalars["String"];
};

export type UpdateOneUserDeviceInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UserDeviceUpdateInput;
};

export type UserDeviceUpdateInput = {
  fcmToken?: Maybe<Scalars["String"]>;
  businessId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyUserDevicesInput = {
  /** Filter used to find fields to update */
  filter: UserDeviceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserDeviceUpdateInput;
};

export type UserDeviceUpdateFilter = {
  and?: Maybe<Array<UserDeviceUpdateFilter>>;
  or?: Maybe<Array<UserDeviceUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fcmToken?: Maybe<StringFieldComparison>;
  userId?: Maybe<StringFieldComparison>;
};

export type CreateOneUserDeviceInput = {
  /** The record to create */
  userDevice: UserDeviceCreateInput;
};

export type UserDeviceCreateInput = {
  fcmToken: Scalars["String"];
  businessId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type NotificationCreateInput = {
  title: Scalars["String"];
  message: Scalars["String"];
  pushNotification: Scalars["Boolean"];
};

export type ChatMessageUpdateInput = {
  id: Scalars["String"];
  message: Scalars["String"];
};

export type ChatRoomDescriptionUpdateInput = {
  id: Scalars["String"];
  description: Scalars["String"];
};

export type DeleteManyCountriesInput = {
  /** Filter to find records to delete */
  filter: CountryDeleteFilter;
};

export type CountryDeleteFilter = {
  and?: Maybe<Array<CountryDeleteFilter>>;
  or?: Maybe<Array<CountryDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneCountryInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: CountryUpdateInput;
};

export type CountryUpdateInput = {
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyCountriesInput = {
  /** Filter used to find fields to update */
  filter: CountryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CountryUpdateInput;
};

export type CountryUpdateFilter = {
  and?: Maybe<Array<CountryUpdateFilter>>;
  or?: Maybe<Array<CountryUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneCountryInput = {
  /** The record to create */
  country: CountryCreateInput;
};

export type CountryCreateInput = {
  status?: Maybe<GeneralStatus>;
  name: Scalars["String"];
  code: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
};

export type CreateManyCountriesInput = {
  /** Array of records to create */
  countries: Array<CountryCreateInput>;
};

export type DeleteManyCurrenciesInput = {
  /** Filter to find records to delete */
  filter: CurrencyDeleteFilter;
};

export type CurrencyDeleteFilter = {
  and?: Maybe<Array<CurrencyDeleteFilter>>;
  or?: Maybe<Array<CurrencyDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneCurrencyInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: CurrencyUpdateInput;
};

export type CurrencyUpdateInput = {
  status?: Maybe<GeneralStatus>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyCurrenciesInput = {
  /** Filter used to find fields to update */
  filter: CurrencyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CurrencyUpdateInput;
};

export type CurrencyUpdateFilter = {
  and?: Maybe<Array<CurrencyUpdateFilter>>;
  or?: Maybe<Array<CurrencyUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneCurrencyInput = {
  /** The record to create */
  currency: CurrencyCreateInput;
};

export type CurrencyCreateInput = {
  status?: Maybe<GeneralStatus>;
  name: Scalars["String"];
  code: Scalars["String"];
  countryCode: Scalars["String"];
};

export type CreateManyCurrenciesInput = {
  /** Array of records to create */
  currencies: Array<CurrencyCreateInput>;
};

export type DeleteManyFaqsInput = {
  /** Filter to find records to delete */
  filter: FaqDeleteFilter;
};

export type FaqDeleteFilter = {
  and?: Maybe<Array<FaqDeleteFilter>>;
  or?: Maybe<Array<FaqDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneFaqInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: FaqUpdateInput;
};

export type FaqUpdateInput = {
  question?: Maybe<Scalars["String"]>;
  answer?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyFaqsInput = {
  /** Filter used to find fields to update */
  filter: FaqUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: FaqUpdateInput;
};

export type FaqUpdateFilter = {
  and?: Maybe<Array<FaqUpdateFilter>>;
  or?: Maybe<Array<FaqUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneFaqInput = {
  /** The record to create */
  faq: FaqCreateInput;
};

export type FaqCreateInput = {
  question: Scalars["String"];
  answer?: Maybe<Scalars["String"]>;
};

export type CreateManyFaqsInput = {
  /** Array of records to create */
  faqs: Array<FaqCreateInput>;
};

export type DeleteManyFeedbacksInput = {
  /** Filter to find records to delete */
  filter: FeedbackDeleteFilter;
};

export type FeedbackDeleteFilter = {
  and?: Maybe<Array<FeedbackDeleteFilter>>;
  or?: Maybe<Array<FeedbackDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneFeedbackInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: FeedbackUpdateInput;
};

export type FeedbackUpdateInput = {
  message: Scalars["String"];
};

export type UpdateManyFeedbacksInput = {
  /** Filter used to find fields to update */
  filter: FeedbackUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: FeedbackUpdateInput;
};

export type FeedbackUpdateFilter = {
  and?: Maybe<Array<FeedbackUpdateFilter>>;
  or?: Maybe<Array<FeedbackUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneFeedbackInput = {
  /** The record to create */
  feedback: FeedbackCreateInput;
};

export type FeedbackCreateInput = {
  message: Scalars["String"];
  userId: Scalars["String"];
};

export type MiscCreateInput = {
  type: MiscType;
  content: Scalars["String"];
};

export type DeleteManyMiscsInput = {
  /** Filter to find records to delete */
  filter: MiscDeleteFilter;
};

export type MiscDeleteFilter = {
  and?: Maybe<Array<MiscDeleteFilter>>;
  or?: Maybe<Array<MiscDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneMiscInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: MiscUpdateInput;
};

export type MiscUpdateInput = {
  type: MiscType;
  content: Scalars["String"];
  id: Scalars["String"];
};

export type CreateOneMiscInput = {
  /** The record to create */
  misc: MiscCreateInput;
};

/** Specifies the upload request. */
export type UploadRequest = {
  uid?: Maybe<Scalars["String"]>;
  purpose: UploadPurpose;
  mimeType: Scalars["String"];
};

export enum UploadPurpose {
  Picture = "PICTURE",
  Image = "IMAGE",
  Testing = "TESTING"
}

export type DeleteManyUserIdentitiesInput = {
  /** Filter to find records to delete */
  filter: UserIdentityDeleteFilter;
};

export type UserIdentityDeleteFilter = {
  and?: Maybe<Array<UserIdentityDeleteFilter>>;
  or?: Maybe<Array<UserIdentityDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneUserIdentityInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UserIdentityUpdateInput;
};

export type UserIdentityUpdateInput = {
  provider?: Maybe<Scalars["String"]>;
  providerId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateManyUserIdentitiesInput = {
  /** Filter used to find fields to update */
  filter: UserIdentityUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserIdentityUpdateInput;
};

export type UserIdentityUpdateFilter = {
  and?: Maybe<Array<UserIdentityUpdateFilter>>;
  or?: Maybe<Array<UserIdentityUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

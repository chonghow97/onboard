/* eslint-disable */
import * as Types from "../@types/index";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type FragmentUserFragment = { __typename?: "User" } & Pick<
  Types.User,
  | "id"
  | "email"
  | "username"
  | "firstName"
  | "lastName"
  | "phoneCode"
  | "phoneNumber"
  | "dateOfBirth"
  | "role"
  | "status"
  | "updatedAt"
  | "createdAt"
>;

export type UserSignInMutationVariables = Types.Exact<{
  input: Types.UserSignInInput;
}>;

export type UserSignInMutation = { __typename?: "Mutation" } & {
  userSignIn: { __typename?: "UserSignInPayload" } & Pick<
    Types.UserSignInPayload,
    "accessToken" | "expiresIn"
  > & { user: { __typename?: "User" } & FragmentUserFragment };
};

export type UserSignUpMutationVariables = Types.Exact<{
  input: Types.UserCreateInput;
}>;

export type UserSignUpMutation = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "userSignUp"
>;

export type GetUserAuthProfileQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserAuthProfileQuery = { __typename?: "Query" } & {
  getUserAuthProfile: { __typename?: "User" } & FragmentUserFragment;
};

export type UserUpdateMutationVariables = Types.Exact<{
  input: Types.UserUpdateProfileInput;
}>;

export type UserUpdateMutation = { __typename?: "Mutation" } & {
  userUpdateProfile: { __typename?: "User" } & FragmentUserFragment;
};

export const FragmentUserFragment = gql`
  fragment fragmentUser on User {
    id
    email
    username
    firstName
    lastName
    phoneCode
    phoneNumber
    dateOfBirth
    role
    status
    updatedAt
    createdAt
  }
`;
export const UserSignInDocument = gql`
  mutation userSignIn($input: UserSignInInput!) {
    userSignIn(input: $input) {
      user {
        ...fragmentUser
      }
      accessToken
      expiresIn
    }
  }
  ${FragmentUserFragment}
`;
export type UserSignInMutationFn = Apollo.MutationFunction<
  UserSignInMutation,
  UserSignInMutationVariables
>;

/**
 * __useUserSignInMutation__
 *
 * To run a mutation, you first call `useUserSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignInMutation, { data, loading, error }] = useUserSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserSignInMutation,
    UserSignInMutationVariables
  >
) {
  return Apollo.useMutation<UserSignInMutation, UserSignInMutationVariables>(
    UserSignInDocument,
    baseOptions
  );
}
export type UserSignInMutationHookResult = ReturnType<
  typeof useUserSignInMutation
>;
export type UserSignInMutationResult = Apollo.MutationResult<UserSignInMutation>;
export type UserSignInMutationOptions = Apollo.BaseMutationOptions<
  UserSignInMutation,
  UserSignInMutationVariables
>;
export const UserSignUpDocument = gql`
  mutation userSignUp($input: UserCreateInput!) {
    userSignUp(input: $input)
  }
`;
export type UserSignUpMutationFn = Apollo.MutationFunction<
  UserSignUpMutation,
  UserSignUpMutationVariables
>;

/**
 * __useUserSignUpMutation__
 *
 * To run a mutation, you first call `useUserSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUpMutation, { data, loading, error }] = useUserSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserSignUpMutation,
    UserSignUpMutationVariables
  >
) {
  return Apollo.useMutation<UserSignUpMutation, UserSignUpMutationVariables>(
    UserSignUpDocument,
    baseOptions
  );
}
export type UserSignUpMutationHookResult = ReturnType<
  typeof useUserSignUpMutation
>;
export type UserSignUpMutationResult = Apollo.MutationResult<UserSignUpMutation>;
export type UserSignUpMutationOptions = Apollo.BaseMutationOptions<
  UserSignUpMutation,
  UserSignUpMutationVariables
>;
export const GetUserAuthProfileDocument = gql`
  query getUserAuthProfile {
    getUserAuthProfile {
      ...fragmentUser
    }
  }
  ${FragmentUserFragment}
`;

/**
 * __useGetUserAuthProfileQuery__
 *
 * To run a query within a React component, call `useGetUserAuthProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAuthProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAuthProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAuthProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >
) {
  return Apollo.useQuery<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >(GetUserAuthProfileDocument, baseOptions);
}
export function useGetUserAuthProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >(GetUserAuthProfileDocument, baseOptions);
}
export type GetUserAuthProfileQueryHookResult = ReturnType<
  typeof useGetUserAuthProfileQuery
>;
export type GetUserAuthProfileLazyQueryHookResult = ReturnType<
  typeof useGetUserAuthProfileLazyQuery
>;
export type GetUserAuthProfileQueryResult = Apollo.QueryResult<
  GetUserAuthProfileQuery,
  GetUserAuthProfileQueryVariables
>;
export const UserUpdateDocument = gql`
  mutation UserUpdate($input: UserUpdateProfileInput!) {
    userUpdateProfile(input: $input) {
      ...fragmentUser
    }
  }
  ${FragmentUserFragment}
`;
export type UserUpdateMutationFn = Apollo.MutationFunction<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserUpdateMutation,
    UserUpdateMutationVariables
  >
) {
  return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(
    UserUpdateDocument,
    baseOptions
  );
}
export type UserUpdateMutationHookResult = ReturnType<
  typeof useUserUpdateMutation
>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;

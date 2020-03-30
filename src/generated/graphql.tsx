import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type LocalAuthPayload = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addTask: Task;
  login: UserLoginSuccess;
  logout?: Maybe<Scalars['Boolean']>;
  removeTask: Scalars['Int'];
  setSession?: Maybe<Scalars['Boolean']>;
  shareTask: Task;
  signup: UserLoginSuccess;
};


export type MutationAddTaskArgs = {
  newTaskData: NewTaskInput;
};


export type MutationLoginArgs = {
  localAuthPayload: LocalAuthPayload;
};


export type MutationLogoutArgs = {
  nothing?: Maybe<Scalars['Boolean']>;
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type MutationSetSessionArgs = {
  access_token: Scalars['String'];
};


export type MutationShareTaskArgs = {
  shareTaskInput: ShareTaskInput;
};


export type MutationSignupArgs = {
  localAuthPayload: LocalAuthPayload;
};

export type NewTaskInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  session?: Maybe<Scalars['String']>;
  sharedTasks: Array<Task>;
  task: Task;
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};

export type ShareTaskInput = {
  taskId: Scalars['Int'];
  shareWithId: Scalars['Int'];
};

export type Task = {
   __typename?: 'Task';
  id: Scalars['Int'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author: User;
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  tasks: Array<Task>;
};

export type UserLoginSuccess = {
   __typename?: 'UserLoginSuccess';
  id: Scalars['Int'];
  username: Scalars['String'];
  tasks: Array<Task>;
  access_token: Scalars['String'];
};

export type GetSessionQueryVariables = {};


export type GetSessionQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'session'>
);

export type SetSessionMutationVariables = {
  access_token: Scalars['String'];
};


export type SetSessionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setSession'>
);

export type LogoutMutationVariables = {
  nothing?: Maybe<Scalars['Boolean']>;
};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type LoginMutationVariables = {
  localAuthPayload: LocalAuthPayload;
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserLoginSuccess' }
    & Pick<UserLoginSuccess, 'id' | 'username' | 'access_token'>
  ) }
);

export type SignupMutationVariables = {
  localAuthPayload: LocalAuthPayload;
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'UserLoginSuccess' }
    & Pick<UserLoginSuccess, 'id' | 'username' | 'access_token'>
  ) }
);


export const GetSessionDocument = gql`
    query GetSession {
  session @client
}
    `;
export type GetSessionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSessionQuery, GetSessionQueryVariables>, 'query'>;

    export const GetSessionComponent = (props: GetSessionComponentProps) => (
      <ApolloReactComponents.Query<GetSessionQuery, GetSessionQueryVariables> query={GetSessionDocument} {...props} />
    );
    
export type GetSessionProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSessionQuery, GetSessionQueryVariables> & TChildProps;
export function withGetSession<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSessionQuery,
  GetSessionQueryVariables,
  GetSessionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSessionQuery, GetSessionQueryVariables, GetSessionProps<TChildProps>>(GetSessionDocument, {
      alias: 'getSession',
      ...operationOptions
    });
};

/**
 * __useGetSessionQuery__
 *
 * To run a query within a React component, call `useGetSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, baseOptions);
      }
export function useGetSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, baseOptions);
        }
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>;
export type GetSessionLazyQueryHookResult = ReturnType<typeof useGetSessionLazyQuery>;
export type GetSessionQueryResult = ApolloReactCommon.QueryResult<GetSessionQuery, GetSessionQueryVariables>;
export const SetSessionDocument = gql`
    mutation SetSession($access_token: String!) {
  setSession(access_token: $access_token) @client
}
    `;
export type SetSessionMutationFn = ApolloReactCommon.MutationFunction<SetSessionMutation, SetSessionMutationVariables>;
export type SetSessionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetSessionMutation, SetSessionMutationVariables>, 'mutation'>;

    export const SetSessionComponent = (props: SetSessionComponentProps) => (
      <ApolloReactComponents.Mutation<SetSessionMutation, SetSessionMutationVariables> mutation={SetSessionDocument} {...props} />
    );
    
export type SetSessionProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SetSessionMutation, SetSessionMutationVariables> & TChildProps;
export function withSetSession<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SetSessionMutation,
  SetSessionMutationVariables,
  SetSessionProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SetSessionMutation, SetSessionMutationVariables, SetSessionProps<TChildProps>>(SetSessionDocument, {
      alias: 'setSession',
      ...operationOptions
    });
};

/**
 * __useSetSessionMutation__
 *
 * To run a mutation, you first call `useSetSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setSessionMutation, { data, loading, error }] = useSetSessionMutation({
 *   variables: {
 *      access_token: // value for 'access_token'
 *   },
 * });
 */
export function useSetSessionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetSessionMutation, SetSessionMutationVariables>) {
        return ApolloReactHooks.useMutation<SetSessionMutation, SetSessionMutationVariables>(SetSessionDocument, baseOptions);
      }
export type SetSessionMutationHookResult = ReturnType<typeof useSetSessionMutation>;
export type SetSessionMutationResult = ApolloReactCommon.MutationResult<SetSessionMutation>;
export type SetSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<SetSessionMutation, SetSessionMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($nothing: Boolean) {
  logout(nothing: $nothing) @client
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LogoutMutation, LogoutMutationVariables> & TChildProps;
export function withLogout<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      nothing: // value for 'nothing'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const LoginDocument = gql`
    mutation Login($localAuthPayload: LocalAuthPayload!) {
  login(localAuthPayload: $localAuthPayload) {
    id
    username
    access_token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginMutation, LoginMutationVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      localAuthPayload: // value for 'localAuthPayload'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($localAuthPayload: LocalAuthPayload!) {
  signup(localAuthPayload: $localAuthPayload) {
    id
    username
    access_token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;
export type SignupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupMutation, SignupMutationVariables>, 'mutation'>;

    export const SignupComponent = (props: SignupComponentProps) => (
      <ApolloReactComponents.Mutation<SignupMutation, SignupMutationVariables> mutation={SignupDocument} {...props} />
    );
    
export type SignupProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SignupMutation, SignupMutationVariables> & TChildProps;
export function withSignup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignupMutation,
  SignupMutationVariables,
  SignupProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SignupMutation, SignupMutationVariables, SignupProps<TChildProps>>(SignupDocument, {
      alias: 'signup',
      ...operationOptions
    });
};

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      localAuthPayload: // value for 'localAuthPayload'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
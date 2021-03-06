import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}


export interface ChangeTaskStatusInput {
  taskId: Scalars['Int'];
  status: TaskStatus;
}

export interface LocalAuthPayload {
  username: Scalars['String'];
  password: Scalars['String'];
}

export interface Mutation {
   __typename?: 'Mutation';
  addTask: Task;
  changeTaskStatus: Task;
  login: UserLoginSuccess;
  logout?: Maybe<Scalars['Boolean']>;
  removeTask: Scalars['Int'];
  setSession?: Maybe<Scalars['Boolean']>;
  shareTask: Task;
  signup: UserLoginSuccess;
  updateTaskDetails: Task;
}


export interface MutationAddTaskArgs {
  newTaskData: NewTaskInput;
}


export interface MutationChangeTaskStatusArgs {
  changeTaskStatusInput: ChangeTaskStatusInput;
}


export interface MutationLoginArgs {
  localAuthPayload: LocalAuthPayload;
}


export interface MutationLogoutArgs {
  nothing?: Maybe<Scalars['Boolean']>;
}


export interface MutationRemoveTaskArgs {
  id: Scalars['Int'];
}


export interface MutationSetSessionArgs {
  access_token: Scalars['String'];
}


export interface MutationShareTaskArgs {
  shareTaskInput: ShareTaskInput;
}


export interface MutationSignupArgs {
  localAuthPayload: LocalAuthPayload;
}


export interface MutationUpdateTaskDetailsArgs {
  taskDetails: UpdateTaskDetails;
}

export interface NewTaskInput {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}

export interface Profile {
   __typename?: 'Profile';
  id: Scalars['Int'];
  username: Scalars['String'];
}

export interface Query {
   __typename?: 'Query';
  me: User;
  profiles: Array<Profile>;
  session?: Maybe<Scalars['String']>;
  sharedTasks: Array<Task>;
  task: Task;
  taskEvents: Array<TaskStatusHistoryEvent>;
  tasks: Array<Task>;
}


export interface QueryTaskArgs {
  id: Scalars['Int'];
}


export interface QueryTaskEventsArgs {
  taskId: Scalars['Int'];
}

export interface ShareTaskInput {
  taskId: Scalars['Int'];
  shareWithId: Scalars['Int'];
}

export interface Task {
   __typename?: 'Task';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author: User;
  status: TaskStatus;
  user: User;
}

export enum TaskStatus {
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  REJECTED = 'REJECTED'
}

export interface TaskStatusHistoryEvent {
   __typename?: 'TaskStatusHistoryEvent';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  status: TaskStatus;
  user: User;
}

export interface UpdateTaskDetails {
  taskId: Scalars['Int'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}

export interface User {
   __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  tasks: Array<Task>;
}

export interface UserLoginSuccess {
   __typename?: 'UserLoginSuccess';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  tasks: Array<Task>;
  access_token: Scalars['String'];
}

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

export type ChangeTaskStatusMutationVariables = {
  changeTaskStatusInput: ChangeTaskStatusInput;
};


export type ChangeTaskStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeTaskStatus: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'status' | 'createdAt' | 'updatedAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type UpdateTaskDetailsMutationVariables = {
  taskDetails: UpdateTaskDetails;
};


export type UpdateTaskDetailsMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskDetails: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'status' | 'createdAt' | 'updatedAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type CreateTaskMutationVariables = {
  newTaskData: NewTaskInput;
};


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'status' | 'createdAt' | 'updatedAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type ShareTaskMutationVariables = {
  shareTaskInput: ShareTaskInput;
};


export type ShareTaskMutation = (
  { __typename?: 'Mutation' }
  & { shareTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type GetTasksQueryVariables = {};


export type GetTasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'status'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type GetProfilesQueryVariables = {};


export type GetProfilesQuery = (
  { __typename?: 'Query' }
  & { profiles: Array<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'username'>
  )> }
);

export type GetSharedTasksQueryVariables = {};


export type GetSharedTasksQuery = (
  { __typename?: 'Query' }
  & { sharedTasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'status'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type GetTaskEventsQueryVariables = {
  taskId: Scalars['Int'];
};


export type GetTaskEventsQuery = (
  { __typename?: 'Query' }
  & { taskEvents: Array<(
    { __typename?: 'TaskStatusHistoryEvent' }
    & Pick<TaskStatusHistoryEvent, 'id' | 'createdAt' | 'taskId' | 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
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
export const ChangeTaskStatusDocument = gql`
    mutation ChangeTaskStatus($changeTaskStatusInput: ChangeTaskStatusInput!) {
  changeTaskStatus(changeTaskStatusInput: $changeTaskStatusInput) {
    id
    title
    description
    status
    createdAt
    updatedAt
    author {
      id
      username
    }
  }
}
    `;
export type ChangeTaskStatusMutationFn = ApolloReactCommon.MutationFunction<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables>;
export type ChangeTaskStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables>, 'mutation'>;

    export const ChangeTaskStatusComponent = (props: ChangeTaskStatusComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables> mutation={ChangeTaskStatusDocument} {...props} />
    );
    
export type ChangeTaskStatusProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables> & TChildProps;
export function withChangeTaskStatus<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangeTaskStatusMutation,
  ChangeTaskStatusMutationVariables,
  ChangeTaskStatusProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables, ChangeTaskStatusProps<TChildProps>>(ChangeTaskStatusDocument, {
      alias: 'changeTaskStatus',
      ...operationOptions
    });
};

/**
 * __useChangeTaskStatusMutation__
 *
 * To run a mutation, you first call `useChangeTaskStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTaskStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTaskStatusMutation, { data, loading, error }] = useChangeTaskStatusMutation({
 *   variables: {
 *      changeTaskStatusInput: // value for 'changeTaskStatusInput'
 *   },
 * });
 */
export function useChangeTaskStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables>(ChangeTaskStatusDocument, baseOptions);
      }
export type ChangeTaskStatusMutationHookResult = ReturnType<typeof useChangeTaskStatusMutation>;
export type ChangeTaskStatusMutationResult = ApolloReactCommon.MutationResult<ChangeTaskStatusMutation>;
export type ChangeTaskStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeTaskStatusMutation, ChangeTaskStatusMutationVariables>;
export const UpdateTaskDetailsDocument = gql`
    mutation UpdateTaskDetails($taskDetails: UpdateTaskDetails!) {
  updateTaskDetails(taskDetails: $taskDetails) {
    id
    title
    description
    status
    createdAt
    updatedAt
    author {
      id
      username
    }
  }
}
    `;
export type UpdateTaskDetailsMutationFn = ApolloReactCommon.MutationFunction<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables>;
export type UpdateTaskDetailsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables>, 'mutation'>;

    export const UpdateTaskDetailsComponent = (props: UpdateTaskDetailsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables> mutation={UpdateTaskDetailsDocument} {...props} />
    );
    
export type UpdateTaskDetailsProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables> & TChildProps;
export function withUpdateTaskDetails<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaskDetailsMutation,
  UpdateTaskDetailsMutationVariables,
  UpdateTaskDetailsProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables, UpdateTaskDetailsProps<TChildProps>>(UpdateTaskDetailsDocument, {
      alias: 'updateTaskDetails',
      ...operationOptions
    });
};

/**
 * __useUpdateTaskDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateTaskDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskDetailsMutation, { data, loading, error }] = useUpdateTaskDetailsMutation({
 *   variables: {
 *      taskDetails: // value for 'taskDetails'
 *   },
 * });
 */
export function useUpdateTaskDetailsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables>(UpdateTaskDetailsDocument, baseOptions);
      }
export type UpdateTaskDetailsMutationHookResult = ReturnType<typeof useUpdateTaskDetailsMutation>;
export type UpdateTaskDetailsMutationResult = ApolloReactCommon.MutationResult<UpdateTaskDetailsMutation>;
export type UpdateTaskDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaskDetailsMutation, UpdateTaskDetailsMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($newTaskData: NewTaskInput!) {
  addTask(newTaskData: $newTaskData) {
    id
    title
    description
    status
    createdAt
    updatedAt
    author {
      id
      username
    }
  }
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export type CreateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTaskMutation, CreateTaskMutationVariables>, 'mutation'>;

    export const CreateTaskComponent = (props: CreateTaskComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTaskMutation, CreateTaskMutationVariables> mutation={CreateTaskDocument} {...props} />
    );
    
export type CreateTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateTaskMutation, CreateTaskMutationVariables> & TChildProps;
export function withCreateTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  CreateTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaskMutation, CreateTaskMutationVariables, CreateTaskProps<TChildProps>>(CreateTaskDocument, {
      alias: 'createTask',
      ...operationOptions
    });
};

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      newTaskData: // value for 'newTaskData'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const ShareTaskDocument = gql`
    mutation ShareTask($shareTaskInput: ShareTaskInput!) {
  shareTask(shareTaskInput: $shareTaskInput) {
    id
  }
}
    `;
export type ShareTaskMutationFn = ApolloReactCommon.MutationFunction<ShareTaskMutation, ShareTaskMutationVariables>;
export type ShareTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ShareTaskMutation, ShareTaskMutationVariables>, 'mutation'>;

    export const ShareTaskComponent = (props: ShareTaskComponentProps) => (
      <ApolloReactComponents.Mutation<ShareTaskMutation, ShareTaskMutationVariables> mutation={ShareTaskDocument} {...props} />
    );
    
export type ShareTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ShareTaskMutation, ShareTaskMutationVariables> & TChildProps;
export function withShareTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ShareTaskMutation,
  ShareTaskMutationVariables,
  ShareTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ShareTaskMutation, ShareTaskMutationVariables, ShareTaskProps<TChildProps>>(ShareTaskDocument, {
      alias: 'shareTask',
      ...operationOptions
    });
};

/**
 * __useShareTaskMutation__
 *
 * To run a mutation, you first call `useShareTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareTaskMutation, { data, loading, error }] = useShareTaskMutation({
 *   variables: {
 *      shareTaskInput: // value for 'shareTaskInput'
 *   },
 * });
 */
export function useShareTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ShareTaskMutation, ShareTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<ShareTaskMutation, ShareTaskMutationVariables>(ShareTaskDocument, baseOptions);
      }
export type ShareTaskMutationHookResult = ReturnType<typeof useShareTaskMutation>;
export type ShareTaskMutationResult = ApolloReactCommon.MutationResult<ShareTaskMutation>;
export type ShareTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<ShareTaskMutation, ShareTaskMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}> = ApolloReactHoc.DataProps<MeQuery, MeQueryVariables> & TChildProps;
export function withMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const GetTasksDocument = gql`
    query GetTasks {
  tasks {
    id
    title
    description
    createdAt
    updatedAt
    status
    author {
      id
      username
    }
  }
}
    `;
export type GetTasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTasksQuery, GetTasksQueryVariables>, 'query'>;

    export const GetTasksComponent = (props: GetTasksComponentProps) => (
      <ApolloReactComponents.Query<GetTasksQuery, GetTasksQueryVariables> query={GetTasksDocument} {...props} />
    );
    
export type GetTasksProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTasksQuery, GetTasksQueryVariables> & TChildProps;
export function withGetTasks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTasksQuery,
  GetTasksQueryVariables,
  GetTasksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTasksQuery, GetTasksQueryVariables, GetTasksProps<TChildProps>>(GetTasksDocument, {
      alias: 'getTasks',
      ...operationOptions
    });
};

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
      }
export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export const GetProfilesDocument = gql`
    query GetProfiles {
  profiles {
    id
    username
  }
}
    `;
export type GetProfilesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfilesQuery, GetProfilesQueryVariables>, 'query'>;

    export const GetProfilesComponent = (props: GetProfilesComponentProps) => (
      <ApolloReactComponents.Query<GetProfilesQuery, GetProfilesQueryVariables> query={GetProfilesDocument} {...props} />
    );
    
export type GetProfilesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetProfilesQuery, GetProfilesQueryVariables> & TChildProps;
export function withGetProfiles<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfilesQuery,
  GetProfilesQueryVariables,
  GetProfilesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfilesQuery, GetProfilesQueryVariables, GetProfilesProps<TChildProps>>(GetProfilesDocument, {
      alias: 'getProfiles',
      ...operationOptions
    });
};

/**
 * __useGetProfilesQuery__
 *
 * To run a query within a React component, call `useGetProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfilesQuery, GetProfilesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfilesQuery, GetProfilesQueryVariables>(GetProfilesDocument, baseOptions);
      }
export function useGetProfilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfilesQuery, GetProfilesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfilesQuery, GetProfilesQueryVariables>(GetProfilesDocument, baseOptions);
        }
export type GetProfilesQueryHookResult = ReturnType<typeof useGetProfilesQuery>;
export type GetProfilesLazyQueryHookResult = ReturnType<typeof useGetProfilesLazyQuery>;
export type GetProfilesQueryResult = ApolloReactCommon.QueryResult<GetProfilesQuery, GetProfilesQueryVariables>;
export const GetSharedTasksDocument = gql`
    query GetSharedTasks {
  sharedTasks {
    id
    title
    description
    createdAt
    updatedAt
    status
    author {
      id
      username
    }
  }
}
    `;
export type GetSharedTasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSharedTasksQuery, GetSharedTasksQueryVariables>, 'query'>;

    export const GetSharedTasksComponent = (props: GetSharedTasksComponentProps) => (
      <ApolloReactComponents.Query<GetSharedTasksQuery, GetSharedTasksQueryVariables> query={GetSharedTasksDocument} {...props} />
    );
    
export type GetSharedTasksProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSharedTasksQuery, GetSharedTasksQueryVariables> & TChildProps;
export function withGetSharedTasks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSharedTasksQuery,
  GetSharedTasksQueryVariables,
  GetSharedTasksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSharedTasksQuery, GetSharedTasksQueryVariables, GetSharedTasksProps<TChildProps>>(GetSharedTasksDocument, {
      alias: 'getSharedTasks',
      ...operationOptions
    });
};

/**
 * __useGetSharedTasksQuery__
 *
 * To run a query within a React component, call `useGetSharedTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSharedTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSharedTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSharedTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSharedTasksQuery, GetSharedTasksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSharedTasksQuery, GetSharedTasksQueryVariables>(GetSharedTasksDocument, baseOptions);
      }
export function useGetSharedTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSharedTasksQuery, GetSharedTasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSharedTasksQuery, GetSharedTasksQueryVariables>(GetSharedTasksDocument, baseOptions);
        }
export type GetSharedTasksQueryHookResult = ReturnType<typeof useGetSharedTasksQuery>;
export type GetSharedTasksLazyQueryHookResult = ReturnType<typeof useGetSharedTasksLazyQuery>;
export type GetSharedTasksQueryResult = ApolloReactCommon.QueryResult<GetSharedTasksQuery, GetSharedTasksQueryVariables>;
export const GetTaskEventsDocument = gql`
    query GetTaskEvents($taskId: Int!) {
  taskEvents(taskId: $taskId) {
    id
    createdAt
    taskId
    status
    user {
      id
      username
    }
  }
}
    `;
export type GetTaskEventsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTaskEventsQuery, GetTaskEventsQueryVariables>, 'query'> & ({ variables: GetTaskEventsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTaskEventsComponent = (props: GetTaskEventsComponentProps) => (
      <ApolloReactComponents.Query<GetTaskEventsQuery, GetTaskEventsQueryVariables> query={GetTaskEventsDocument} {...props} />
    );
    
export type GetTaskEventsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTaskEventsQuery, GetTaskEventsQueryVariables> & TChildProps;
export function withGetTaskEvents<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTaskEventsQuery,
  GetTaskEventsQueryVariables,
  GetTaskEventsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTaskEventsQuery, GetTaskEventsQueryVariables, GetTaskEventsProps<TChildProps>>(GetTaskEventsDocument, {
      alias: 'getTaskEvents',
      ...operationOptions
    });
};

/**
 * __useGetTaskEventsQuery__
 *
 * To run a query within a React component, call `useGetTaskEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskEventsQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetTaskEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaskEventsQuery, GetTaskEventsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTaskEventsQuery, GetTaskEventsQueryVariables>(GetTaskEventsDocument, baseOptions);
      }
export function useGetTaskEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskEventsQuery, GetTaskEventsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTaskEventsQuery, GetTaskEventsQueryVariables>(GetTaskEventsDocument, baseOptions);
        }
export type GetTaskEventsQueryHookResult = ReturnType<typeof useGetTaskEventsQuery>;
export type GetTaskEventsLazyQueryHookResult = ReturnType<typeof useGetTaskEventsLazyQuery>;
export type GetTaskEventsQueryResult = ApolloReactCommon.QueryResult<GetTaskEventsQuery, GetTaskEventsQueryVariables>;
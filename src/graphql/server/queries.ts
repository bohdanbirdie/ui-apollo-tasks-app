import { gql } from "apollo-boost";

export const ME = gql`
  query Me {
    me{
      id
      username 
    }
  }
`;

export const TASKS = gql`
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
`

const PROFILES = gql`
  query GetProfiles {
    profiles {
      id
      username
    }
  }
`

const SHARED_TASKS = gql`
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
`

const TASK_EVENTS = gql`
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
`
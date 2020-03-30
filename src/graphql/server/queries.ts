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
      author {
        id
        username
      }
    }
  }
`
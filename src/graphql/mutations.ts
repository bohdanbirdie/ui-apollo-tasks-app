import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation Login($localAuthPayload: LocalAuthPayload!) {
    login(localAuthPayload: $localAuthPayload) {
      id
      username
      access_token
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($localAuthPayload: LocalAuthPayload!) {
    signup(localAuthPayload: $localAuthPayload) {
      id
      username
      access_token
    }
  }
`;
import { gql, InMemoryCache, Resolver } from "apollo-boost";
// import { Resolver } from 'apollo-'
export const GET_SESSION = gql` 
 query GetSession {
    session @client  
}`;

export const SET_SESSION = gql` 
 mutation SetSession($access_token: String!) {
    setSession(access_token: $access_token) @client
 }
 `;

export const SessionMutations: Record<string, Resolver> = {
    setSession: (_, variables: { access_token: string }, { cache }: { cache: InMemoryCache }) => {
        cache.writeData({
            data: { session: variables.access_token }
        });

        return null;
    }
};
import { gql, InMemoryCache, Resolver } from "apollo-boost";

import { SyncStorage } from "../../services/SyncStorage";
import { client } from "../../apollo/client";

export const GET_SESSION = gql` 
 query GetSession {
    session @client  
}`;

export const SET_SESSION = gql` 
 mutation SetSession($access_token: String!) {
    setSession(access_token: $access_token) @client
 }
 `;

export const LOGOUT = gql` 
 mutation Logout($nothing: Boolean) {
    logout(nothing: $nothing) @client
 }`;

export const SessionMutations: Record<string, Resolver> = {
    setSession: (_, { access_token }: { access_token: string }, { cache }: { cache: InMemoryCache }) => {
        cache.writeData({
            data: { session: access_token }
        });
        SyncStorage.saveToken(access_token);

        return null;
    },
    logout: async () => {
        SyncStorage.deleteToken();
        // client.stop()
        await client.resetStore()
        // eslint-disable-next-line no-restricted-globals
        // history.go('/auth');

        return null;
    }
};
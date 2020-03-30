import { InMemoryCache } from "apollo-cache-inmemory";
import { SyncStorage } from "../services/SyncStorage";

const cache = new InMemoryCache();

cache.writeData({
  data: {
    session: SyncStorage.getToken(),
  }
});

export { cache };
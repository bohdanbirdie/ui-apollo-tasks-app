const TOKEN_KEY = 'TASKS_APP_TOKEN';

export abstract class SyncStorage {
  public static saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public static getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  public static getAuthHeader() {
    const token = SyncStorage.getToken();

    return token ? { authorization:`Bearer ${token}`} : {};
  }

  public static deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

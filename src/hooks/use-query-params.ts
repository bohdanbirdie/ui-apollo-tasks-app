import { useLocation, useHistory } from "react-router-dom";

export function useQueryParams(): [(key: string, defaultValue: string) => string, (key: string, value: string) => void] {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search)

  const get = (key: string, defaultValue: string) => query.get(key) || defaultValue;
  const set = (key: string, value: string) => {
    query.set(key, value);
    history.push({
      pathname: location.pathname,
      search: query.toString()
    });
  };

  return [get, set];
}
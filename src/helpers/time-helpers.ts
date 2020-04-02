import format from "date-fns/formatDistanceToNow";

export const formatDistanceToNowDateString = (dateString: string) => {

  return format(new Date(+dateString), { addSuffix: true });
}
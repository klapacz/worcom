import { intlFormat } from "date-fns";

export function formatDate(date: Date) {
  intlFormat(date, {
    locale: "pl",
  });
}

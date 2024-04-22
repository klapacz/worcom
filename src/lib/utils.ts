import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { intlFormat } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return intlFormat(date, {
    locale: "pl",
  });
}

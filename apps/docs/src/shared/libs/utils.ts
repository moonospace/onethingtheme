import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatReadableDate(
  stringDate: string,
  format?: string
): string {
  const formattedDate = dayjs(stringDate).format(format);
  return formattedDate;
}

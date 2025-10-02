/**
 * This file contains type guards for typescript
 * @param value
 * @returns
 */

import { Film } from "../types";

/**
 * Check if the value is a string and inform typescript of this
 * @param value
 * @returns
 */
const isString = (value: unknown): value is string => {
  return typeof value === "string" || value instanceof String;
};

/* Check if the value is a number and inform typescript of this */
const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && isFinite(value);
};

const isNewFilm = (body: unknown): body is Film => {
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body && 
      (typeof body.title !== "string")) ||
    (("director" in body) && 
      (typeof body.director !== "string")) ||
    (("duration" in body) &&
      (typeof body.duration !== "number"))
  ) {
    return false;
  }

  return true;
}

export { isString, isNumber, isNewFilm};

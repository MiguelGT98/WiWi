import { decode } from "jsonwebtoken";

export const currentUser = () => localStorage.getItem("jwt");

export const decodeUser = () => {
  return decode(currentUser());
};
